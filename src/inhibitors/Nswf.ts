import {CommandContext} from '../lib/structures/CommandContext';
import {ComponentContext} from '../lib/structures/ComponentContext';

export class Nsfw {
	run(ctx: CommandContext | ComponentContext) {
		return !!(ctx.channel.type === 'GUILD_TEXT' && ctx.channel.nsfw);
	}
}
