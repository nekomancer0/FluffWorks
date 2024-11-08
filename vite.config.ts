import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { webSocketServer } from './socket.io/webSocketPluginVite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		}),
		webSocketServer
	],

	server: {
		port: 3000
	},
	preview: {
		port: 3000
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
