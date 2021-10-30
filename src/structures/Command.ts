import { Snowflake, PermissionResolvable, TextBasedChannelTypes } from 'discord.js';

import { GCommandsClient } from '../base/GCommandsClient';
import { CommandOptions } from '../typings/interfaces';
import { CommandOptionsDefaults } from '../typings/defaults';
import { CommandType } from '../util/Constants';
import { GError } from './GError';

export class Command {
    public client: GCommandsClient;
    public name: string;
    public contextMenuName: string;
    public description: string;
    public type: Array<CommandType>;
    public cooldown: string;
    public args: Array<boolean>;
    public alwaysObtain: boolean;
    public clientRequiredPermissions?: Array<PermissionResolvable>;
    public userRequiredPermissions?: Array<PermissionResolvable>;
    public userRequiredRoles?: Array<Snowflake>;
    public userOnly?: Array<Snowflake>;
    public channelTypeOnly?: Array<TextBasedChannelTypes>;
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

    public run() {
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