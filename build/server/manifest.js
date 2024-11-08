const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["background.png","discord.svg","favicon.png","line.png","linkedin.svg","logo.png","placeholder.png","youtube.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CNJ6EiH_.js","app":"_app/immutable/entry/app.CLpy7L2z.js","imports":["_app/immutable/entry/start.CNJ6EiH_.js","_app/immutable/chunks/entry.DjYp6XJk.js","_app/immutable/entry/app.CLpy7L2z.js","_app/immutable/chunks/i18n.nrNDkpNq.js","_app/immutable/chunks/disclose-version.CJevfRbn.js","_app/immutable/chunks/entry.DjYp6XJk.js","_app/immutable/chunks/stores.JE59PA96.js","_app/immutable/chunks/render.B9D5Ke_p.js","_app/immutable/chunks/props.CTV0YdEt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-bq8HCR8U.js')),
			__memo(() => import('./chunks/1-zEom2fRn.js')),
			__memo(() => import('./chunks/2-6Fx2K1OE.js')),
			__memo(() => import('./chunks/3-CnSc1l_g.js')),
			__memo(() => import('./chunks/4-1IggVhOJ.js')),
			__memo(() => import('./chunks/5-Ch0-C7_Y.js')),
			__memo(() => import('./chunks/6-Cq36yDJ2.js')),
			__memo(() => import('./chunks/7-Iqx6iICe.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/merch",
				pattern: /^\/merch\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
