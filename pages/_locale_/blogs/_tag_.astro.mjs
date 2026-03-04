import { c as createComponent, a as createAstro, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../chunks/astro/server_CBXBjdVZ.mjs';
import { g as getTranslation, b as getBlogsMetaList, a as getBlogList, e as getBlogsPaths } from '../../../chunks/index_DjvqLQTA.mjs';
import { $ as $$BasePage, b as $$Link, a as $$ImageCom } from '../../../chunks/BasePage_CU4jiocw.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const getStaticPaths = getBlogsPaths;
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { locale, tag } = Astro2.params;
  const t = await getTranslation(locale);
  const blogsMetaList = getBlogsMetaList();
  const blogMeta = blogsMetaList.find((item) => item?.key === tag);
  const list = getBlogList();
  const blogList = tag === blogsMetaList[0].key ? list : list.filter((item) => item.tag.toLowerCase() === blogMeta?.key);
  return renderTemplate`${renderComponent($$result, "BasePage", $$BasePage, { ...{ ...blogMeta, lang: locale } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full flex flex-col items-center"> <div class="w-all flex flex-col xl:flex-row xl:justify-between px-[16px] xl:px-0 pt-[48px] xl:pt-[96px]"> <div class="w-full xl:w-[282px] flex flex-col items-center"> <h1 class="w-full text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] font-semibold pb-[24px]"> ${t("Resources")} </h1> <div class="w-full hidden xl:flex xl:flex-col"> <div class="w-[72px] h-[1px] bg-black/10 mb-[24px]"></div> ${blogsMetaList.map((blogs) => renderTemplate`<div class="mb-[16px]"> ${renderComponent($$result2, "Link", $$Link, { "href": blogs.path, "label": t(blogs.label), "lang": locale }, { "default": async ($$result3) => renderTemplate` <button${addAttribute(`leading-[24px] ${tag === blogs.key ? "font-semibold text-[#111111]" : "text-[#5D5D5D]"}`, "class")}> ${t(blogs.tag)} </button> ` })} </div>`)} </div> </div> <div class="w-full flex flex-col xl:w-[894px] pb-[24px] xl:pb-[72px]"> ${blogList.map((item, index) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": `/blogs/article/${item.pathName}`, "label": t(item.title), "lang": locale, "prefetch": "viewport" }, { "default": async ($$result3) => renderTemplate` <div class="w-full flex flex-col xl:flex-row xl:justify-between pb-[24px]">  ${renderComponent($$result3, "Image", $$ImageCom, { "alt": t(item.title), "src": item.cover, "loading": index < 3 ? "eager" : "lazy", "className": "w-full xl:w-[282px] h-[257px] xl:h-[211px] rounded-[16px] object-cover" })} <div class="w-full xl:w-[588px] flex flex-col justify-between pt-[16px] xl:pt-0"> <div class="w-full flex flex-col"> <div class="w-full pb-[8px] text-[20px] xl:text-[24px] text-[#111111] font-semibold leading-[28px] xl:leading-[32px]"> ${t(item.title)} </div> <div class="w-full text-[14px] xl:text-[16px] text-[#5D5D5D] leading-[22px] xl:leading-[24px] pb-[8px] xl:pb-0"> ${t(item.description)} </div> </div> <div class="w-full text-[12px] xl:text-[14px] text-[#111111] leading-[18px] xl:leading-[22px]"> ${item.time} </div> </div> </div> ` })}`)} <div></div> </div> </div> </div> ` })}`;
}, "/var/jenkins_home/workspace/fronted_website_branch-prod/src/pages/[locale]/blogs/[tag].astro", void 0);

const $$file = "/var/jenkins_home/workspace/fronted_website_branch-prod/src/pages/[locale]/blogs/[tag].astro";
const $$url = "/[locale]/blogs/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$tag,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
