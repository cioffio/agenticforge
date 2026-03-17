const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");

function read(filePath) {
  return fs.readFileSync(path.join(ROOT, filePath), "utf8");
}

function write(filePath, content) {
  const fullPath = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, "utf8");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function loadTranslations() {
  const script = read("script.js");
  const startToken = "const translations = ";
  const endToken = "\r\n\r\nconst textNodes";
  const start = script.indexOf(startToken);
  const end = script.indexOf(endToken);

  if (start === -1 || end === -1) {
    throw new Error("Unable to extract translations from script.js");
  }

  const objectSource = script.slice(start + startToken.length, end).trim().replace(/;$/, "");
  const sandbox = {};
  vm.runInNewContext(`translations = ${objectSource};`, sandbox);
  return sandbox.translations;
}

function replaceTagText(html, key, value) {
  const pattern = new RegExp(
    `(<[^>]+data-i18n="${escapeRegExp(key)}"[^>]*>)([\\s\\S]*?)(</[^>]+>)`,
    "g"
  );

  return html.replace(pattern, `$1${value}$3`);
}

function replaceAttr(html, dataAttr, targetAttr, key, value) {
  const tagPattern = new RegExp(`(<[^>]+${dataAttr}="${escapeRegExp(key)}"[^>]*>)`, "g");
  const attrPattern = new RegExp(`(\\s${targetAttr}=")[^"]*(")`);

  return html.replace(tagPattern, (tag) => {
    if (attrPattern.test(tag)) {
      return tag.replace(attrPattern, `$1${value}$2`);
    }

    return tag.replace(/>$/, ` ${targetAttr}="${value}">`);
  });
}

function applyPackToHome(html, pack) {
  Object.entries(pack).forEach(([key, value]) => {
    html = replaceTagText(html, key, value);
    html = replaceAttr(html, "data-i18n-placeholder", "placeholder", key, value);
    html = replaceAttr(html, "data-i18n-value", "value", key, value);
    html = replaceAttr(html, "data-i18n-href", "href", key, value);
  });

  return html;
}

function alternateBlock(canonical, italianUrl, englishUrl, arabicUrl, xDefault = italianUrl) {
  return [
    `  <link rel="canonical" href="${canonical}" />`,
    `  <link rel="alternate" hreflang="it" href="${italianUrl}" />`,
    `  <link rel="alternate" hreflang="en" href="${englishUrl}" />`,
    `  <link rel="alternate" hreflang="ar" href="${arabicUrl}" />`,
    `  <link rel="alternate" hreflang="x-default" href="${xDefault}" />`,
  ].join("\n");
}

