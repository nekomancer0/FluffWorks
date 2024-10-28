import type { HandleServerError } from '@sveltejs/kit';

export let handleError: HandleServerError = ({ error, event }) => {
	console.error('Une erreur est survenue :', error);
	return {
		message: 'Oups ! Il semble qu’il y ait un problème.',
		status: 500
	};
};
