import { c as createComponent, a as createAstro, d as renderTemplate } from '../../chunks/astro/server_CBXBjdVZ.mjs';
import { f as getLangPaths } from '../../chunks/index_DjvqLQTA.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const getStaticPaths = getLangPaths;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locale } = Astro2.params;
  return renderTemplate`<!-- <BasePage lang={locale}>
    <div class="h-[1600px]">{t("welcome")}</div>
</BasePage> -->`;
}, "/var/jenkins_home/workspace/fronted_website_branch-prod/src/pages/[locale]/resources/index.astro", void 0);

const $$file = "/var/jenkins_home/workspace/fronted_website_branch-prod/src/pages/[locale]/resources/index.astro";
const $$url = "/[locale]/resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
