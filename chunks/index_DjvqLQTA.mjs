const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};

const site = {"title":"GatherStar: Leading Programmatic Advertising Platform | Boost ROI & Growth","base_url":"https://gatherstar.io","base_path":"/","favicon":"/favicon.svg","logo_text":"Gatherstar","fontFamily":"/fonts/Inter.woff2","fontName":"gatherstar","defaultLocale":"en","locales":["en"]};
const metadata = {"meta_author":"GatherStar","meta_image":"/images/meta-logo.png","meta_description":"GatherStar is a global programmatic advertising platform that connects advertisers and publishers seamlessly. Leverage our advanced DSP, Ad Exchange, and RTB technologies to drive unlimited growth, optimize traffic monetization, and achieve unparalleled ad performance. Join now to unlock premium advertising opportunities! ","meta_keywords":"programmatic advertising, advertising solutions, advertiser publisher network, traffic monetization, advertising technology company, DSP, ad exchange, RTB, publisher, ad tech, high-quality traffic, growth marketing"};
const email = [{"name":"Contact","content":"contact@gatherstar.io"},{"name":"Help","content":"help@gatherstar.io"},{"name":"Support","content":"support@gatherstar.io"}];
const address = {"title":"SENIOR TECHNOLOGY LIMITED","content":"NEW TREND CENTRE/-704 PRINCE EDWARD ROAD EAST/-HONG KONG","url":"https://seniortechhk.com/"};
const protocol = [{"name":"Terms & Conditions","url":"/protocol/TermsConditions.html"},{"name":"Privacy Policy","url":"/protocol/PrivacyPolicy.html"}];
const baseConfig = {
  site,
  metadata,
  email,
  address,
  protocol,
};

const menu = [
	{
		label: "Product",
		key: "product",
		path: "/product",
		metaTitle: "GatherStar: Maximize ROI with Leading Programmatic Advertising Platform",
		metaDescription: "Discover GatherStar's comprehensive programmatic advertising platform. Our solutions, including SSP, Ad Exchange, and DSP, enable advertisers and publishers to efficiently monetize traffic, serve display, video, and native ads, and target high-quality audience traffic. Achieve superior ROI and drive business growth with our AI-driven ad tech.",
		metaKeywords: "programmatic platform, programmatic advertising, advertising campaigns, maximize ROI, ad tech, monetization, Supply Side Platform (SSP), Ad Exchange, Demand Side Platform (DSP), display ad serving, video ad serving, native ad traffic, high-quality audience traffic, ad control",
		prefetch: "load",
		type: "internal"
	},
	{
		label: "Resources",
		key: "latest",
		path: "/blogs/latest",
		metaTitle: "GatherStar: Your Source for Programmatic Trends & Insights",
		metaDescription: "Stay ahead in programmatic advertising with GatherStar's Resources. Access the latest industry news, trends, and insights to enhance your programmatic campaigns. Our expert-curated content helps you make informed decisions and drive better ad performance.",
		metaKeywords: "programmatic trends, ad tech news, programmatic insights, programmatic campaigns, industry analysis, programmatic tips, advertising performance optimization",
		prefetch: "hover",
		type: "internal",
		children: [
			{
				label: "News",
				key: "news",
				path: "/blogs/news",
				icon: "news.svg",
				description: "What's new at GatherStar",
				metaTitle: "GatherStar: Latest News, Press Releases & Announcements",
				metaDescription: "Explore GatherStar's latest updates, press releases, company announcements, and partnerships. Stay informed about our new initiatives, industry-leading collaborations, and how we're shaping the future of programmatic advertising.",
				metaKeywords: "company news, press releases, updates, GatherStar news, GatherStar partnerships, industry announcements, programmatic advertising news",
				prefetch: "hover",
				type: "internal"
			},
			{
				label: "Blogs",
				key: "blogs",
				path: "/blogs/blogs",
				icon: "blogs.svg",
				description: "Insights on programmatic adverstising",
				metaTitle: "GatherStar Blog: Expert Tips for Programmatic Advertising Success",
				metaDescription: "Dive into GatherStar's blog for expert guides, practical tips, and in-depth insights on programmatic advertising. Whether you're an advertiser or a publisher, discover strategies to boost ad revenue growth.",
				metaKeywords: "programmatic blog, advertising guides, marketing tips, ad revenue growth, programmatic advertising strategies, advertiser tips, publisher insights",
				prefetch: "hover",
				type: "internal"
			},
			{
				label: "Documentation",
				key: "doc",
				path: "https://gatherstar.io/doc/gatherstar/",
				icon: "documentation.svg",
				description: "Guides for advertisers, publishers, and more",
				metaTitle: "",
				metaDescription: "",
				metaKeywords: "",
				prefetch: "tap",
				type: "external"
			}
		]
	},
	{
		label: "Company",
		key: "company",
		path: "/company",
		metaTitle: "GatherStar: Our Team, Vision, and Values",
		metaDescription: "Learn about GatherStar's team, vision, and values that drive our success in programmatic advertising. Discover how our unique approach helps advertisers and publishers achieve their goals, and how we're committed to setting new standards in the ad tech industry.",
		metaKeywords: "company, team, values, programmatic advertising company, vision, ad tech industry, advertiser publisher success, programmatic advertising standards",
		prefetch: "load",
		type: "internal"
	}
];

