import { writable, type Writable } from 'svelte/store';

export const user: Writable<{
	id: string;
	username: string;
} | null> = writable(null);
