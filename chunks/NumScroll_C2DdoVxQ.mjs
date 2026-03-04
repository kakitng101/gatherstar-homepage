import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, b as renderScript, d as renderTemplate } from './astro/server_CBXBjdVZ.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$NumScroll = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NumScroll;
  const { num, fontSize, className } = Astro2.props;
  const digits = Math.floor(num);
  const numArr = Array.from({ length: digits + 1 }).map((_, i) => i).reverse();
  let resultArr = [];
  if (numArr.length > 5) {
    resultArr = numArr.slice(0, 5).reverse();
  } else {
    const maxNum = Math.ceil(num * 10);
    const maxNumArr = Array.from({ length: maxNum + 1 }).map((_, i) => i).reverse();
    resultArr = maxNumArr.slice(0, 5).reverse().map((item) => Number((item / 10).toFixed(1)));
  }
  return renderTemplate`${maybeRenderHead()}<div class="inline-flex flex-col overflow-hidden leading-[1em]"${addAttribute(`height:${fontSize}px;font-size:${fontSize}px;`, "style")} data-astro-cid-6sxunnxh> <div class="digit-wrapper flex flex-col" data-astro-cid-6sxunnxh> ${resultArr.map((i) => renderTemplate`<span${addAttribute(className, "class")} data-astro-cid-6sxunnxh>${i}</span>`)} </div> </div>  ${renderScript($$result, "/var/jenkins_home/workspace/fronted_website_branch-prod/src/components/NumScroll.astro?astro&type=script&index=0&lang.ts")}`;
}, "/var/jenkins_home/workspace/fronted_website_branch-prod/src/components/NumScroll.astro", void 0);

export { $$NumScroll as $ };
