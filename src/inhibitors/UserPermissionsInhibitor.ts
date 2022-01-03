import {PermissionResolvable} from 'discord.js';
import {Context} from '../lib/structures/contexts/Context';

export class UserPermissionsInhibitor {
	public readonly permissions: Array<PermissionResolvable>;

	constructor(permissions: Array<PermissionResolvable>) {
		this.permissions = permissions;
	}

	run(ctx: Context): boolean {
		return ctx.inGuild() && ctx.memberPermissions.has(this.permissions);
	}
}