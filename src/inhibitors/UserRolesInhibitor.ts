import {Snowflake} from 'discord.js';
import {BaseContext} from '../lib/structures/BaseContext';

export class UserRolesInhibitor {
	public readonly roles: Array<Snowflake>;
	public readonly every?: boolean;

	constructor(roles: Array<Snowflake>, every?: boolean) {
		this.roles = roles;
		this.every = every;
	}

	run(ctx: BaseContext): boolean {
		return ctx.guild && this.roles[this.every ? 'every' : 'some'](role => ctx.member.roles.cache.has(role));
	}
}