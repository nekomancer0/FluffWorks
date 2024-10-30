import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

import dayjs from 'dayjs';

export const user = sqliteTable('user', {
	id: text('id').primaryKey(),
	email: text('email').notNull().unique(),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	admin: integer('admin').default(0)
});

export const product = sqliteTable('product', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	image: text('image').notNull(),
	description: text('description').notNull(),
	price: text('price').notNull()
});

export const update = sqliteTable('update', {
	id: text('id').primaryKey(),
	date: text('date')
		.notNull()
		.$defaultFn(() => {
			let parsing = dayjs(Date.now());

			let date = parsing.date();
			let strDate = `${date}`;

			if (strDate.endsWith('1')) strDate += 'st';
			else if (strDate.endsWith('2')) strDate += 'nd';
			else if (strDate.endsWith('3')) strDate += 'rd';
			else {
				strDate += 'th';
			}

			const months = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			];

			let month = months[parsing.month()];

			let year = parsing.year();

			return `${strDate} ${month} ${year}`;
		}),
	text: text('text').notNull()
});

export const session = sqliteTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;

export type Update = typeof update.$inferSelect;

export type Product = typeof product.$inferSelect;