function localizeHome(lang) {
  const translations = loadTranslations();
  const pack = translations[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";
  const url = `https://agenticforge.live/${lang}/`;
  const thanksUrl = `https://agenticforge.live/${lang}/thanks/`;
  let html = read("index.html");

  html = html.replace(/<html lang="[^"]+" dir="[^"]+" data-fixed-lang="[^"]+">/, `<html lang="${lang}" dir="${dir}" data-fixed-lang="${lang}">`);
  html = html.replace(
    /  <link rel="canonical" href="https:\/\/agenticforge\.live\/" \/>\n  <link rel="alternate" hreflang="it" href="https:\/\/agenticforge\.live\/" \/>\n  <link rel="alternate" hreflang="en" href="https:\/\/agenticforge\.live\/en\/" \/>\n  <link rel="alternate" hreflang="ar" href="https:\/\/agenticforge\.live\/ar\/" \/>\n  <link rel="alternate" hreflang="x-default" href="https:\/\/agenticforge\.live\/" \/>/,
    alternateBlock(url, "https://agenticforge.live/", "https://agenticforge.live/en/", "https://agenticforge.live/ar/")
  );

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${pack.title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${pack.description}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${pack.title}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${pack.description}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${pack.title}" />`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${pack.description}" />`);
  html = html.replace(/"url": "https:\/\/agenticforge\.live\/"/, `"url": "${url}"`);
  html = html.replace(/"description": "[^"]*"/, `"description": "${pack.description}"`);
  html = applyPackToHome(html, pack);
  html = html.replace(/class="lang-btn active"/g, 'class="lang-btn"');
  html = html.replace(
    `<button class="lang-btn" data-lang="${lang}" data-lang-path="/${lang}/">${lang.toUpperCase()}</button>`,
    `<button class="lang-btn active" data-lang="${lang}" data-lang-path="/${lang}/">${lang.toUpperCase()}</button>`
  );
  html = html.replace(/href="\/install-openclaw\/"/g, `href="/${lang}/install-openclaw/"`);
  html = html.replace(/href="\/openclaw-windows\/"/g, `href="/${lang}/openclaw-windows/"`);
  html = html.replace(/href="\/openclaw-macos\/"/g, `href="/${lang}/openclaw-macos/"`);
  html = html.replace(/href="\/openclaw-linux\/"/g, `href="/${lang}/openclaw-linux/"`);
  html = html.replace(/href="\/installare-agenti\/"/g, `href="/${lang}/installare-agenti/"`);
  html = html.replace(/href="\/agenti-pronti\/"/g, `href="/${lang}/agenti-pronti/"`);
  html = html.replace(/value="https:\/\/agenticforge\.live\/thanks\.html"/, `value="${thanksUrl}"`);
  write(`${lang}/index.html`, html);
}

function pageTemplate(page) {
  const dir = page.lang === "ar" ? "rtl" : "ltr";
  const homeHref = `/${page.lang}/`;
  const canonical = `https://agenticforge.live/${page.lang}/${page.slug}/`;
  const italianUrl = `https://agenticforge.live/${page.slug}/`;
  const englishUrl = `https://agenticforge.live/en/${page.slug}/`;
  const arabicUrl = `https://agenticforge.live/ar/${page.slug}/`;

  const actions = page.actions
    .map((action) => `<a class="btn ${action.primary ? "btn-primary" : "btn-ghost"}" href="${action.href}">${action.label}</a>`)
    .join("\n        ");

  const blocks = page.blocks
    .map((block) => {
      const parts = [];

      if (block.title) {
        parts.push(`            <h2>${block.title}</h2>`);
      }

      (block.paragraphs || []).forEach((paragraph) => {
        parts.push(`            <p>${paragraph}</p>`);
      });

      (block.codeBlocks || []).forEach((code) => {
        parts.push(`            <div class="code-block"><pre><code>${code}</code></pre></div>`);
      });

      if (block.list) {
        const tag = block.list.ordered ? "ol" : "ul";
        const items = block.list.items.map((item) => `              <li>${item}</li>`).join("\n");
        parts.push(`            <${tag}>\n${items}\n            </${tag}>`);
      }

      return `          <div class="doc-block">\n${parts.join("\n")}\n          </div>`;
    })
    .join("\n\n");

  const asideLinks = page.aside.links
    .map((item) => `              <li><a href="${item.href}">${item.label}</a></li>`)
    .join("\n");

  const footerLinks = page.footerLinks
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join(" · ");

  return `<!DOCTYPE html>
<html lang="${page.lang}" dir="${dir}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script>
    if (location.protocol === "http:") {
      location.replace(\`https://\${location.host}\${location.pathname}\${location.search}\${location.hash}\`);
    }
  </script>
  <title>${page.title}</title>
  <meta name="description" content="${page.description}" />
  <meta name="robots" content="index, follow" />
${alternateBlock(canonical, italianUrl, englishUrl, arabicUrl)}
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${page.title}" />
  <meta property="og:description" content="${page.ogDescription || page.description}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="https://agenticforge.live/robot-comic.svg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${page.title}" />
  <meta name="twitter:description" content="${page.ogDescription || page.description}" />
  <meta name="twitter:image" content="https://agenticforge.live/robot-comic.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div class="bg-layer" aria-hidden="true"></div>
  <header class="site-header">
    <div class="container nav-wrap">
      <a href="${homeHref}" class="brand" aria-label="AgentForge">
        <span class="brand-mark">{AF}</span>
        <span class="brand-copy">
          <span class="brand-text">AgentForge</span>
          <span class="brand-sub">${page.brandSub}</span>
        </span>
      </a>
      <div class="header-actions">
        ${actions}
      </div>
    </div>
  </header>

  <main>
    <section class="section">
      <div class="container">
        <p class="eyebrow">${page.eyebrow}</p>
        <h1 class="doc-title">${page.heading}</h1>
        <p class="doc-intro">${page.intro}</p>
        ${page.docActions ? `<div class="doc-actions">\n${page.docActions.map((item) => `          <a class="btn ${item.primary ? "btn-primary" : "btn-ghost"}" href="${item.href}">${item.label}</a>`).join("\n")}\n        </div>` : ""}
      </div>
    </section>

    <section class="section">
      <div class="container page-layout">
        <article>
${blocks}
        </article>

        <aside>
          <div class="risk-panel sticky-card">
            <h3>${page.aside.title}</h3>
            <ul>
${asideLinks}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-wrap">
      <p>AgentForge</p>
      <p>${footerLinks}</p>
    </div>
  </footer>
</body>
</html>
`;
}

function thanksTemplate(lang) {
  const dir = lang === "ar" ? "rtl" : "ltr";
  const homeHref = `/${lang}/`;
  const title = lang === "en" ? "AgentForge Setup | Request Received" : "AgentForge Setup | تم استلام الطلب";
  const description = lang === "en" ? "Your AgentForge setup request has been received." : "تم استلام طلب AgentForge الخاص بالإعداد.";
  const eyebrow = lang === "en" ? "Request Received" : "تم استلام الطلب";
  const heading = lang === "en" ? "Your setup request has been sent." : "تم إرسال طلب الإعداد الخاص بك.";
  const body = lang === "en"
    ? 'We will review it and reply to the email address you provided. If you need to add details about setup, troubleshooting, or your first agent, you can also write directly to <a href="mailto:agenticforge@libero.it">agenticforge@libero.it</a>.'
    : 'سنراجع الطلب ونرد على البريد الإلكتروني الذي أدخلته. إذا أردت إضافة تفاصيل عن الإعداد أو حل المشكلات أو أول وكيل، يمكنك أيضًا الكتابة مباشرة إلى <a href="mailto:agenticforge@libero.it">agenticforge@libero.it</a>.';

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script>
    if (location.protocol === "http:") {
      location.replace(\`https://\${location.host}\${location.pathname}\${location.search}\${location.hash}\`);
    }
  </script>
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="robots" content="noindex, nofollow" />
  <link rel="canonical" href="https://agenticforge.live/${lang}/thanks/" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div class="bg-layer" aria-hidden="true"></div>
  <main class="section">
    <div class="container">
      <div class="hero-panel" style="max-width: 760px; margin: 8vh auto 0;">
        <p class="eyebrow">${eyebrow}</p>
        <h1 style="margin-bottom: 1rem;">${heading}</h1>
        <p style="margin-bottom: 1.25rem;">${body}</p>
        <a class="btn btn-primary" href="${homeHref}">${lang === "en" ? "Back to site" : "العودة إلى الموقع"}</a>
      </div>
    </div>
  </main>
</body>
</html>
`;
}

const guidePages = [
  {
    slug: "install-openclaw",
    en: {
      title: "How to Install OpenClaw | Practical Guide",
      description: "Practical guide to install OpenClaw on Windows, macOS, and Linux with the official commands, onboarding, and first checks.",
      ogDescription: "OpenClaw installation, initial onboarding, and quick links for Windows, macOS, and Linux.",
      eyebrow: "Practical guide",
      heading: "How to install OpenClaw and reach your first working agent",
      intro: "This is the main guide. It gives you the simplest path to install OpenClaw, complete the first onboarding flow, and reach a ready environment on Windows, macOS, or Linux without getting lost in scattered commands and half-finished configuration.",
      brandSub: "OpenClaw setup, guides, and ready agents",
      actions: [
        { label: "Back to home", href: "/en/", primary: false },
        { label: "Book setup", href: "/en/#book", primary: true },
      ],
      docActions: [
        { label: "Windows guide", href: "/en/openclaw-windows/", primary: true },
        { label: "macOS guide", href: "/en/openclaw-macos/", primary: false },
        { label: "Linux guide", href: "/en/openclaw-linux/", primary: false },
      ],
      blocks: [
        {
          title: "The simplest flow in 3 steps",
          list: {
            ordered: true,
            items: [
              "Install OpenClaw with the right official script for your operating system.",
              "Run guided onboarding to configure gateway and base settings.",
              "Open the dashboard and verify that the first agent actually answers.",
            ],
          },
        },
        {
          title: "Official commands worth starting from",
          paragraphs: ["macOS, Linux, and WSL2"],
          codeBlocks: [
            "curl -fsSL --proto '=https' --tlsv1.2 https://openclaw.ai/install.sh | bash",
            "iwr -useb https://openclaw.ai/install.ps1 | iex",
            "openclaw onboard --install-daemon\nopenclaw dashboard",
          ],
        },
        {
          title: "Which guide to open next",
          list: {
            ordered: false,
            items: [
              "If you use Windows, the documentation-backed path is WSL2.",
              "If you work on Mac, the official script is the fastest route.",
              "If you are on Linux, the same script remains the cleanest starting point.",
            ],
          },
          paragraphs: [
            "If your goal is not only to install OpenClaw but also to launch a useful workflow, the next step is configuring agents, plugins, and tools with intent.",
          ],
        },
      ],
      aside: {
        title: "Jump straight to",
        links: [
          { label: "OpenClaw on Windows", href: "/en/openclaw-windows/" },
          { label: "OpenClaw on macOS", href: "/en/openclaw-macos/" },
          { label: "OpenClaw on Linux", href: "/en/openclaw-linux/" },
          { label: "How to install agents", href: "/en/installare-agenti/" },
          { label: "Ready agents", href: "/en/agenti-pronti/" },
        ],
      },
      footerLinks: [
        { label: "Home", href: "/en/" },
        { label: "Book setup", href: "/en/#book" },
      ],
    },
    ar: {
      title: "كيفية تثبيت OpenClaw | دليل عملي",
      description: "دليل عملي لتثبيت OpenClaw على Windows و macOS و Linux باستخدام الأوامر الرسمية وخطوات البدء والفحوصات الأولى.",
      ogDescription: "تثبيت OpenClaw وخطوات البدء الأولى وروابط سريعة لأنظمة Windows و macOS و Linux.",
      eyebrow: "دليل عملي",
      heading: "كيفية تثبيت OpenClaw والوصول إلى أول وكيل يعمل",
      intro: "هذا هو الدليل الأساسي. يعطيك أبسط مسار لتثبيت OpenClaw وإكمال أول خطوات البدء والوصول إلى بيئة جاهزة على Windows أو macOS أو Linux من دون الضياع بين أوامر متفرقة وإعدادات ناقصة.",
      brandSub: "إعداد OpenClaw وأدلته والوكلاء الجاهزون",
      actions: [
        { label: "العودة إلى الرئيسية", href: "/ar/", primary: false },
        { label: "احجز الإعداد", href: "/ar/#book", primary: true },
      ],
      docActions: [
        { label: "دليل Windows", href: "/ar/openclaw-windows/", primary: true },
        { label: "دليل macOS", href: "/ar/openclaw-macos/", primary: false },
        { label: "دليل Linux", href: "/ar/openclaw-linux/", primary: false },
      ],
      blocks: [
        {
          title: "أبسط مسار في 3 خطوات",
          list: {
            ordered: true,
            items: [
              "ثبّت OpenClaw باستخدام السكربت الرسمي المناسب لنظامك.",
              "شغّل الإعداد الموجّه لضبط الـ gateway والإعدادات الأساسية.",
              "افتح لوحة التحكم وتأكد من أن أول وكيل يرد فعلاً.",
            ],
          },
        },
        {
          title: "الأوامر الرسمية التي يجدر البدء منها",
          paragraphs: ["macOS و Linux و WSL2"],
          codeBlocks: [
            "curl -fsSL --proto '=https' --tlsv1.2 https://openclaw.ai/install.sh | bash",
            "iwr -useb https://openclaw.ai/install.ps1 | iex",
            "openclaw onboard --install-daemon\nopenclaw dashboard",
          ],
        },
        {
          title: "أي دليل تفتح بعد ذلك",
          list: {
            ordered: false,
            items: [
              "إذا كنت على Windows فالمسار الأكثر استقرارًا هو WSL2.",
              "إذا كنت على Mac فالسكريبت الرسمي هو أسرع طريق.",
              "إذا كنت على Linux فالسكريبت نفسه يبقى أنظف نقطة بداية.",
            ],
          },
          paragraphs: [
            "إذا كان هدفك ليس فقط تثبيت OpenClaw بل أيضًا تشغيل workflow مفيد، فالخطوة التالية هي ضبط الوكلاء والإضافات والأدوات بشكل مقصود.",
          ],
        },
      ],
      aside: {
        title: "انتقل مباشرة إلى",
        links: [
          { label: "OpenClaw على Windows", href: "/ar/openclaw-windows/" },
          { label: "OpenClaw على macOS", href: "/ar/openclaw-macos/" },
          { label: "OpenClaw على Linux", href: "/ar/openclaw-linux/" },
          { label: "كيفية تثبيت الوكلاء", href: "/ar/installare-agenti/" },
          { label: "وكلاء جاهزون", href: "/ar/agenti-pronti/" },
        ],
      },
      footerLinks: [
        { label: "الرئيسية", href: "/ar/" },
        { label: "احجز الإعداد", href: "/ar/#book" },
      ],
    },
  },
  {
    slug: "openclaw-windows",
    en: {
      title: "OpenClaw on Windows | Guided Installation",
      description: "How to install OpenClaw on Windows with the recommended WSL2 path, the PowerShell alternative, and the first checks after setup.",
      ogDescription: "WSL2 path, official commands, and first steps to use OpenClaw on Windows.",
      eyebrow: "Windows",
      heading: "How to install OpenClaw on Windows without making it harder than it needs to be",
      intro: "The official documentation recommends using OpenClaw on Windows through WSL2. That avoids many native setup incompatibilities and keeps the flow closer to the Linux environment most docs assume.",
      brandSub: "OpenClaw setup, guides, and ready agents",
      actions: [
        { label: "Main guide", href: "/en/install-openclaw/", primary: false },
        { label: "Book setup", href: "/en/#book", primary: true },
      ],
      blocks: [
        {
          title: "Recommended route: WSL2",
          paragraphs: ["If you start from zero, install WSL2 with Ubuntu and work inside that shell. Then run the official script:"],
          codeBlocks: [
            "curl -fsSL --proto '=https' --tlsv1.2 https://openclaw.ai/install.sh | bash\nopenclaw onboard --install-daemon\nopenclaw dashboard",
          ],
        },
        {
          title: "Alternative route: native PowerShell",
          paragraphs: [
            "If you want to test the native Windows setup, the official PowerShell command is:",
            "It can work for quick tests, but WSL2 remains the more reliable choice for real usage.",
          ],
          codeBlocks: [
            "iwr -useb https://openclaw.ai/install.ps1 | iex",
          ],
        },
        {
          title: "Right after installation",
          list: {
            ordered: false,
            items: [
              "Run guided onboarding.",
              "Open the dashboard to test chat and UI control.",
              "If something looks wrong, move into a cleaner WSL2 setup instead of stacking workarounds in PowerShell.",
            ],
          },
        },
      ],
      aside: {
        title: "Useful links",
        links: [
          { label: "General install guide", href: "/en/install-openclaw/" },
          { label: "macOS guide", href: "/en/openclaw-macos/" },
          { label: "Linux guide", href: "/en/openclaw-linux/" },
          { label: "Install agents", href: "/en/installare-agenti/" },
        ],
      },
      footerLinks: [
        { label: "Home", href: "/en/" },
        { label: "Install guide", href: "/en/install-openclaw/" },
      ],
    },
    ar: {
      title: "OpenClaw على Windows | تثبيت موجّه",
      description: "كيفية تثبيت OpenClaw على Windows باستخدام مسار WSL2 الموصى به أو بديل PowerShell مع أول الفحوصات بعد الإعداد.",
      ogDescription: "مسار WSL2 والأوامر الرسمية وأول الخطوات لاستخدام OpenClaw على Windows.",
      eyebrow: "Windows",
      heading: "كيفية تثبيت OpenClaw على Windows من دون تعقيد غير لازم",
      intro: "الوثائق الرسمية توصي باستخدام OpenClaw على Windows عبر WSL2. هذا يتجنب كثيرًا من مشاكل التثبيت الأصلي ويحافظ على مسار أقرب إلى بيئة Linux التي تفترضها أغلب الشروحات.",
      brandSub: "إعداد OpenClaw وأدلته والوكلاء الجاهزون",
      actions: [
        { label: "الدليل الأساسي", href: "/ar/install-openclaw/", primary: false },
        { label: "احجز الإعداد", href: "/ar/#book", primary: true },
      ],
      blocks: [
        {
          title: "المسار الموصى به: WSL2",
          paragraphs: ["إذا كنت تبدأ من الصفر، ثبّت WSL2 مع Ubuntu واعمل داخل هذا الطرفي. بعدها استخدم السكربت الرسمي:"],
          codeBlocks: [
            "curl -fsSL --proto '=https' --tlsv1.2 https://openclaw.ai/install.sh | bash\nopenclaw onboard --install-daemon\nopenclaw dashboard",
          ],
        },
        {
          title: "المسار البديل: PowerShell المحلي",
          paragraphs: [
            "إذا أردت تجربة التثبيت المحلي على Windows فالأمر الرسمي في PowerShell هو:",
            "قد يعمل للاختبارات السريعة، لكن WSL2 يبقى الخيار الأكثر استقرارًا للاستخدام الجدي.",
          ],
          codeBlocks: [
            "iwr -useb https://openclaw.ai/install.ps1 | iex",
          ],
        },
        {
          title: "مباشرة بعد التثبيت",
          list: {
            ordered: false,
            items: [
              "شغّل الإعداد الموجّه.",
              "افتح لوحة التحكم لاختبار الدردشة وواجهة التحكم.",
              "إذا بدا شيء غير سليم، انتقل إلى إعداد أنظف داخل WSL2 بدلًا من تراكم الحلول المؤقتة داخل PowerShell.",
            ],
          },
        },
      ],
      aside: {
        title: "روابط مفيدة",
        links: [
          { label: "دليل التثبيت العام", href: "/ar/install-openclaw/" },
          { label: "دليل macOS", href: "/ar/openclaw-macos/" },
          { label: "دليل Linux", href: "/ar/openclaw-linux/" },
          { label: "تثبيت الوكلاء", href: "/ar/installare-agenti/" },
        ],
      },
      footerLinks: [
        { label: "الرئيسية", href: "/ar/" },
        { label: "دليل التثبيت", href: "/ar/install-openclaw/" },
      ],
    },
  },
  {
    slug: "openclaw-macos",
    en: {
      title: "OpenClaw on macOS | Guided Installation",
      description: "Practical guide to install OpenClaw on macOS with the official script, onboarding, and the first useful checks.",
      ogDescription: "Official script, onboarding, and first steps to use OpenClaw on macOS.",
      eyebrow: "macOS",
      heading: "How to install OpenClaw on macOS",
      intro: "On macOS the simplest route is still the official script. If you want to reach the first chat quickly and then move to a useful agent, the right flow is installation, onboarding, and a final dashboard check.",
      brandSub: "OpenClaw setup, guides, and ready agents",
      actions: [
        { label: "Main guide", href: "/en/install-openclaw/", primary: false },
        { label: "Book setup", href: "/en/#book", primary: true },
      ],
      blocks: [
        {
          title: "Official command",
          codeBlocks: [
            "curl -fsSL --proto '=https' --tlsv1.2 https://openclaw.ai/install.sh | bash",
          ],
          paragraphs: [
            "The script handles installation and basic prerequisites. It is the most direct choice if you want to avoid fragmented setup.",
          ],
        },
        {
          title: "Next steps",
          codeBlocks: [
            "openclaw onboard --install-daemon\nopenclaw dashboard",
          ],
          list: {
            ordered: false,
            items: [
              "Onboarding configures the first settings in a guided way.",
              "The dashboard lets you confirm immediately that the system responds.",
              "From there you can add agents, plugins, and tools that matter to your workflow.",
            ],
          },
        },
        {
          title: "When this guide is enough and when it is not",
          paragraphs: [
            "If you only want to install OpenClaw and reach a first chat, this page is enough. If you also want to connect models, permissions, plugins, or a ready-to-use agent, it makes sense to move to a fuller guided configuration.",
          ],
        },
      ],
      aside: {
        title: "Connected guides",
        links: [
          { label: "General install guide", href: "/en/install-openclaw/" },
          { label: "Linux guide", href: "/en/openclaw-linux/" },
          { label: "How to install agents", href: "/en/installare-agenti/" },
          { label: "Ready agents", href: "/en/agenti-pronti/" },
        ],
      },
      footerLinks: [
        { label: "Home", href: "/en/" },
        { label: "Install guide", href: "/en/install-openclaw/" },
      ],
    },
    ar: {
      title: "OpenClaw على macOS | تثبيت موجّه",
      description: "دليل عملي لتثبيت OpenClaw على macOS باستخدام السكربت الرسمي وخطوات البدء وأول الفحوصات المفيدة.",
      ogDescription: "السكريبت الرسمي وخطوات البدء وأول الخطوات لاستخدام OpenClaw على macOS.",
      eyebrow: "macOS",
      heading: "كيفية تثبيت OpenClaw على macOS",
      intro: "على macOS يبقى السكربت الرسمي هو الطريق الأبسط. إذا أردت الوصول سريعًا إلى أول محادثة ثم إلى وكيل مفيد، فالمسار الصحيح هو التثبيت ثم الإعداد الموجّه ثم فحص أخير عبر لوحة التحكم.",
      brandSub: "إعداد OpenClaw وأدلته والوكلاء الجاهزون",
      actions: [
        { label: "الدليل الأساسي", href: "/ar/install-openclaw/", primary: false },
        { label: "احجز الإعداد", href: "/ar/#book", primary: true },
      ],
      blocks: [
        {
          title: "الأمر الرسمي",
          codeBlocks: [
            "curl -fsSL --proto '=https' --tlsv1.2 https://openclaw.ai/install.sh | bash",
          ],
          paragraphs: [
            "السكريبت يتولى التثبيت والمتطلبات الأساسية. وهو الخيار الأكثر مباشرة إذا أردت تجنب إعداد مجزأ.",
          ],
        },
        {
          title: "الخطوات التالية",
          codeBlocks: [
            "openclaw onboard --install-daemon\nopenclaw dashboard",
          ],
          list: {
            ordered: false,
            items: [
              "الإعداد الموجّه يضبط أول الإعدادات بشكل واضح.",
              "لوحة التحكم تتيح لك التأكد فورًا من أن النظام يستجيب.",
              "بعدها يمكنك إضافة الوكلاء والإضافات والأدوات المهمة لتدفّق عملك.",
            ],
          },
        },
        {
          title: "متى يكفي هذا الدليل ومتى لا يكفي",
          paragraphs: [
            "إذا كان هدفك فقط تثبيت OpenClaw والوصول إلى أول محادثة فهذه الصفحة تكفي. أما إذا أردت أيضًا ربط النماذج أو الصلاحيات أو الإضافات أو وكيل جاهز للاستخدام فمن الأفضل الانتقال إلى إعداد موجّه أوسع.",
          ],
        },
      ],
      aside: {
        title: "أدلة مرتبطة",
        links: [
          { label: "دليل التثبيت العام", href: "/ar/install-openclaw/" },
          { label: "دليل Linux", href: "/ar/openclaw-linux/" },
          { label: "كيفية تثبيت الوكلاء", href: "/ar/installare-agenti/" },
          { label: "وكلاء جاهزون", href: "/ar/agenti-pronti/" },
        ],
      },
      footerLinks: [
        { label: "الرئيسية", href: "/ar/" },
        { label: "دليل التثبيت", href: "/ar/install-openclaw/" },
      ],
    },
  },
  {
    slug: "openclaw-linux",
    en: {
      title: "OpenClaw on Linux | Guided Installation",
      description: "How to install OpenClaw on Linux with the official script, guided onboarding, and a final dashboard check.",
      ogDescription: "Official script, onboarding, and first checks after the OpenClaw setup on Linux.",
      eyebrow: "Linux",
      heading: "How to install OpenClaw on Linux",
      intro: "On Linux the cleanest flow starts with the official script, continues with onboarding, and ends with a dashboard check. If you want a clean setup, this is the sequence worth following.",
      brandSub: "OpenClaw setup, guides, and ready agents",
      actions: [
        { label: "Main guide", href: "/en/install-openclaw/", primary: false },
        { label: "Book setup", href: "/en/#book", primary: true },
      ],
      blocks: [
        {
          title: "Installation command",
          codeBlocks: [
            "curl -fsSL --proto '=https' --tlsv1.2 https://openclaw.ai/install.sh | bash",
          ],
          paragraphs: [
            "It is the official command recommended for macOS, Linux, and WSL2. It skips needless manual steps and gets you faster to what matters: configuring OpenClaw for your workflow.",
          ],
        },
        {
          title: "Onboarding and validation",
          codeBlocks: [
            "openclaw onboard --install-daemon\nopenclaw dashboard",
          ],
          list: {
            ordered: false,
            items: [
              "Onboarding sets gateway and initial settings.",
              "The dashboard confirms immediately that chat responds.",
              "From there you can move into plugins, tools, and more specific agents.",
            ],
          },
        },
        {
          title: "When extra help saves time",
          paragraphs: [
            "If the goal is to connect local or cloud models, add safe permissions, or build the first useful agent, the install command alone is not enough. That is where guided configuration saves more time than the command itself.",
          ],
        },
      ],
      aside: {
        title: "Connected guides",
        links: [
          { label: "General install guide", href: "/en/install-openclaw/" },
          { label: "Windows guide", href: "/en/openclaw-windows/" },
          { label: "macOS guide", href: "/en/openclaw-macos/" },
          { label: "How to install agents", href: "/en/installare-agenti/" },
        ],
      },
      footerLinks: [
        { label: "Home", href: "/en/" },
        { label: "Install guide", href: "/en/install-openclaw/" },
      ],
    },
    ar: {
      title: "OpenClaw على Linux | تثبيت موجّه",
      description: "كيفية تثبيت OpenClaw على Linux باستخدام السكربت الرسمي والإعداد الموجّه والفحص النهائي عبر لوحة التحكم.",
      ogDescription: "السكريبت الرسمي وخطوات البدء وأول الفحوصات بعد إعداد OpenClaw على Linux.",
      eyebrow: "Linux",
      heading: "كيفية تثبيت OpenClaw على Linux",
      intro: "على Linux يبدأ المسار الأنظف بالسكريبت الرسمي ثم يتابع بالإعداد الموجّه وينتهي بفحص عبر لوحة التحكم. إذا أردت إعدادًا نظيفًا فهذه هي السلسلة التي تستحق الاتباع.",
      brandSub: "إعداد OpenClaw وأدلته والوكلاء الجاهزون",
      actions: [
        { label: "الدليل الأساسي", href: "/ar/install-openclaw/", primary: false },
        { label: "احجز الإعداد", href: "/ar/#book", primary: true },
      ],
      blocks: [
        {
          title: "أمر التثبيت",
          codeBlocks: [
            "curl -fsSL --proto '=https' --tlsv1.2 https://openclaw.ai/install.sh | bash",
          ],
          paragraphs: [
            "هذا هو الأمر الرسمي الموصى به لـ macOS و Linux و WSL2. يختصر الخطوات اليدوية غير الضرورية ويقربك أسرع إلى الجزء المهم: ضبط OpenClaw على workflow حقيقي.",
          ],
        },
        {
          title: "الإعداد الموجّه والتحقق",
          codeBlocks: [
            "openclaw onboard --install-daemon\nopenclaw dashboard",
          ],
          list: {
            ordered: false,
            items: [
              "الإعداد الموجّه يضبط الـ gateway والإعدادات الأولى.",
              "لوحة التحكم تؤكد مباشرة أن الدردشة تستجيب.",
              "بعد ذلك يمكنك الانتقال إلى الإضافات والأدوات والوكلاء الأكثر تحديدًا.",
            ],
          },
        },
        {
          title: "متى تكون المساعدة الإضافية أوفر للوقت",
          paragraphs: [
            "إذا كان الهدف هو ربط نماذج محلية أو سحابية أو إضافة صلاحيات آمنة أو بناء أول وكيل مفيد، فمجرد أمر التثبيت لا يكفي. هنا تحديدًا يوفر الإعداد الموجّه وقتًا أكثر من الأمر نفسه.",
          ],
        },
      ],
      aside: {
        title: "أدلة مرتبطة",
        links: [
          { label: "دليل التثبيت العام", href: "/ar/install-openclaw/" },
          { label: "دليل Windows", href: "/ar/openclaw-windows/" },
          { label: "دليل macOS", href: "/ar/openclaw-macos/" },
          { label: "كيفية تثبيت الوكلاء", href: "/ar/installare-agenti/" },
        ],
      },
      footerLinks: [
        { label: "الرئيسية", href: "/ar/" },
        { label: "دليل التثبيت", href: "/ar/install-openclaw/" },
      ],
    },
  },
  {
    slug: "installare-agenti",
    en: {
      title: "How to Install Agents in OpenClaw | Practical Guide",
      description: "Practical guide to install agents in OpenClaw: onboarding, agents, plugins, and the steps that turn setup into a real workflow.",
      ogDescription: "How to move from OpenClaw installed to the first useful agent with agents, plugins, and minimum configuration.",
      eyebrow: "Agents",
      heading: "How to install agents in OpenClaw without stopping at setup",
      intro: "Installing OpenClaw is not enough. To reach an agent that does real work you need to complete onboarding, define the agent, choose the right plugins, and validate the first concrete task.",
      brandSub: "OpenClaw setup, guides, and ready agents",
      actions: [
        { label: "Install guide", href: "/en/install-openclaw/", primary: false },
        { label: "Book setup", href: "/en/#book", primary: true },
      ],
      blocks: [
        {
          title: "Step 1: onboarding and a stable base",
          codeBlocks: [
            "openclaw onboard --install-daemon\nopenclaw dashboard",
          ],
          paragraphs: [
            "You need a stable base first. If you skip this, the agents you create later will sit on top of a fragile setup.",
          ],
        },
        {
          title: "Step 2: add or define the first agent",
          codeBlocks: [
            "openclaw agents add <name>\nopenclaw configure",
          ],
          paragraphs: [
            "The point is not creating ten abstract agents. The point is defining one with a precise role, a clear task, and understandable limits.",
          ],
        },
        {
          title: "Step 3: use plugins and tools only when they help",
          codeBlocks: [
            "openclaw plugins list\nopenclaw plugins install @openclaw/voice-call",
          ],
          paragraphs: [
            "Plugins add concrete capabilities. The typical mistake is installing too many too early. It is far better to start with one useful workflow and add only what actually matters.",
          ],
        },
      ],
      aside: {
        title: "Before and after",
        links: [
          { label: "Install OpenClaw first", href: "/en/install-openclaw/" },
          { label: "Then define one clear agent", href: "/en/agenti-pronti/" },
          { label: "Only then add plugins and extra tools", href: "/en/#book" },
        ],
      },
      footerLinks: [
        { label: "Home", href: "/en/" },
        { label: "Ready agents", href: "/en/agenti-pronti/" },
      ],
    },
    ar: {
      title: "كيفية تثبيت الوكلاء في OpenClaw | دليل عملي",
      description: "دليل عملي لتثبيت الوكلاء في OpenClaw: الإعداد الموجّه والوكلاء والإضافات والخطوات التي تنقل الإعداد إلى workflow حقيقي.",
      ogDescription: "كيف تنتقل من OpenClaw المثبت إلى أول وكيل مفيد باستخدام الوكلاء والإضافات وأقل إعداد لازم.",
      eyebrow: "الوكلاء",
      heading: "كيفية تثبيت الوكلاء في OpenClaw من دون التوقف عند الإعداد فقط",
      intro: "تثبيت OpenClaw لا يكفي. للوصول إلى وكيل ينجز عملاً حقيقيًا تحتاج إلى إكمال الإعداد الموجّه وتحديد الوكيل واختيار الإضافات المناسبة والتحقق من أول مهمة ملموسة.",
      brandSub: "إعداد OpenClaw وأدلته والوكلاء الجاهزون",
      actions: [
        { label: "دليل التثبيت", href: "/ar/install-openclaw/", primary: false },
        { label: "احجز الإعداد", href: "/ar/#book", primary: true },
      ],
      blocks: [
        {
          title: "الخطوة 1: الإعداد الموجّه وقاعدة مستقرة",
          codeBlocks: [
            "openclaw onboard --install-daemon\nopenclaw dashboard",
          ],
          paragraphs: [
            "تحتاج أولًا إلى قاعدة مستقرة. إذا تجاهلت هذه الخطوة فالوكلاء الذين ستنشئهم لاحقًا سيعتمدون على إعداد هش.",
          ],
        },
        {
          title: "الخطوة 2: أضف الوكيل الأول أو عرّفه",
          codeBlocks: [
            "openclaw agents add <name>\nopenclaw configure",
          ],
          paragraphs: [
            "المهم ليس إنشاء عشرة وكلاء نظريين. المهم هو تعريف واحد بدور محدد ومهمة واضحة وحدود مفهومة.",
          ],
        },
        {
          title: "الخطوة 3: استخدم الإضافات والأدوات فقط عندما تساعد",
          codeBlocks: [
            "openclaw plugins list\nopenclaw plugins install @openclaw/voice-call",
          ],
          paragraphs: [
            "الإضافات تضيف قدرات عملية. والخطأ المعتاد هو تثبيت عدد كبير منها مبكرًا. الأفضل أن تبدأ بـ workflow مفيد واحد ثم تضيف فقط ما تحتاجه فعلًا.",
          ],
        },
      ],
      aside: {
        title: "قبل وبعد",
        links: [
          { label: "ثبّت OpenClaw أولًا", href: "/ar/install-openclaw/" },
          { label: "ثم حدّد وكيلًا واحدًا واضحًا", href: "/ar/agenti-pronti/" },
          { label: "ثم فقط أضف الإضافات والأدوات", href: "/ar/#book" },
        ],
      },
      footerLinks: [
        { label: "الرئيسية", href: "/ar/" },
        { label: "وكلاء جاهزون", href: "/ar/agenti-pronti/" },
      ],
    },
  },
  {
    slug: "agenti-pronti",
    en: {
      title: "Ready Agents for OpenClaw | Useful Examples",
      description: "Concrete examples of ready agents you can configure with OpenClaw for support, research, reporting, follow-up, and real workflows.",
      ogDescription: "Concrete examples of useful agents to configure with OpenClaw for real workflows.",
      eyebrow: "Operational templates",
      heading: "Ready agents for OpenClaw: concrete examples worth starting from",
      intro: 'You do not find vague promises about "AI agents" here. You find examples of useful agents to configure in OpenClaw for recurring tasks: support, research, reporting, follow-up, and operational organization.',
      brandSub: "OpenClaw setup, guides, and ready agents",
      actions: [
        { label: "How to install agents", href: "/en/installare-agenti/", primary: false },
        { label: "Book setup", href: "/en/#book", primary: true },
      ],
      blocks: [
        {
          title: "Useful starting examples",
          list: {
            ordered: false,
            items: [
              "Email support agent that drafts replies and filters repetitive requests.",
              "Research and knowledge agent that summarizes sources and prepares operational notes.",
              "Reporting ops agent that collects recurring data and prepares readable updates.",
              "Commercial follow-up agent that helps keep continuity across leads and next actions.",
              "Document agent that classifies files and builds a first backoffice workflow.",
              "Local or cloud agent depending on the level of control or integration you need.",
            ],
          },
        },
        {
          title: "The right criterion",
          paragraphs: [
            "The most common mistake is starting from an idea that is too broad. It is much better to pick one agent, one task, and one workflow to validate first. When that works, the rest expands much more cleanly.",
          ],
        },
      ],
      aside: {
        title: "Next steps",
        links: [
          { label: "Install OpenClaw", href: "/en/install-openclaw/" },
          { label: "Configure the first agent", href: "/en/installare-agenti/" },
          { label: "Book a guided setup", href: "/en/#book" },
        ],
      },
      footerLinks: [
        { label: "Home", href: "/en/" },
        { label: "Install agents", href: "/en/installare-agenti/" },
      ],
    },
    ar: {
      title: "وكلاء جاهزون لـ OpenClaw | أمثلة مفيدة",
      description: "أمثلة ملموسة لوكلاء جاهزين يمكنك إعدادهم مع OpenClaw للدعم والبحث والتقارير والمتابعة وworkflows حقيقية.",
      ogDescription: "أمثلة ملموسة لوكلاء مفيدين يمكنك إعدادهم مع OpenClaw لworkflows حقيقية.",
      eyebrow: "قوالب تشغيلية",
      heading: "وكلاء جاهزون لـ OpenClaw: أمثلة عملية تستحق أن تبدأ منها",
      intro: 'لن تجد هنا وعودًا عامة عن "وكلاء الذكاء الاصطناعي". ستجد أمثلة لوكلاء مفيدين يمكن إعدادهم في OpenClaw لمهام متكررة: الدعم والبحث والتقارير والمتابعة والتنظيم التشغيلي.',
      brandSub: "إعداد OpenClaw وأدلته والوكلاء الجاهزون",
      actions: [
        { label: "كيفية تثبيت الوكلاء", href: "/ar/installare-agenti/", primary: false },
        { label: "احجز الإعداد", href: "/ar/#book", primary: true },
      ],
      blocks: [
        {
          title: "أمثلة مفيدة للبداية",
          list: {
            ordered: false,
            items: [
              "وكيل دعم بريد إلكتروني يصيغ الردود ويصفّي الطلبات المتكررة.",
              "وكيل بحث ومعرفة يلخص المصادر ويجهز ملاحظات تشغيلية.",
              "وكيل تقارير وعمليات يجمع البيانات المتكررة ويجهز تحديثات قابلة للقراءة.",
              "وكيل متابعة تجارية يساعد على الحفاظ على الاستمرارية مع العملاء المحتملين والخطوات التالية.",
              "وكيل مستندي يصنف الملفات ويبني أول workflow للمكتب الخلفي.",
              "وكيل محلي أو سحابي بحسب مستوى التحكم أو التكامل الذي تحتاجه.",
            ],
          },
        },
        {
          title: "المعيار الصحيح",
          paragraphs: [
            "أكثر الأخطاء شيوعًا هو البدء من فكرة واسعة جدًا. من الأفضل بكثير أن تختار وكيلًا واحدًا ومهمة واحدة وworkflow واحدًا لتتحقق منه أولًا. عندما ينجح ذلك، يتوسع الباقي بنظافة أكبر بكثير.",
          ],
        },
      ],
      aside: {
        title: "الخطوات التالية",
        links: [
          { label: "ثبّت OpenClaw", href: "/ar/install-openclaw/" },
          { label: "اضبط الوكيل الأول", href: "/ar/installare-agenti/" },
          { label: "احجز إعدادًا موجّهًا", href: "/ar/#book" },
        ],
      },
      footerLinks: [
        { label: "الرئيسية", href: "/ar/" },
        { label: "تثبيت الوكلاء", href: "/ar/installare-agenti/" },
      ],
    },
  },
];

function renderLocalizedGuides() {
  for (const lang of ["en", "ar"]) {
    for (const page of guidePages) {
      write(`${lang}/${page.slug}/index.html`, pageTemplate({ ...page[lang], lang, slug: page.slug }));
    }
  }
}

function renderThanks() {
  write("en/thanks/index.html", thanksTemplate("en"));
  write("ar/thanks/index.html", thanksTemplate("ar"));
}

function main() {
  localizeHome("en");
  localizeHome("ar");
  renderLocalizedGuides();
  renderThanks();
}

main();
