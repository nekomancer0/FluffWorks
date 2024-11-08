import * as auth from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { socket } from '$lib/socket';

export const load: PageServerLoad = async (event) => {
	// await db.delete(table.chatMessage).where(undefined);

	if (!event.locals.user) return redirect(302, '/');

	let messages = await db.select().from(table.chatMessage);
	let parsedMessages: {
		text: string;
		username: string;
	}[] = [];

	for (let msg of messages) {
		let queries = await db.select().from(table.user).where(eq(table.user.id, msg.user_id));
		let username = queries[0].username;

		parsedMessages.push({ username, text: msg.text });
	}

	return {
		user: event.locals.user || null,
		messages: parsedMessages.reverse()
	};
};

function generateID() {
	let chars = 'abcdefghjklmnopqrtsuvwxyz1234567890';
	let ret = '';

	for (let i = 0; i <= 10; i++) {
		ret += chars[Math.floor(Math.random() * chars.length)];
	}

	return ret;
}

export const actions: Actions = {
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await auth.invalidateSession(event.locals.session.id);
		event.cookies.delete(auth.sessionCookieName, { path: '/' });

		return redirect(302, '/');
	},
	message: async (event) => {
		const formData = await event.request.formData();
		let text = formData.get('text')?.toString()!;
		let user = (await db.select().from(table.user)).find((u) => u.id === event.locals.user?.id)!;
		let obj = { text, user_id: user.id, id: generateID(), createdAt: Date.now().toString() };

		await db.insert(table.chatMessage).values(obj);

		socket.emit('chat', { username: user.username, text });

		return {
			username: user.username,
			text
		};
	}
};