const blog = /* #__PURE__ */ JSON.parse("[{\"title\":\"The Rising Importance of Cybersecurity in the Digital Era\",\"description\":\"This document discusses the growing significance of cybersecurity in an increasingly digital world, where data breaches, ransomware, and phishing attacks threaten both individuals and organizations. It explains the types of cyber threats, their potential impact, and the best practices for creating a secure digital environment.\",\"tag\":\"Blogs\",\"cover\":\"http://gatherstar-test.s3-website-ap-southeast-1.amazonaws.com/uploads/mhvokfwrdfpzc0ahnh4.jpeg\",\"time\":\"2025-11\",\"createdAt\":1762932637379,\"id\":\"mhvokoub\",\"content\":\"<p>In the age of cloud computing, online banking, and remote work, <strong>cybersecurity</strong> has become a top priority for governments, corporations, and everyday internet users. Every piece of data we generate — from personal photos to corporate financial records — is a potential target for hackers. Cyberattacks are no longer isolated incidents; they occur daily and often on a massive scale, affecting millions of users around the globe.</p><p>Common forms of cyber threats include <strong>phishing attacks</strong>, where cybercriminals trick users into revealing sensitive information; <strong>ransomware</strong>, which locks users out of their own data until a ransom is paid; and <strong>Distributed Denial-of-Service (DDoS)</strong> attacks that can bring down entire networks or websites. These attacks not only result in <strong>financial losses</strong> but can also erode <strong>trust</strong> in institutions, damage brand reputation, and compromise national security.</p><p>To defend against these evolving threats, cybersecurity must be viewed as a <strong>continuous process</strong>, not a one-time effort. Companies should implement <strong>multi-layered security systems</strong>, including firewalls, intrusion detection tools, and regular <strong>penetration testing</strong>. Additionally, <strong>employee awareness training</strong> is critical — many data breaches occur due to human error rather than technical vulnerabilities.</p><p>Individuals, too, can take steps to protect themselves. Using <strong>strong, unique passwords</strong>, enabling <strong>two-factor authentication (2FA)</strong>, and avoiding suspicious emails are simple yet effective measures. Regularly updating software and installing trusted antivirus solutions can further minimize risks.</p><p>Governments and global organizations are also strengthening cybersecurity regulations. Frameworks such as the <strong>General Data Protection Regulation (GDPR)</strong> and initiatives by the <strong>Cybersecurity & Infrastructure Security Agency (CISA)</strong> provide guidelines for securing data and ensuring privacy compliance.</p><p>Ultimately, cybersecurity is everyone’s responsibility. In a world where the line between physical and digital reality is blurring, maintaining vigilance and promoting a culture of security awareness is essential for safeguarding our shared digital future.</p>\",\"homeDisplayCover\":\"blog-cover.mhvokfwrdfpzc0ahnh4.jpeg\"},{\"title\":\"Artificial Intelligence — Transforming the Modern World Artificial Intelligence — Transforming the Modern World Artificial Intelligence — Transforming the Modern World\",\"description\":\"This document explores how Artificial Intelligence (AI) is revolutionizing industries, reshaping human interaction with technology, and redefining the boundaries of creativity and automation. It also examines potential risks, ethical concerns, and how businesses can responsibly adopt AI for long-term success.This document explores how Artificial Intelligence (AI) is revolutionizing industries, reshaping human interaction with technology, and redefining the boundaries of creativity and automation. It also examines potential risks, ethical concerns, and how businesses can responsibly adopt AI for long-term success.\",\"tag\":\"Blogs\",\"time\":\"2025-11\",\"cover\":\"https://gatherstar.io/images/blogBg.png\",\"createdAt\":1762933222029,\"id\":\"mhvoej6k\",\"content\":\"<h4>Artificial Intelligence (<strong>AI</strong>) represents one of the most profound technological revolutions in human history. What began as a theoretical concept in the mid-20th century has now evolved into an integral part of our daily lives. Whether it’s through <strong>voice assistants</strong> like Siri and Alexa, <strong>recommendation systems</strong> on Netflix and YouTube, or <strong>autonomous driving</strong> technologies, AI has become deeply embedded in the digital ecosystem that powers our modern world.</h4><h4>In <strong>healthcare</strong>, AI-driven algorithms assist doctors in diagnosing diseases earlier and with higher accuracy. Machine learning models can analyze thousands of medical images in seconds, identifying anomalies that might escape the human eye. Meanwhile, AI chatbots and virtual assistants are transforming <strong>customer service</strong>, providing instant support and reducing operational costs for companies worldwide.</h4><h4>Yet, the advancement of AI also raises complex questions about <strong>ethics, bias, and data privacy</strong>. Because AI systems learn from human-generated data, they can unintentionally reproduce existing biases, leading to unfair outcomes in hiring, lending, or law enforcement. This is why organizations like <strong>OpenAI</strong> and the <strong>European Union AI Act</strong> emphasize the importance of transparency, fairness, and accountability in AI development.</h4><h4>As we look toward the future, the key challenge is not only building more powerful AI models but ensuring that they serve humanity’s best interests. Responsible AI adoption requires collaboration among developers, policymakers, and users to ensure that innovation remains <strong>ethical</strong>, <strong>inclusive</strong>, and <strong>sustainable</strong>.</h4><h4>For further insight into AI ethics and technology governance, you can read the <strong>Harvard Business Review’s article on Responsible AI</strong>, which offers practical frameworks for integrating ethical thinking into AI projects.</h4>\",\"homeDisplayCover\":\"blog-cover.blogBg.png\"},{\"title\":\"The Future of Artificial Intelligence\",\"description\":\"This document explores how Artificial Intelligence (AI) is transforming industries, shaping future technologies, and influencing human life. It focuses on real-world applications and ethical considerations.\",\"tag\":\"Blogs\",\"cover\":\"http://gatherstar-test.s3-website-ap-southeast-1.amazonaws.com/uploads/mhvod0rw2m1yjkpoy0a.jpeg\",\"time\":\"2025-11\",\"createdAt\":1762932301911,\"id\":\"mhvodhzr\",\"content\":\"<p><br></p><p>Artificial Intelligence (<strong>AI</strong>) is no longer a futuristic concept — it is already here, influencing almost every aspect of modern life. From <strong>healthcare</strong> to <strong>finance</strong>, and from <strong>education</strong> to <strong>entertainment</strong>, AI-driven solutions are creating smarter systems and more personalized experiences.</p><p>One of the most remarkable advancements is in <strong>machine learning</strong>, where systems are trained to learn from data and improve without explicit programming. This allows businesses to predict user behavior, optimize marketing strategies, and even detect fraud in real time.</p><p>However, as AI becomes more powerful, <strong>ethical challenges</strong> such as bias, privacy, and accountability are becoming increasingly important. Organizations and developers must ensure that AI systems are fair, transparent, and respect human rights.</p><p>For further reading, visit the official <strong>OpenAI Research Blog</strong>, which provides deep insights into how AI models are developed and tested.</p><p><br></p><p>Artificial Intelligence (<strong>AI</strong>) is no longer a futuristic concept — it is already here, influencing almost every aspect of modern life. From <strong>healthcare</strong> to <strong>finance</strong>, and from <strong>education</strong> to <strong>entertainment</strong>, AI-driven solutions are creating smarter systems and more personalized experiences.</p><p>One of the most remarkable advancements is in <strong>machine learning</strong>, where systems are trained to learn from data and improve without explicit programming. This allows businesses to predict user behavior, optimize marketing strategies, and even detect fraud in real time.</p><p>However, as AI becomes more powerful, <strong>ethical challenges</strong> such as bias, privacy, and accountability are becoming increasingly important. Organizations and developers must ensure that AI systems are fair, transparent, and respect human rights.</p><p>For further reading, visit the official <strong>OpenAI Research Blog</strong>, which provides deep insights into how AI models are developed and tested.</p><p><br></p><p>Artificial Intelligence (<strong>AI</strong>) is no longer a futuristic concept — it is already here, influencing almost every aspect of modern life. From <strong>healthcare</strong> to <strong>finance</strong>, and from <strong>education</strong> to <strong>entertainment</strong>, AI-driven solutions are creating smarter systems and more personalized experiences.</p><p>One of the most remarkable advancements is in <strong>machine learning</strong>, where systems are trained to learn from data and improve without explicit programming. This allows businesses to predict user behavior, optimize marketing strategies, and even detect fraud in real time.</p><p>However, as AI becomes more powerful, <strong>ethical challenges</strong> such as bias, privacy, and accountability are becoming increasingly important. Organizations and developers must ensure that AI systems are fair, transparent, and respect human rights.</p><p>For further reading, visit the official <strong>OpenAI Research Blog</strong>, which provides deep insights into how AI models are developed and tested.</p>\",\"homeDisplayCover\":\"blog-cover.mhvod0rw2m1yjkpoy0a.jpeg\"},{\"title\":\"The Importance of Cybersecurity in the Digital Age\",\"description\":\"An overview of cybersecurity threats, their impact on personal and organizational data, and how individuals can protect themselves online.\",\"tag\":\"Blogs\",\"cover\":\"http://gatherstar-test.s3-website-ap-southeast-1.amazonaws.com/uploads/mhvoc44v1j9gkt46ygc.jpeg\",\"time\":\"2025-11\",\"createdAt\":1762932250947,\"id\":\"mhvoceo3\",\"content\":\"<p>In today’s hyperconnected world, <strong>cybersecurity</strong> is more crucial than ever. Every click, download, and login action could expose sensitive data if proper safeguards are not in place. Cyberattacks are becoming increasingly sophisticated, targeting not only large corporations but also individuals through phishing scams, ransomware, and social engineering tactics.</p><p>Businesses face significant risks — a single data breach can lead to <strong>financial loss</strong>, <strong>reputation damage</strong>, and even <strong>legal consequences</strong>. Therefore, adopting robust cybersecurity measures such as <strong>two-factor authentication</strong>, <strong>data encryption</strong>, and <strong>regular security audits</strong> is essential.</p><p>Individuals also play a key role in maintaining cybersecurity. Avoiding suspicious links, updating software regularly, and using strong, unique passwords can dramatically reduce the risk of compromise.</p><p>For practical tips and resources, check out <strong>Cybersecurity & Infrastructure Security Agency (CISA)</strong> — a government agency offering tools and best practices to help secure your digital life.</p>\",\"homeDisplayCover\":\"blog-cover.png\"},{\"title\":\"🌍 The Future of Web Development\",\"description\":\"This document briefly explores how modern technologies are shaping the future of web development and user experiences.\",\"tag\":\"Blogs\",\"cover\":\"http://gatherstar-test.s3-website-ap-southeast-1.amazonaws.com/uploads/mhvncpyl42uagjg5aua.jpeg\",\"time\":\"2025-11\",\"createdAt\":1762930628904,\"id\":\"mhvndn3c\",\"content\":\"<p>The landscape of web development is evolving rapidly. Today, developers are embracing <strong>progressive web apps (PWAs)</strong>, <strong>AI-powered frameworks</strong>, and <strong>serverless architectures</strong> to build faster and smarter applications.</p><p>For example, platforms like <strong>Next.js</strong> and <strong>Django</strong> simplify both frontend and backend development while offering robust performance.</p><p>If you want to learn more about modern web trends, visit the <a href=\\\"https://developer.mozilla.org/en-US/\\\" target=\\\"_new\\\">official MDN Web Docs</a> — it’s one of the most comprehensive resources for developers around the world.</p><p><a href=\\\"https://baidu.com\\\" target=\\\"_blank\\\">baidu</a></p>\",\"homeDisplayCover\":\"blog-cover.png\"},{\"title\":\"Programmatic Advertising Trends to Watch in 2025 Explore the key programmatic advertising \",\"description\":\"Explore the key programmatic advertising trends in 2025—from AI advancements to new ad frontiers like CTV, privacy-first strategies, in-app/game ads, and DOOH evolution.\",\"tag\":\"News\",\"cover\":\"http://gatherstar-test.s3-website-ap-southeast-1.amazonaws.com/uploads/mhvm2yo81irmtd3scgw.png\",\"time\":\"2025-11\",\"createdAt\":1762930081354,\"id\":\"mhvm3osp\",\"content\":\"<p><span style=\\\"color: rgba(0, 0, 0, 0.85); background-color: rgb(230, 230, 230); font-size: 12px;\\\">In the fast-paced world of digital advertising, programmatic advertising has emerged as a game-changer, revolutionizing the way brands connect with their target audiences. Programmatic advertising, in simple terms, is the use of automated technology for buying and selling digital ad space. As we step into 2025, the programmatic landscape is set to witness several exciting trends that will shape the future of advertising. In this blog post, we'll explore the key trends that advertisers, publishers, and industry practitioners should keep an eye on.</span></p><p><span style=\\\"color: rgba(0, 0, 0, 0.85); background-color: rgb(230, 230, 230); font-size: 12px;\\\"><strong>1. The Continued Ascent of AI and Machine Learning</strong></span></p><p><span style=\\\"color: rgba(0, 0, 0, 0.85); background-color: rgb(230, 230, 230); font-size: 12px;\\\">Artificial Intelligence (AI) and Machine Learning (ML), which is a subset of AI where machines learn from data without being explicitly programmed, have been driving forces in programmatic advertising for a while, and their influence is only set to grow in 2025. These technologies are enabling more sophisticated ad targeting, real-time bidding optimization, and ad creative personalization.</span></p><p><span style=\\\"color: rgba(0, 0, 0, 0.85); background-color: rgb(230, 230, 230); font-size: 12px;\\\"><strong>Advanced Audience Targeting</strong></span></p><p><span style=\\\"color: rgba(0, 0, 0, 0.85); background-color: rgb(230, 230, 230); font-size: 12px;\\\">AI algorithms can now analyze vast amounts of data from multiple sources, including user behavior, demographics, and content consumption. A report by IDC shows that According to a new projection in the International Data Corporation (IDC) Worldwide AI and Generative AI Spending Guide, global investment in artificial intelligence (AI)—encompassing AI-powered applications, infrastructure, and associated IT and business services—will surge to $632 billion by 2028, more than doubling from current levels. This growth indicates the increasing reliance on AI for various applications, including advertising.</span></p><p><span style=\\\"color: rgba(0, 0, 0, 0.85); background-color: rgb(230, 230, 230); font-size: 12px;\\\">This wealth of data allows advertisers to create highly segmented and accurate audience profiles. For example, instead of targeting a broad age group, AI can identify a specific subset of consumers within that age range who are more likely to be interested in a particular product or service based on their online activities. This precision targeting not only improves the effectiveness of ad campaigns but also helps in reducing ad spend waste.</span></p>\",\"homeDisplayCover\":\"blog-cover.png\"},{\"title\":\"213123\",\"description\":\"213213\",\"tag\":\"News\",\"cover\":\"http://gatherstar-test.s3-website-ap-southeast-1.amazonaws.com/uploads/mhuhrzm370jyca9kltw.png\",\"time\":\"2025-06\",\"createdAt\":1762860759508,\"id\":\"mhuhs3is\",\"content\":\"<p>123213</p>\",\"homeDisplayCover\":\"blog-cover.png\"}]");

