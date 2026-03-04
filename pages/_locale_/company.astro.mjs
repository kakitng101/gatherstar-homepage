import { c as createComponent, a as createAstro, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_CBXBjdVZ.mjs';
import { g as getTranslation, m as menu, f as getLangPaths } from '../../chunks/index_DjvqLQTA.mjs';
import { $ as $$BasePage, a as $$ImageCom } from '../../chunks/BasePage_CU4jiocw.mjs';
import { a as aboutCompany, o as ourValues } from '../../chunks/content_B_itSqG6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const getStaticPaths = getLangPaths;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locale } = Astro2.params;
  const t = await getTranslation(locale);
  const menuList = menu;
  const metaConfig = menuList.find((item) => item.key === "company");
  return renderTemplate`${renderComponent($$result, "BasePage", $$BasePage, { ...{ ...metaConfig, lang: locale } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full mt-[120px] xl:mt-[168px] flex flex-col items-center"> <!-- About the Company --> <h1 class="flex flex-col xl:flex-row items-center text-[56px] xl:text-[64px] leading-[64px] xl:leading-[72px] font-semibold text-[#021D3C]"> ${t("About/-the Company").split("/-").map((item) => renderTemplate`<div class="xl:mx-2">${item}</div>`)} </h1> <div class="w-all flex flex-col xl:flex-row px-[16px] xl:px-0 py-[120px] xl:py-[168px]"> <div class="w-full xl:w-[690px] flex flex-col xl:mr-[24px]"> ${aboutCompany.map((item) => renderTemplate`<div class="flex items-start mb-[24px]"> ${renderComponent($$result2, "Image", $$ImageCom, { "src": item.icon, "alt": t(item.title), "height": 48 })} <div class="pl-[16px] flex flex-col"> <div class="py-[10px] text-[20px] xl:text-[24px] text-[#111111] font-semibold leading-[28px] xl:leading-[32px]"> ${t(item.title)} </div> <div class="text-[14px] xl:text-[16px] text-[#4B5F75] leading-[22px] xl:leading-[24px]"> ${t(item.content).split("/-").map((content, index, array) => renderTemplate`<div${addAttribute(`${index !== array.length - 1 ? "mb-[8px]" : ""}`, "class")}> ${content} </div>`)} </div> </div> </div>`)} </div> ${renderComponent($$result2, "Image", $$ImageCom, { "src": "vertical-company.png", "alt": "company", "className": "w-full xl:hidden" })} ${renderComponent($$result2, "Image", $$ImageCom, { "src": "vertical-company.png", "alt": "company", "width": 486, "className": "hidden xl:block" })} </div> <!-- Why Choose GatherStar For Your Ad Campaigns--> <div class="w-full flex flex-col items-center px-[16px] xl:px-0 py-[120px] xl:py-[168px] bg-[#F2F4F7]"> <h2 class="w-full flex justify-center mb-[48px] xl:mb-[72px] text-[32px] xl:text-[40px] font-semibold leading-[40px] xl:leading-[48px]"> ${t("Our/-Values").split("/-").map((item, index, array) => renderTemplate`<div${addAttribute(
    index === array.length - 1 ? "text-[#0077FD] mx-[4px]" : "text-[#111111] mx-[4px]",
    "class"
  )}> ${item} </div>`)} </h2> <div class="w-all flex flex-col xl:flex-row xl:justify-between"> ${ourValues.map((item) => renderTemplate`<div class="w-full xl:w-[384px] flex flex-col p-[24px] mb-[24px] xl:mb-0 bg-white rounded-[16px]"> ${renderComponent($$result2, "Image", $$ImageCom, { "src": item.icon, "alt": t(item.title), "height": 48 })} <div class="flex flex-col mt-[16px] mb-[8px] text-[20px] xl:text-[24px] font-semibold leading-[28px] xl:leading-[32px] text-[#111111]"> ${t(item.title)} </div> <div class="text-[14px] xl:text-[16px] leading-[22px] xl:leading-[24px] text-[#4B5F75]"> ${t(item.content)} </div> </div>`)} </div> </div> <div class="w-all flex flex-col items-center px-[16px] xl:px-0 py-[120px] xl:py-[168px]"> <h3 class="text-[#0077FD] text-[32px] xl:text-[40px] font-semibold leading-[40px] xl:leading-[48px]"> ${t("contact@gatherstar.io")} </h3> <div class="text-[#111111] text-[20px] xl:text-[24px] font-semibold leading-[28px] xl:leading-[32px] mt-[16px] mb-[48px]"> ${t("Let's Work Together")} </div> ${renderComponent($$result2, "Image", $$ImageCom, { "src": "architecture.svg", "alt": "architecture", "width": 1200, "className": "hidden xl:block" })} ${renderComponent($$result2, "Image", $$ImageCom, { "src": "m-architecture.svg", "alt": "architecture", "className": "w-full xl:hidden" })} </div> </div> ` })}`;
}, "/var/jenkins_home/workspace/fronted_website_branch-prod/src/pages/[locale]/company/index.astro", void 0);

const $$file = "/var/jenkins_home/workspace/fronted_website_branch-prod/src/pages/[locale]/company/index.astro";
const $$url = "/[locale]/company";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
