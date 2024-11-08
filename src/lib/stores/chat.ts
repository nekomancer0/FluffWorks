import { writable, type Writable } from 'svelte/store';

export const chatData: Writable<any[]> = writable([]); // stocker les données du chat