const getTranslation = async (locale) => {
  try {
    const translations = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"./locales/en.json": () => import('./en_BPwkY3Hz.mjs'),"./locales/zh.json": () => import('./zh_CH9gZfyc.mjs')})), `./locales/${locale}.json`, 3);
    const langConfig = translations.default;
    return (key) => key ? langConfig[key] ?? key : "";
  } catch (error) {
    console.error(`Translation file for locale "${locale}" not found.`);
    return () => "";
  }
};
const getLangPaths = async () => {
  return baseConfig.site.locales.map((locale) => ({
    params: { locale }
  }));
};
const getBlogsMetaList = () => {
  const resources = menu.find(
    (item) => item.key === "latest"
  );
  if (resources?.children) {
    return [
      { ...resources },
      ...resources.children.filter(
        (item) => item.key !== "doc"
      )
    ].map((item) => ({
      ...item,
      tag: item?.key ? item?.key.charAt(0).toUpperCase() + item?.key.slice(1) : ""
    }));
  }
  return [];
};
const emojiRegex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
const getBlogList = () => {
  return blog.map((item) => ({ ...item, pathName: item.title.replace(/[\s_-]+/g, "-").replace(/[+\?/%#&=]/g, "").replace(emojiRegex, "").toLowerCase() }));
};
const getBlogsPaths = async () => {
  const blogList = getBlogsMetaList();
  const paths = await getLangPaths();
  return paths.flatMap(
    ({ params }) => blogList.map((item) => ({
      params: { ...params, tag: item.key }
    }))
  );
};
const getArticlePaths = async () => {
  const articleList = getBlogList();
  const paths = await getLangPaths();
  return paths.flatMap(
    ({ params }) => articleList.map((item) => ({
      params: { ...params, articleTitle: item.pathName }
    }))
  );
};

export { getBlogList as a, getBlogsMetaList as b, getArticlePaths as c, baseConfig as d, getBlogsPaths as e, getLangPaths as f, getTranslation as g, menu as m };
