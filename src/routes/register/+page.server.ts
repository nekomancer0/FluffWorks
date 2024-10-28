import { hash } from '@node-rs/argon2';
import { generateRandomString } from '@oslojs/crypto/random';
import { fail, redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';
import * as auth from '$lib/server/auth';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) {
		return redirect(302, '/');
	}
	return {};
};

export const actions: Actions = {
	register: async (event) => {
		const formData = await event.request.formData();
		console.log(formData);
		const username = formData.get('username');
		const password = formData.get('password');
		const email = formData.get('email');

		if (!validateUsername(username)) {
			return fail(400, { message: 'Invalid username' });
		}
		if (!validatePassword(password)) {
			return fail(400, { message: 'Invalid password' });
		}

		if (!validateEmail(email)) {
			return fail(400, { message: 'Invalid email' });
		}

		const userId = generateUserId();
		const passwordHash = await hash(password, {
			// recommended minimum parameters
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		try {
			await db.insert(table.user).values({ id: userId, username, passwordHash, email });

			const session = await auth.createSession(userId);
			event.cookies.set(auth.sessionCookieName, session.id, {
				path: '/',
				sameSite: 'lax',
				httpOnly: true,
				expires: session.expiresAt,
				secure: !dev
			});
		} catch (e) {
			return fail(500, { message: 'An error has occurred' });
		}
		return redirect(302, '/');
	}
};

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';

function generateUserId(length = 21): string {
	return generateRandomString({ read: (bytes) => crypto.getRandomValues(bytes) }, alphabet, length);
}

function validateUsername(username: unknown): username is string {
	return (
		typeof username === 'string' && username.length >= 3 && username.length <= 31 && !!username
	);
}

function validateEmail(email: unknown): email is string {
	return typeof email === 'string' && email.length >= 3 && email.length <= 31 && !!email;
}

function validatePassword(password: unknown): password is string {
	return typeof password === 'string' && password.length >= 6 && password.length <= 255;
}
