import { c as createComponent, a as createAstro, r as renderComponent, b as renderScript, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../../chunks/astro/server_CBXBjdVZ.mjs';
import { g as getTranslation, a as getBlogList, b as getBlogsMetaList, c as getArticlePaths, d as baseConfig } from '../../../../chunks/index_DjvqLQTA.mjs';
import { $ as $$BasePage, a as $$ImageCom, b as $$Link, l as link } from '../../../../chunks/BasePage_CU4jiocw.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$RichContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RichContent;
  const { content } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "rich-content", "rich-content", { "data-content": content })} ${renderScript($$result, "/var/jenkins_home/workspace/fronted_website_branch-prod/src/components/RichContent.astro?astro&type=script&index=0&lang.ts")}`;
}, "/var/jenkins_home/workspace/fronted_website_branch-prod/src/components/RichContent.astro", void 0);

const $$Astro = createAstro();
const getStaticPaths = getArticlePaths;
const $$articleTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$articleTitle;
  const { locale, articleTitle } = Astro2.params;
  const t = await getTranslation(locale);
  const linkConfig = link;
  const blogList = getBlogList();
  const blog = blogList.find((item) => item.pathName === articleTitle);
  const blogsMetaList = getBlogsMetaList();
  const blogMeta = blogsMetaList.find((item) => item?.tag === blog?.tag);
  return renderTemplate`${renderComponent($$result, "BasePage", $$BasePage, { ...{
    title: blog?.title,
    metaTitle: `GatherStar: ${blog?.title}`,
    metaDescription: blog?.description,
    image: blog?.cover,
    metaKeywords: blogMeta?.metaKeywords,
    lang: locale
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full flex flex-col items-center px-[16px] xl:px-0"> <div class="w-all flex flex-col xl:flex-row xl:justify-between py-[48px] xl:py-[96px]"> <div class="w-full xl:w-[282px] flex flex-col"> <!-- 回到上一页 --> <button class="w-[97px] h-[40px] flex pl-[6px] items-center rounded-[20px] bg-white/50 text-[#0E131A] text-[20px] font-medium leading-[28px] mb-[16px]"${addAttribute(`if (window.history.length > 2) { window.history.back(); } else { window.location.href = '${`/${locale}/blogs/${blogMeta?.key}`}'; }`, "onclick")}> ${renderComponent($$result2, "Image", $$ImageCom, { "src": "left-arrow.svg", "alt": "back", "width": 24, "className": "mr-[4px]" })}
Back</button> ${renderComponent($$result2, "Image", $$ImageCom, { "src": blog?.cover || "", "alt": blog?.title, "loading": "eager", "className": "w-full xl:w-[282px] h-[257px] xl:h-[211px] rounded-[16px] object-cover" })} <div class="flex items-center justify-between mt-[16px]"> <div class="flex items-center"> ${renderComponent($$result2, "Image", $$ImageCom, { "src": "round-white-logo.svg", "alt": "logo", "height": 42 })} <div class="flex flex-col justify-center ml-[10px]"> <div class="text-[#2A2A2A] leading-[24px] font-semibold"> ${t(baseConfig.metadata.meta_author)} </div> <div class="text-[12px] text-[#5D5D5D] leading-[18px]"> ${blog?.time} </div> </div> </div> ${renderComponent($$result2, "Link", $$Link, { "href": linkConfig.link[linkConfig.btn.linkedin.link], "label": t(linkConfig.btn.linkedin.label), "type": "external" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$ImageCom, { "src": "social-linkedin-icon.svg", "alt": t(linkConfig.btn.linkedin.label), "height": 32 })} ` })} </div> </div> <div class="w-full xl:w-[894px] flex flex-col"> <h1 class="test-[#111111] text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] font-semibold mt-[48px] xl:mt-0 mb-[24px]"> ${blog?.title} </h1> <div class="w-full min-h-[530px]"> ${renderComponent($$result2, "RichContent", $$RichContent, { "content": blog?.content })} </div> </div> </div> </div> ` })}`;
}, "/var/jenkins_home/workspace/fronted_website_branch-prod/src/pages/[locale]/blogs/article/[articleTitle].astro", void 0);

const $$file = "/var/jenkins_home/workspace/fronted_website_branch-prod/src/pages/[locale]/blogs/article/[articleTitle].astro";
const $$url = "/[locale]/blogs/article/[articleTitle]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$articleTitle,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
