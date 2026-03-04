import { c as createComponent, m as maybeRenderHead, d as renderTemplate } from '../chunks/astro/server_CBXBjdVZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> ${maybeRenderHead()}<body> <div>system error</div> </body></html>`;
}, "/var/jenkins_home/workspace/fronted_website_branch-prod/src/pages/index.astro", void 0);

const $$file = "/var/jenkins_home/workspace/fronted_website_branch-prod/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
