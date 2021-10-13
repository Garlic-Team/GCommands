const SubCommandArgumentType = require('./ArgumentTypes/Subcommand');
const SubCommandGroupArgumentType = require('./ArgumentTypes/SubcommandGroup');
const StringArgumentType = require('./ArgumentTypes/String');
const IntegerArgumentType = require('./ArgumentTypes/Intiger');
const BooleanArgumentType = require('./ArgumentTypes/Boolean');
const ChannelArgumentType = require('./ArgumentTypes/Channel');
const UserArgumentType = require('./ArgumentTypes/User');
const RoleArgumentType = require('./ArgumentTypes/Role');
const NumberArgumentType = require('./ArgumentTypes/Number');
const MentionableArgumentType = require('./ArgumentTypes/Mentionable');
const MessageActionRow = require('./MessageActionRow');
const MessageButton = require('./MessageButton');

/**
 * The Argument class
 */
class Argument {
    /**
     * The Argument class
     * @param {Client} client
     * @param {Object} argument
     * @param {boolean} isNotDm
     */
    constructor(client, argument, isNotDm) {
        /**
         * Client
         * @type {Client}
        */
        this.client = client;

        /**
         * Name
         * @type {string}
        */
        this.name = argument.name;

        /**
         * IsNotDm
         * @type {boolean}
        */
        this.isNotDm = isNotDm;

        /**
         * Argument
         * @type {Argument}
        */
        this.argument = this.determineArgument(client, argument);

        /**
         * Type
         * @type {string}
        */
        this.type = this.determineArgument(client, argument).type;

        /**
         * Required
         * @type {boolean}
        */
        this.required = ['sub_command', 'sub_command_group'].includes(this.type) ? true : argument.required;

        /**
         * Prompt
         * @type {string}
        */
        this.prompt = argument.prompt || `Please define argument ${argument.name}`;

        /**
         * Choices
         * @type {Object}
        */
        this.choices = argument.choices;

        /**
         * Channel Types
         * @type {ArgumentChannelTypes}
         */
        this.channel_types = argument.channel_types || [];

        /**
         * SubCommands
         * @type {Array<Object>}
        */
        this.subcommands = argument.subcommands;
    }

    /**
     * Method to obtain
     * @param {Message|Object}
     * @param {string}
     */
    async obtain(message, language, prompt = this.prompt) {
        if (message.author.bot) return;
        if (this.type === 'invalid') return 'cancel';

        const wait = 30000;

        const getComponents = disabled => {
            const components = [
                new MessageActionRow()
                    .addComponents([
                        new MessageButton()
                            .setLabel('Cancel')
                            .setStyle('red')
                            .setCustomId(`argument_cancel_${message.id}_${this.name}`)
                            .setDisabled(disabled),
                        !this.required ? new MessageButton()
                            .setLabel('Skip')
                            .setStyle('blurple')
                            .setCustomId(`argument_skip_${message.id}_${this.name}`)
                            .setDisabled(disabled)
                            : [],
                    ]),
            ];
            if (this.type === 'boolean') {
                components[1] = new MessageActionRow().addComponents([
                    new MessageButton()
                        .setLabel('True')
                        .setStyle('green')
                        .setCustomId(`argument_true_${message.id}_${this.name}`)
                        .setDisabled(disabled),
                    new MessageButton()
                        .setLabel('False')
                        .setStyle('red')
                        .setCustomId(`argument_false_${message.id}_${this.name}`)
                        .setDisabled(disabled),
                ]);
            }

            return components.reverse();
        };

        if (!this.required) prompt += `\n${this.client.languageFile.ARGS_OPTIONAL[language]}`;
        if (['sub_command', 'sub_command_group'].includes(this.type) && this.subcommands) prompt = this.client.languageFile.ARGS_COMMAND[language].replace('{choices}', this.subcommands.map(sc => `\`${sc.name}\``).join(', '));

        const msgReply = await message.reply({
            content: prompt,
            components: getComponents(false),
        });

        const messageCollectorfilter = msg => msg.author.id === message.author.id;
        const componentsCollectorfilter = i => i.user.id === message.author.id && i.message && i.message.id === msgReply.id && i.customId.includes(message.id) && i.customId.includes(this.name);

        const collectors = [
            message.channel.awaitMessages({ filter: messageCollectorfilter, max: 1, time: wait, errors: ['TIME'] }),
            message.channel.awaitMessageComponent({ filter: componentsCollectorfilter, componentType: 'BUTTON', time: (wait + 1) }),
        ];

        const responses = await Promise.race(collectors).catch();
        if (responses.size === 0) {
            return 'timelimit';
        }
        const resFirst = typeof responses.first === 'function' ? responses.first() : responses;

        if (resFirst.customId) {
            resFirst.deferUpdate().catch();
            resFirst.content = resFirst.customId.split('_')[1];
        }

        if (this.client.deletePrompt) await msgReply.delete();
        else await msgReply.edit({ content: msgReply.content, components: getComponents(true) });

        if (this.client.deleteInput && this.isNotDm && !resFirst.customId && message.channel.permissionsFor(this.client.user.id).has('MANAGE_MESSAGES')) await resFirst.delete();

        if (!this.required && resFirst.content === 'skip') return 'skip';
        else if (resFirst.content === 'cancel') return 'cancel';

        const invalid = await this.argument.validate(this, { content: resFirst.content.toLowerCase(), guild: resFirst.guild }, language);

        if (invalid) {
            return this.obtain(message, language, invalid);
        }

        return this.argument.get(resFirst);
    }

    /**
     * Method to determineArgument
     * @param {Client}
     * @param {Argument}
     */
    determineArgument(client, argument) {
        if (argument.type === 1) return new SubCommandArgumentType(client, argument);
        if (argument.type === 2) return new SubCommandGroupArgumentType(client, argument);
        if (argument.type === 3) return new StringArgumentType(client, argument);
        if (argument.type === 4) return new IntegerArgumentType(client, argument);
        if (argument.type === 5) return new BooleanArgumentType(client, argument);
        if (this.isNotDm && argument.type === 6) return new UserArgumentType(client, argument);
        if (this.isNotDm && argument.type === 7) return new ChannelArgumentType(client, argument);
        if (this.isNotDm && argument.type === 8) return new RoleArgumentType(client, argument);
        if (this.isNotDm && argument.type === 9) return new MentionableArgumentType(client, argument);
        if (argument.type === 10) return new NumberArgumentType(client, argument);
        else return { type: 'invalid' };
    }
}

module.exports = Argument;