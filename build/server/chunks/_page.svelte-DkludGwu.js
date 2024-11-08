import { V as attr, X as escape_html, n as pop, p as push } from './exports-DE4n1uap.js';
import { g as getTranslationFunctions } from './session-BNzW1WO2.js';
import './constants-BbR5-deO.js';
import { N as Navbar } from './Navbar-CgwJb2VC.js';
import './node-B2gHlHjM.js';

function _page($$payload, $$props) {
  push();
  let { form } = $$props;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  Navbar($$payload);
  $$payload.out += `<!----> <div class="form w-full max-w-xs svelte-1cr6ic4"><form method="post"${attr("action", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`?/register`, void 0))} class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"><div class="mb-4"><label for="username" class="mb-2 block text-sm font-bold text-gray-700">Username</label> <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="username" type="text" placeholder="Username" name="username" autocomplete="off"></div> <div class="mb-4"><label for="email" class="mb-2 block text-sm font-bold text-gray-700">Email</label> <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="email" type="email" placeholder="Email" name="email" autocomplete="off"></div> <div class="mb-4"><label for="password" class="mb-2 block text-sm font-bold text-gray-700">Password</label> <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="password" type="password" placeholder="Password" name="password"></div> <div class="flex items-center justify-between"><button class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none svelte-1cr6ic4" type="submit">Sign In</button> <a class="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800 svelte-1cr6ic4"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`#`, void 0))}>Forgot Password?</a></div></form></div> <p style="color: red">${escape_html(form?.message ?? "")}</p>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DkludGwu.js.map
