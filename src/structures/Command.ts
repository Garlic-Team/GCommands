/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Snowflake, PermissionResolvable, Interaction, Message, User, GuildMember, MessagePayload } from 'discord.js';

import { GCommandsClient } from '../base/GCommandsClient';
import { CommandOptions, CommandArgsOption } from '../typings/interfaces';
import { CommandOptionsDefaults } from '../typings/defaults';
import { CommandType, ChannelType } from '../util/Constants';
import { GError } from './GError';

type CommandRunOptions = {
    interaction?: Interaction,
    message?: Message,
    author: User,
    member?: GuildMember,
    respond(options: MessagePayload): Promise<Message>,
    followUp(options: MessagePayload):Promise<Message>,
    args: Record<string, unknown>,
    arrayArgs: Array<unknown>
}

export class Command {
    public client: GCommandsClient;
    public name: string;
    public contextMenuName: string;
    public description: string;
    public type: Array<CommandType>;
    public cooldown: string;
    public args: Array<CommandArgsOption>;
    public alwaysObtain: boolean;
    public clientRequiredPermissions?: Array<PermissionResolvable>;
    public userRequiredPermissions?: Array<PermissionResolvable>;
    public userRequiredRoles?: Array<Snowflake>;
    public userOnly?: Array<Snowflake>;
    public channelType?: Array<ChannelType>;
    public allowDm?: boolean;
    public guildOnly?: Array<Snowflake>;
    public nsfw?: boolean;
    public aliases?: Array<string>;
    public category?: string;
    public usage?: string;
    private _path: string;

    public constructor(client: GCommandsClient, options: CommandOptions) {
        this.client = client;

        Object.assign(this, Object.assign(CommandOptionsDefaults, options));
    }

    public run(options: CommandRunOptions) {
        throw new GError('[COMMAND]',`Command ${this.name} doesn't provide a run method!`);
    }

    public async reload(): Promise<boolean> {
        const cmdPath = this.client.commands.get(this.name)._path;

        delete require.cache[require.resolve(cmdPath)];
        this.client.commands.delete(this.name);

        let newCommand = await require(cmdPath);

        newCommand = new newCommand(this.client);

        newCommand._path = cmdPath;
        this.client.commands.set(newCommand.name, newCommand);
        return true;
    }
}
