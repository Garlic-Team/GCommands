const { resolveString, isClass } = require('../util/util');
const GError = require('./GError');
const { ArgumentChannelTypes } = require('../util/Constants');

/**
 * The Command class
 */
class Command {
    /**
     * Creates new Command instance
     * @param {Client} client
     * @param {CommandOptions} options
    */
    constructor(client, options = {}) {
        /**
         * Client
         * @type {Client}
         */
        this.client = client;

        /**
         * Name
         * @type {string}
         */
        this.name = resolveString(options.name);

        /**
         * ContextMenuName
         * @type {string}
         */
        this.contextMenuName = resolveString(options.contextMenuName);

        /**
         * Description
         * @type {string}
         */
        this.description = resolveString(options.description);

        /**
         * Cooldown
         * @type {string}
         * @default undefined
         */
        this.cooldown = options.cooldown ? resolveString(options.cooldown) : undefined;

        /**
         * ExpectedArgs
         * @type {string | Array}
         * @deprecated
         */
        this.expectedArgs = options.expectedArgs;

        /**
         * Args
         * @type {CommandArgsOption[]}
         */
        this.args = options.args ? options.args.map(arg => {
            const types = arg.channel_types ? !Array.isArray(arg.channel_types) ? [arg.channel_types] : arg.channel_types : [];
            const final = [];

            for (const type of types) {
                final.push(ArgumentChannelTypes[type]);
            }

            if (final.length !== 0) arg.channel_types = final;

            return arg;
        }) : null;

        /**
         * AlwaysObtain
         * @type {boolean}
         */
         this.alwaysObtain = options.alwaysObtain ? Boolean(options.alwaysObtain) : false;

        /**
         * MinArgs
         * @type {number}
         * @deprecated use args
         */
        this.minArgs = Number(options.minArgs);

        /**
         * UserRequiredPermissions
         * @type {string | Array}
         */
        this.userRequiredPermissions = options.userRequiredPermissions;

        /**
         * UserRequiredRoles
         * @type {string | Array}
         */
        this.userRequiredRoles = options.userRequiredRoles;

        /**
         * ClientRequiredPermissions
         * @type {string | Array}
         */
        this.clientRequiredPermissions = options.clientRequiredPermissions;

        /**
         * UserOnly
         * @type {Snowflake | Array}
         */
        this.userOnly = options.userOnly;

        /**
         * ChannelOnly
         * @type {Snowflake | Array}
         */
        this.channelOnly = options.channelOnly;

        /**
         * ChannelTextOnly
         * @type {boolean}
         */
        this.channelTextOnly = options.channelTextOnly;

        /**
         * ChannelNewsOnly
         * @type {boolean}
         */
        this.channelNewsOnly = options.channelNewsOnly;

        /**
         * ChannelThreadOnly
         * @type {boolean}
         */
        this.channelThreadOnly = options.channelThreadOnly;

        /**
         * AllowDm
         * @type {boolean}
         */
         this.allowDm = options.allowDm;

        /**
         * GuildOnly
         * @type {Snowflake | Array}
         */
        this.guildOnly = options.guildOnly ? Array.isArray(options.guildOnly) ? options.guildOnly : Array(options.guildOnly) : undefined;

        /**
         * Nsfw
         * @type {boolean}
         */
        this.nsfw = options.nsfw;

        /**
         * Slash
         * @type {boolean}
         */
        this.slash = options.slash;

        /**
         * Context
         * @type {GCommandsOptionsCommandsContext}
         */
        this.context = options.context;

        /**
         * Aliases
         * @type {Array}
         */
        this.aliases = Array.isArray(options.aliases) ? options.aliases : Array(options.aliases);

        /**
         * Category
         * @type {string}
         */
        this.category = options.category ? resolveString(options.category) : undefined;

        /**
         * Usage
         * @type {string}
         */
        this.usage = resolveString(options.usage);

        /**
         * Command Path
         * @type {string}
         * @private
         */
        this._path;

        /**
         * Options, ability to add own options
         * @type {Object}
         */
        this._options = options;
    }

    /**
     * Run function
     * @param {CommandRunOptions} options
     * @param {Array} arrayArgs
     * @param {Object} objectArgs
     */
    async run(options, arrayArgs, objectArgs) { // eslint-disable-line no-unused-vars, require-await
        throw new GError('[COMMAND]',`Command ${this.name} doesn't provide a run method!`);
    }

	/**
	 * Reloads the command
	 */
    async reload() {
        const cmdPath = this.client.gcommands.get(this.name)._path;

        delete require.cache[require.resolve(cmdPath)];
        this.client.gcommands.delete(this.name);

        let newCommand = await require(cmdPath);

        if (!isClass(newCommand)) throw new GError('[COMMAND]',`Command ${this.name} must be class!`);
        else newCommand = new newCommand(this.client);

        if (!(newCommand instanceof Command)) throw new GError('[COMMAND]',`Command ${newCommand.name} doesnt belong in Commands.`);

        if (newCommand.name !== this.name) throw new GError('[COMMAND]','Command name cannot change.');

        const nglds = newCommand.guildOnly ? Array.isArray(newCommand.guildOnly) ? newCommand.guildOnly : Array(newCommand.guildOnly) : undefined;

        const check1 = nglds.every((x, i) => x === this.guildOnly[i]);
        const check2 = this.guildOnly.every((x, i) => x === nglds[i]);
        if (!check1 || !check2) throw new GError('[COMMAND]','Command guildOnly cannot change.');

        newCommand._path = cmdPath;
        this.client.gcommands.set(newCommand.name, newCommand);
        return true;
    }
}

module.exports = Command;