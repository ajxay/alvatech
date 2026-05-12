import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

/** @type {Record<string, unknown>} */
const en = {
  common: {
    emailPlaceholder: "Your email..",
    contactUs: "Contact Us",
    privacyPrefix: "We care about your data in our ",
    privacyLink: "privacy policy",
    privacySuffix: ".",
    letsFindOut: "Let's find out",
    scheduleCallCtaTitle: "Schedule a call.",
    scheduleCallCtaBody: "Join over 500+ business already growing with Alvatech.",
    letsTalk: "Let's Talk",
    getStarted: "Get Started",
  },
  shopify: {
    hero: {
      titleWe: "We",
      titleHighlight: "build, market, and scale ",
      titleRest: "your digital presence",
      subtitle:
        "From high-performing Shopify stores to result-driven marketing and social media strategies—we help you attract, engage, and convert your audience.",
    },
    bento: {
      "0": { title: "Publish Beautiful stores Online", alt: "Publish beautiful stores online" },
      "1": { title: "Launch Amazing Ads", alt: "Launch amazing ads" },
      "2": { title: "Grow Your Brand on Social Media", alt: "Grow your brand on social media" },
      "3": { title: "Turn Visitor Into Clients", alt: "Turn visitor into clients" },
    },
    featuresSection: {
      title: "We build, market, and scale your digital presence",
      subtitle:
        "From high-performing Shopify stores to result-driven marketing and social media strategies—we help you attract, engage, and convert your audience.",
    },
    features: {
      "0": {
        title: "Custom Shopify Store Development",
        description:
          "From idea to launch, we create fully customized Shopify stores tailored to your brand and business goals.",
        linkText: "Let's find out",
        alt: "Custom Shopify Store Development",
      },
      "1": {
        title: "Theme Design & Customization",
        description:
          "We design visually compelling storefronts or customize existing Shopify themes to match your identity and improve user experience.",
        linkText: "See all spreadsheets",
        alt: "Theme Design & Customization",
      },
      "2": {
        title: "Shopify App Development & Integration",
        description:
          "Need advanced features? We integrate and configure apps for payments, subscriptions, inventory, marketing, and more.",
        linkText: "See apps & integrations",
        alt: "Shopify App Development & Integration",
      },
      "3": {
        title: "Store Migration",
        description:
          "Moving from another platform? We ensure a smooth migration to Shopify with zero data loss and minimal downtime.",
        linkText: "Let's find out",
        alt: "Store Migration",
      },
    },
    facts: {
      title: "Everything you need is right at your fingertips",
      subtitle:
        "We deliver solutions that simplify your workflow and help your business grow effortlessly.",
      items: { "0": "Live Shopify Stores", "1": "Client Retention Rate", "2": "Orders Processed" },
    },
    faq: {
      "1": {
        question: "How long does it take to build a Shopify store?",
        answer:
          "Most Shopify stores take between 1–4 weeks depending on the complexity, number of pages, and custom features required. Simpler stores can be launched faster, while advanced builds take more time.",
      },
      "2": {
        question: "Do you provide custom design or use pre-made themes?",
        answer:
          "We offer both options. We can create a fully custom design tailored to your brand or customize a premium Shopify theme based on your budget and timeline.",
      },
      "3": {
        question: "Can you redesign my existing Shopify store?",
        answer:
          "Yes, we can redesign your existing Shopify store to improve its design, user experience, and conversion rate without affecting your current data.",
      },
      "4": {
        question: "Will my Shopify store be mobile-friendly?",
        answer:
          "Absolutely. All our Shopify stores are fully responsive and optimized to work seamlessly across mobile, tablet, and desktop devices.",
      },
      "5": {
        question: "Do you help with app integrations and features?",
        answer:
          "Yes, we handle Shopify app integrations including payment gateways, shipping solutions, subscriptions, marketing tools, and other advanced features.",
      },
      "6": {
        question: "Can you migrate my store from another platform to Shopify?",
        answer:
          "Yes, we provide complete migration services from platforms like WooCommerce, Magento, and Wix while ensuring your data remains safe and intact.",
      },
      "7": {
        question: "Will my store be optimized for speed and SEO?",
        answer:
          "Yes, we follow best practices for performance optimization and basic on-page SEO to ensure faster loading times and better visibility in search engines.",
      },
      "8": {
        question: "Do you provide support after the store is launched?",
        answer:
          "Yes, we offer ongoing support and maintenance to keep your store updated, secure, and performing at its best.",
      },
      "9": {
        question: "How much does Shopify development cost?",
        answer:
          "The cost depends on your requirements, such as design complexity and features. We provide custom pricing based on your specific needs.",
      },
      "10": {
        question: "Do I need technical knowledge to manage my store?",
        answer:
          "No, Shopify is user-friendly. We also provide guidance or training so you can easily manage products, orders, and content.",
      },
    },
  },
  customDevelopment: {
    hero: {
      titleWe: "We",
      titleHighlight: "build, launch, and scale ",
      titleRest: "your custom web applications",
      subtitle:
        "From scalable MERN stack applications to high-performance systems—we help you build, optimize, and grow your digital products with precision.",
    },
    facts: {
      title: "Everything you need to build and scale modern applications",
      subtitle:
        "We deliver scalable solutions that streamline operations and accelerate business growth.",
      items: { "0": "Applications Delivered", "1": "Client Satisfaction Rate", "2": "Users Served Across Apps" },
    },
    service: {
      title: "We build, scale, and optimize your digital products",
      subtitle:
        "From idea to deployment—we create robust, scalable applications tailored to your business goals.",
      "0": {
        title: "Custom Web Application Development",
        description:
          "From concept to deployment, we build fully customized web applications using the MERN stack—designed to match your workflows, users, and business goals.",
        linkText: "Let's build",
        alt: "Custom Web Application Development",
      },
      "1": {
        title: "UI/UX Design & Frontend Development",
        description:
          "We design intuitive, high-performing interfaces using React to ensure seamless user experiences that drive engagement and conversions.",
        linkText: "Let's design",
        alt: "UI/UX Design & Frontend Development",
      },
      "2": {
        title: "API Development & System Integration",
        description:
          "We build secure, scalable APIs and integrate third-party services to ensure your application works seamlessly across platforms.",
        linkText: "Let's integrate",
        alt: "API Development & System Integration",
      },
      "3": {
        title: "Application Migration & Modernization",
        description:
          "Still using outdated systems? We migrate your legacy applications to modern MERN stack architecture with zero downtime and improved performance.",
        linkText: "Let's upgrade",
        alt: "Application Migration & Modernization",
      },
    },
    faq: {
      "1": {
        question: "What type of custom development services do you offer?",
        answer:
          "We build custom web applications, APIs, internal tools, portals, and scalable backend systems tailored to your business processes and growth goals.",
      },
      "2": {
        question: "Can you modernize our existing legacy application?",
        answer:
          "Yes. We can audit your current system, redesign architecture, migrate outdated codebases, and modernize the UI/UX while preserving critical business logic.",
      },
      "3": {
        question: "Which technologies do you use for custom projects?",
        answer:
          "Our team works with modern stacks such as React, Next.js, Node.js, and cloud-based infrastructure, selecting tools based on your performance, security, and scalability requirements.",
      },
      "4": {
        question: "How do you estimate project timeline and cost?",
        answer:
          "We start with a discovery phase, define scope and milestones, then provide a transparent estimate based on complexity, integrations, and delivery priorities.",
      },
      "5": {
        question: "Do you provide post-launch support and maintenance?",
        answer:
          "Absolutely. We offer ongoing maintenance, performance monitoring, security updates, and feature enhancements after launch.",
      },
    },
  },
  salesforce: {
    hero: {
      title: "Tailored solutions for ",
      titleHighlight: "higher revenue growth",
      subtitle:
        "From CRM implementation to custom automation and AI-driven insights, we help you get the most out of Salesforce so your sales, service, and operations run as one.",
    },
    facts: {
      title: "Smart features for your business",
      subtitle:
        "Our flexible engagement model allows you to tailor your project to your preferences. You retain full control, and our team of Salesforce-certified developers ensures a beneficial outcome.",
      items: {
        "0": "Years of Salesforce Experience",
        "1": "Implementations In 23+ Countries",
        "2": "Appexchane Apps Developed",
      },
    },
    features: {
      leads: {
        title: "Lead & Contact Management",
        description:
          "Capture, organize, and track leads and contacts in one place to build stronger relationships and never miss an opportunity.",
      },
      pipeline: {
        title: "Opportunity & Pipeline Management",
        description:
          "Visualize your sales pipeline, track deal progress, and forecast revenue with real-time insights to close more deals.",
      },
      reports: {
        title: "Reports & Analytics",
        description:
          "Get real-time reports and actionable insights to make smarter decisions and drive your business growth.",
      },
      workflow: {
        title: "Workflow & Automation",
        description:
          "Automate repetitive tasks, set up workflows, and save time so your team can focus on what really matters.",
      },
      bottomTitle: "Your All-in-One CRM for Business Success",
      bottomBody:
        "Salesforce is your complete CRM solution, designed to streamline your sales, customer service, and marketing efforts. With powerful tools and integrations, you can effortlessly manage customer relationships and drive business growth.",
      intro1Title: "Enhanced Analytics",
      intro1Desc:
        "Leverage deep insights to understand your customers better and create personalized experiences that drive engagement.",
      intro2Title: "Effortless Management",
      intro2Desc:
        "Manage your entire customer lifecycle with ease, from tracking leads to delivering exceptional customer support.",
    },
    faq: {
      "1": {
        question: "Which Salesforce services do you offer?",
        answer:
          "We provide Salesforce consulting, CRM implementation, customization, automation, integrations, data migration, and user adoption support.",
      },
      "2": {
        question: "Can you customize Salesforce for our sales process?",
        answer:
          "Yes. We configure custom objects, fields, workflows, dashboards, and automations that match your exact sales and service operations.",
      },
      "3": {
        question: "Do you help with Salesforce data migration?",
        answer:
          "Yes, we handle secure data mapping, cleansing, migration, and validation from legacy systems or other CRMs into Salesforce.",
      },
      "4": {
        question: "Can Salesforce integrate with our existing tools?",
        answer:
          "Absolutely. We integrate Salesforce with ERP, marketing platforms, support tools, and third-party apps for seamless data flow.",
      },
      "5": {
        question: "Do you provide training after implementation?",
        answer:
          "Yes. We provide role-based training, documentation, and ongoing support to improve adoption and long-term CRM performance.",
      },
    },
  },
  erp: {
    hero: {
      titleHighlight: "All in one ",
      titleRest: "Business Solution",
      subtitle:
        "Centralize all core business functions in one platform to improve collaboration, streamline operations, and enhance overall productivity.",
    },
    facts: {
      title: "One platform powering every core business function",
      subtitle:
        "From finance and operations to analytics and automation, our ERP unifies your teams, data, and workflows on a single secure cloud.",
      items: { "0": "Cloud-Based Platform", "1": "Global Integrations", "2": "Faster Operations" },
    },
    service: {
      badge: "Built for modern enterprises",
      title: "Everything your business needs in one place",
      subtitle:
        "From finance and supply chain to analytics and automation—our ERP unifies every workflow so your teams can do their best work.",
      "0": {
        title: "Cloud-Based ERP",
        description:
          "Access Business Central anytime, anywhere with secure cloud hosting, ensuring flexibility, scalability, and real-time collaboration for global teams.",
        linkText: "Go cloud",
        alt: "Cloud-Based ERP",
      },
      "1": {
        title: "Global Operations",
        description:
          "Operate seamlessly across regions with multi-currency, multi-language, and localization support for global financial and business management.",
        linkText: "Go global",
        alt: "Global Operations",
      },
      "2": {
        title: "Smart Analytics",
        description:
          "Empower teams with data-driven insights through interactive dashboards and reports that enable quick, informed decision-making.",
        linkText: "See insights",
        alt: "Smart Analytics",
      },
      "3": {
        title: "Integration with Microsoft products",
        description:
          "Seamlessly connect with Microsoft 365, Power BI, and Teams to enhance collaboration and unify data across all applications.",
        linkText: "Explore integrations",
        alt: "Integration with Microsoft products",
      },
      "4": {
        title: "Custom Workflows",
        description:
          "Reduce manual effort by automating repetitive processes, improving accuracy, and allowing teams to focus on strategic initiatives.",
        linkText: "Automate now",
        alt: "Custom Workflows",
      },
    },
    faq: {
      "1": {
        question: "What business areas can ERP solutions improve?",
        answer:
          "ERP systems unify finance, inventory, procurement, operations, and reporting so teams can work with one source of truth.",
      },
      "2": {
        question: "How do you choose the right ERP approach for a company?",
        answer:
          "We assess your workflows, pain points, and growth plans, then recommend a solution and implementation roadmap aligned with your goals.",
      },
      "3": {
        question: "Can you integrate ERP with our current software stack?",
        answer:
          "Yes. We integrate ERP with CRM, e-commerce, accounting, and operational systems to reduce manual work and improve visibility.",
      },
      "4": {
        question: "How long does ERP implementation usually take?",
        answer:
          "Timeline depends on modules, data complexity, and process changes. We deliver in phases to reduce risk and ensure adoption.",
      },
      "5": {
        question: "Do you support optimization after go-live?",
        answer:
          "Yes. We provide post-implementation support, workflow optimization, and reporting enhancements as your business evolves.",
      },
    },
  },
  zoho: {
    hero: {
      titleBefore: "Maximum ",
      titleHighlight: "productivity with minimum",
      titleAfter: " use",
      subtitle:
        "Zoho CRM offers everything you need to increase leads, accelerate sales, and measure sales performance—powering sales execution for 200,000+ businesses worldwide.",
    },
    facts: {
      title: "Powering sales execution for businesses worldwide",
      subtitle:
        "Hyper-manage operations with rich analytics. Zoho CRM connects every part of your sales workflow so your team can focus on closing deals.",
      items: { "0": "Businesses Worldwide", "1": "App Integrations", "2": "Powerful CRM Features" },
    },
    service: {
      badge: "Features that make selling easier",
      title: "Hyper-manage operations with rich analytics",
      subtitle:
        "Zoho CRM offers everything you need to increase leads, accelerate sales, and measure sales performance across every channel.",
      "0": {
        title: "Lead Management",
        description:
          "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        linkText: "Explore leads",
        alt: "Lead Management",
      },
      "1": {
        title: "Workflow Automation",
        description:
          "Every follow-up or field update requires significant manual work. Automate these repetitive tasks with intelligent workflows so your team moves faster.",
        linkText: "Automate now",
        alt: "Workflow Automation",
      },
      "2": {
        title: "Sales Process Builder",
        description:
          "Bring your offline sales processes into your CRM and make sure every rep follows the same playbook at every stage of the deal.",
        linkText: "Build the process",
        alt: "Sales Process Builder",
      },
      "3": {
        title: "Analytics & Forecasting",
        description:
          "Create dashboards, analyze trends, stay on top of your KPIs, and predict future sales with accurate forecasting tools.",
        linkText: "See analytics",
        alt: "Analytics & Forecasting",
      },
    },
    faq: {
      "1": {
        question: "What can Zoho CRM do for our business?",
        answer:
          "Zoho CRM helps you manage leads, automate follow-ups, track deals, and improve pipeline visibility for faster and smarter sales execution.",
      },
      "2": {
        question: "Can you customize Zoho CRM based on our workflow?",
        answer:
          "Yes. We customize modules, fields, automations, blueprints, and dashboards to match your exact sales and customer lifecycle.",
      },
      "3": {
        question: "Do you provide Zoho CRM migration services?",
        answer:
          "Yes, we migrate data from spreadsheets or other CRMs into Zoho CRM with mapping, cleanup, and validation.",
      },
      "4": {
        question: "Can Zoho CRM integrate with email and other apps?",
        answer:
          "Absolutely. We integrate Zoho CRM with email, telephony, marketing tools, and third-party business applications.",
      },
      "5": {
        question: "Will my team receive onboarding and training?",
        answer:
          "Yes. We provide onboarding, role-based training, and support to ensure your team adopts Zoho CRM effectively.",
      },
    },
  },
  marketing: {
    trustStrip:
      "14,00+ Companies large and small trust on us for transformation",
    hero: {
      title: "Stop Guessing  Start Growing.",
      subtitle:
        "From paid ads to SEO, social media to conversion optimization — we build and run performance-driven marketing strategies that turn traffic into revenue. No vanity metrics. Just measurable growth.",
      emailPlaceholder: "Enter your email",
      getCall: "Get a Call",
      reviewsNote: "Based on 200+ reviews",
    },
    featuresSection: {
      title: "Next-level business services",
      subtitle:
        "Our comprehensive services are designed to elevate your brand, from targeted advertising to data-driven SEO and compelling content.",
    },
    features: {
      social: {
        title: "Social media advertising",
        description:
          "We create ad campaigns on platforms like Facebook and Google to boost your reach.",
        p0: "PPC / SEM",
        p1: "Display Advertising",
        p2: "Facebook & Google Advertising",
      },
      seo: {
        title: "SEO optimization",
        description:
          "Our team improves search ranking through detailed audits and expert coaching.",
        p0: "SEO Audits",
        p1: "SEO Strategy & Coaching",
        p2: "Page Speed Optimization",
      },
      analytics: {
        title: "Advanced analytics",
        description:
          "We analyze user behavior with tools like heat maps and goal tracking to refine your strategy.",
        p0: "Goals & Targets Setup",
        p1: "User Analytics",
        p2: "Heat Map Analytics",
      },
      funnel: {
        title: "Funnel optimization",
        description:
          "We conduct thorough funnel audits and UX analysis to improve your conversion rates.",
        p0: "UX Analysis",
        p1: "Funnel Audit",
        p2: "CR Optimization",
      },
      paid: {
        title: "Paid advertising",
        description:
          "Experts manage A/B testing, retargeting campaigns, and conversion optimization.",
        p0: "Ads A/B Testing",
        p1: "CR Optimization",
        p2: "Retargeting",
      },
      content: {
        title: "Content marketing",
        description:
          "We develop content plans and manage your community to build a loyal audience.",
        p0: "Content Plan",
        p1: "Content Creation",
        p2: "Community Management",
      },
    },
    howworks: {
      title: "Powerful and simple workflow",
      subtitle:
        "Our process is designed for clarity and impact. We work with you to define goals, execute strategies, and deliver measurable results.",
    },
    faqIntro: "Everything you need to know about the product and billing.",
    accordion: {
      "23": {
        title: "Let's make a plan",
        content:
          "We begin defining clear objectives and KPIs, mapping a strategy that aligns with your business goals.",
      },
      "25": {
        title: "Launch and execute",
        content:
          "Our team puts the plan into action, deploying campaigns and monitoring performance.",
      },
      "27": {
        title: "Grow and scale",
        content:
          "We analyze data to optimize for performance, ensuring sustainable growth and success.",
      },
    },
    support: {
      title: "Still have questions?",
      subtitle:
        "Can't find the answer you're looking for? Please chat to our friendly team.",
      cta: "Get in touch",
    },
    faq: {
      "1": {
        question: "What marketing services does Alvatech provide?",
        answer:
          "We provide performance marketing, paid ads, SEO, social media strategy, content planning, and funnel optimization to improve lead quality and ROI.",
      },
      "2": {
        question: "How long does it take to see results from marketing?",
        answer:
          "Paid campaigns can generate early results in weeks, while SEO and organic growth typically require a few months of consistent execution and optimization.",
      },
      "3": {
        question: "Do you manage Meta and Google ad campaigns?",
        answer:
          "Yes, we plan, launch, and optimize campaigns across Meta and Google with audience targeting, creative testing, and conversion-focused tracking.",
      },
      "4": {
        question: "How do you track campaign performance?",
        answer:
          "We use clear KPIs like CPL, CAC, ROAS, conversion rate, and revenue impact, and share regular reports with strategic recommendations.",
      },
      "5": {
        question: "Can you align marketing with our sales process?",
        answer:
          "Yes. We align campaign goals with your sales funnel and CRM workflows to improve lead nurturing and conversion outcomes.",
      },
    },
  },
};

writeFileSync(join(root, "locales/en/servicePages.json"), JSON.stringify(en, null, 2), "utf8");

const sv = structuredClone(en);

sv.common = {
  emailPlaceholder: "Din e-postadress..",
  contactUs: "Kontakta oss",
  privacyPrefix: "Vi bryr oss om dina data i vår ",
  privacyLink: "integritetspolicy",
  privacySuffix: ".",
  letsFindOut: "Läs mer",
  scheduleCallCtaTitle: "Boka ett samtal.",
  scheduleCallCtaBody: "Över 500 företag växer redan med Alvatech.",
  letsTalk: "Prata med oss",
  getStarted: "Kom igång",
};

sv.shopify.hero = {
  titleWe: "Vi",
  titleHighlight: "bygger, marknadsför och skalar ",
  titleRest: "er digitala närvaro",
  subtitle:
    "Från högpresterande Shopify-butiker till resultatinriktad marknadsföring och sociala strategier – vi hjälper er attrahera, engagera och konvertera er målgrupp.",
};
sv.shopify.bento = {
  "0": { title: "Publicera vackra butiker online", alt: "Publicera vackra butiker online" },
  "1": { title: "Lansera starka annonser", alt: "Lansera starka annonser" },
  "2": { title: "Väx ert varumärke i sociala medier", alt: "Väx ert varumärke i sociala medier" },
  "3": { title: "Förvandla besökare till kunder", alt: "Förvandla besökare till kunder" },
};
sv.shopify.featuresSection = {
  title: "Vi bygger, marknadsför och skalar er digitala närvaro",
  subtitle: sv.shopify.hero.subtitle,
};
sv.shopify.features = {
  "0": {
    title: "Skräddarsydd Shopify-utveckling",
    description:
      "Från idé till lansering skapar vi helt anpassade Shopify-butiker utifrån ert varumärke och era affärsmål.",
    linkText: "Läs mer",
    alt: "Skräddarsydd Shopify-utveckling",
  },
  "1": {
    title: "Temadesign och anpassning",
    description:
      "Vi designar butiksytor som konverterar eller anpassar befintliga premiumteman så att de speglar er identitet och förbättrar användarupplevelsen.",
    linkText: "Se teman",
    alt: "Temadesign och anpassning",
  },
  "2": {
    title: "Shopify-appar och integrationer",
    description:
      "Behöver ni avancerade funktioner? Vi integrerar och konfigurerar appar för betalning, prenumerationer, lager, marknadsföring med mera.",
    linkText: "Se appar och integrationer",
    alt: "Shopify-appar och integrationer",
  },
  "3": {
    title: "Butiksmigrering",
    description:
      "Byter ni plattform? Vi migrerar säkert till Shopify med minimal nedtid och utan dataförlust.",
    linkText: "Läs mer",
    alt: "Butiksmigrering",
  },
};
sv.shopify.facts = {
  title: "Allt ni behöver finns nära till hands",
  subtitle:
    "Vi levererar lösningar som förenklar arbetsflöden och hjälper er verksamhet att växa smidigt.",
  items: {
    "0": "Live Shopify-butiker",
    "1": "Kundretention",
    "2": "Behandlade ordrar",
  },
};

sv.customDevelopment.hero = {
  titleWe: "Vi",
  titleHighlight: "bygger, lanserar och skalar ",
  titleRest: "era skräddarsydda webbapplikationer",
  subtitle:
    "Från skalbar MERN-arkitektur till högpresterande system – vi hjälper er att bygga, optimera och växa med precision.",
};
sv.customDevelopment.facts = {
  title: "Allt ni behöver för att bygga och skala moderna applikationer",
  subtitle: "Vi levererar skalbara lösningar som effektiviserar verksamheten och accelererar tillväxt.",
  items: { "0": "Levererade applikationer", "1": "Kundnöjdhet", "2": "Användare i våra appar" },
};
sv.customDevelopment.service = {
  title: "Vi bygger, skalar och optimerar era digitala produkter",
  subtitle:
    "Från idé till produktion – vi skapar robusta, skalbara applikationer anpassade efter era mål.",
  "0": {
    title: "Skräddarsydd webbapplikationsutveckling",
    description:
      "Vi bygger webbapplikationer i MERN-stacken utifrån era processer, användare och mål.",
    linkText: "Bygg med oss",
    alt: "Skräddarsydd webbapplikationsutveckling",
  },
  "1": {
    title: "UI/UX och frontend",
    description:
      "Vi designar intuitiva gränssnitt i React som ökar engagemang och konvertering.",
    linkText: "Designa med oss",
    alt: "UI/UX och frontend",
  },
  "2": {
    title: "API:er och systemintegration",
    description:
      "Säkra, skalbara API:er och integrationer så att allt fungerar sömlöst över plattformar.",
    linkText: "Integrera",
    alt: "API:er och systemintegration",
  },
  "3": {
    title: "Migrering och modernisering",
    description:
      "Vi flyttar legacy till modern MERN-arkitektur med minimal störning och bättre prestanda.",
    linkText: "Uppgradera",
    alt: "Migrering och modernisering",
  },
};

sv.salesforce.hero = {
  title: "Skräddarsydda lösningar för ",
  titleHighlight: "högre intäktstillväxt",
  subtitle:
    "Från CRM-implementering till automation och insikter – vi maximerar värdet av Salesforce så sälj, service och drift arbetar som en enhet.",
};
sv.salesforce.facts = {
  title: "Smarta funktioner för er verksamhet",
  subtitle:
    "Ni behåller kontrollen medan våra Salesforce-certifierade utvecklärar säkerställer ett tydligt och värdeskapande resultat.",
  items: {
    "0": "År med Salesforce-erfarenhet",
    "1": "Implementationer i 23+ länder",
    "2": "Utvecklade AppExchange-appar",
  },
};
sv.salesforce.features = {
  leads: {
    title: "Lead- och kontakthantering",
    description:
      "Samla, strukturera och följ upp leads och kontakter på ett ställe för starkare relationer.",
  },
  pipeline: {
    title: "Affärsmöjligheter och pipeline",
    description:
      "Visualisera pipelinen, följ affärer och prognostisera intäkter i realtid.",
  },
  reports: {
    title: "Rapporter och analys",
    description: "Få rapporter och insikter som stödjer snabbare beslut och tillväxt.",
  },
  workflow: {
    title: "Arbetsflöden och automation",
    description: "Automatisera repetitiva uppgifter så teamet kan fokusera på det som skapar värde.",
  },
  bottomTitle: "Er kompletta CRM-plattform för affärsframgång",
  bottomBody:
    "Salesforce samlar försäljning, kundservice och marknadsföring med kraftfulla verktyg och integrationer.",
  intro1Title: "Fördjupad analys",
  intro1Desc: "Förstå kunderna bättre och skapa personaliserade upplevelser som driver engagemang.",
  intro2Title: "Enkel livscykelhantering",
  intro2Desc: "Hantera hela kundresan från lead till support med tydliga processer.",
};

sv.erp.hero = {
  titleHighlight: "Allt-i-ett-",
  titleRest: "affärslösning",
  subtitle:
    "Samla kärnfunktioner på en plattform för bättre samarbete, effektivare drift och högre produktivitet.",
};
sv.erp.facts = {
  title: "En plattform för varje kärnfunktion",
  subtitle:
    "Ekonomi, drift, analys och automation i ett säkert molnbaserat ERP med en gemensam informationskälla.",
  items: { "0": "Molnbaserad plattform", "1": "Globala integrationer", "2": "Snabbare processer" },
};
sv.erp.service = {
  badge: "Byggd för moderna företag",
  title: "Allt ert företag behöver på ett ställe",
  subtitle:
    "Från ekonomi och supply chain till analys och automation – ett enhetligt ERP för ert team.",
  "0": {
    title: "Molnbaserat ERP",
    description:
      "Business Central i molnet med säker åtkomst, skalbarhet och samarbete i realtid.",
    linkText: "Till molnet",
    alt: "Molnbaserat ERP",
  },
  "1": {
    title: "Global drift",
    description: "Multi-valuta, språk och lokalisering för internationell verksamhet.",
    linkText: "Gå globalt",
    alt: "Global drift",
  },
  "2": {
    title: "Smart analys",
    description: "Dashboards och rapporter för snabbare, datadrivna beslut.",
    linkText: "Se insikter",
    alt: "Smart analys",
  },
  "3": {
    title: "Integration med Microsoft",
    description: "Koppla till Microsoft 365, Power BI och Teams.",
    linkText: "Utforska integrationer",
    alt: "Integration med Microsoft",
  },
  "4": {
    title: "Anpassade arbetsflöden",
    description: "Automatisera manuella moment och frigör tid för strategi.",
    linkText: "Automatisera",
    alt: "Anpassade arbetsflöden",
  },
};

sv.zoho.hero = {
  titleBefore: "Maximal ",
  titleHighlight: "produktivitet med minimal",
  titleAfter: " ansträngning",
  subtitle:
    "Zoho CRM ger fler leads, snabbare affärer och tydligare prestationsmätning – använt av över 200 000 företag.",
};
sv.zoho.facts = {
  title: "Säljexekvering för företag världen över",
  subtitle:
    "Koppla ihop hela säljflödet med analys så teamet kan fokusera på att stänga affärer.",
  items: { "0": "Företag världen över", "1": "Appintegrationer", "2": "Kraftfulla CRM-funktioner" },
};

sv.zoho.service = {
  badge: "Funktioner som gör sälj enklare",
  title: "Styr verksamheten med rik analys",
  subtitle:
    "Öka leads, accelerera försäljning och mät resultat i alla kanaler med Zoho CRM.",
  "0": {
    title: "Leadhantering",
    description:
      "Fånga leads, poängsättning och uppföljning med tydlig kontaktinformation.",
    linkText: "Utforska leads",
    alt: "Leadhantering",
  },
  "1": {
    title: "Arbetsflödesautomation",
    description: "Automatisera uppföljning och fältuppdateringar så teamet sparar tid.",
    linkText: "Automatisera",
    alt: "Arbetsflödesautomation",
  },
  "2": {
    title: "Säljprocessbyggare",
    description: "Samma spelbok för varje rep i varje affärsstadium.",
    linkText: "Bygg processen",
    alt: "Säljprocessbyggare",
  },
  "3": {
    title: "Analys och prognoser",
    description: "Dashboards, trender, KPI:er och prognoser ni kan lita på.",
    linkText: "Se analys",
    alt: "Analys och prognoser",
  },
};

sv.marketing = {
  trustStrip: "Över 14 000 företag – stora som små – litar på oss i sin transformation",
  hero: {
    title: "Sluta gissa. Börja växa.",
    subtitle:
      "Från betalda annonser och SEO till sociala medier och konverteringsoptimering – vi bygger och driver marknadsstrategier som omvandlar trafik till intäkter.",
    emailPlaceholder: "Ange din e-post",
    getCall: "Boka samtal",
    reviewsNote: "Baserat på 200+ omdömen",
  },
  featuresSection: {
    title: "Tjänster i nästa nivå",
    subtitle:
      "Vi lyfter ert varumärke med riktad annonsering, datadriven SEO och innehåll som engagerar.",
  },
  features: {
    social: {
      title: "Annonsering i sociala medier",
      description: "Kampanjer på bland annat Facebook och Google för större räckvidd.",
      p0: "PPC / SEM",
      p1: "Displayannonsering",
      p2: "Facebook- och Google-annonsering",
    },
    seo: {
      title: "SEO-optimering",
      description: "Vi förbättrar synligheten med revisioner, strategi och hastighetsoptimering.",
      p0: "SEO-revisioner",
      p1: "SEO-strategi och coachning",
      p2: "Sidhastighetsoptimering",
    },
    analytics: {
      title: "Avancerad analys",
      description: "Beteende, mål och heatmaps som finslipar strategin.",
      p0: "Mål och KPI-upplägg",
      p1: "Användaranalys",
      p2: "Heatmap-analys",
    },
    funnel: {
      title: "Funneloptimering",
      description: "Revision av funnel och UX för högre konvertering.",
      p0: "UX-analys",
      p1: "Funnelrevision",
      p2: "CR-optimering",
    },
    paid: {
      title: "Betald annonsering",
      description: "A/B-test, retargeting och konverteringsoptimering.",
      p0: "A/B-test av annonser",
      p1: "CR-optimering",
      p2: "Retargeting",
    },
    content: {
      title: "Innehållsmarknadsföring",
      description: "Innehållsplan, produktion och community som bygger lojalitet.",
      p0: "Innehållsplan",
      p1: "Innehållsproduktion",
      p2: "Community-hantering",
    },
  },
  howworks: {
    title: "Kraftfullt och enkelt arbetssätt",
    subtitle:
      "Vi sätter tydliga mål, genomför strategin och levererar mätbara resultat tillsammans med er.",
  },
  faqIntro: "Allt ni behöver veta om tjänsten och fakturering.",
  accordion: {
    "23": {
      title: "Låt oss ta fram en plan",
      content:
        "Vi definierar mål och KPI:er och kopplar strategin till era affärsmål.",
    },
    "25": {
      title: "Lansera och genomför",
      content: "Vi sätter planen i verk och följer upp resultat kontinuerligt.",
    },
    "27": {
      title: "Väx och skala",
      content: "Vi optimerar utifrån data för hållbar tillväxt.",
    },
  },
  support: {
    title: "Fler frågor?",
    subtitle: "Hittar ni inte svaret? Chatta med vårt team.",
    cta: "Kontakta oss",
  },
};

// Deep-merge FAQ translations for shopify, customDevelopment, salesforce, erp, zoho, marketing - copy EN structure for faq keys with Swedish text
// For brevity use structuredClone and patch faq sections:

function translateFaqBlock(target, sourceEn, svStrings) {
  for (const k of Object.keys(sourceEn.faq)) {
    target.faq[k] = svStrings[k] || sourceEn.faq[k];
  }
}

// Instead manual assign sv.shopify.faq from en with Swedish - large
// Use JSON parse stringify trick: assign each service faq from prebuilt object

const shopifyFaqSv = {
  "1": {
    question: "Hur lång tid tar det att bygga en Shopify-butik?",
    answer:
      "De flesta butiker tar 1–4 veckor beroende på omfattning, antal sidor och funktioner. Enklare butiker kan gå live snabbare.",
  },
  "2": {
    question: "Erbjuder ni egen design eller färdiga teman?",
    answer:
      "Båda delar. Vi kan ta fram helt egen design eller anpassa premiumteman utifrån budget och tidplan.",
  },
  "3": {
    question: "Kan ni designa om vår befintliga Shopify-butik?",
    answer:
      "Ja. Vi förbättrar design, UX och konvertering utan att riskera befintlig data.",
  },
  "4": {
    question: "Blir butiken mobilanpassad?",
    answer: "Ja. Alla våra butiker är responsiva och optimerade för mobil, surfplatta och desktop.",
  },
  "5": {
    question: "Hjälper ni till med appar och integrationer?",
    answer:
      "Ja. Vi integrerar betalningar, frakt, prenumerationer, marknadsföringsverktyg och andra avancerade funktioner.",
  },
  "6": {
    question: "Kan ni migrera från annan plattform till Shopify?",
    answer:
      "Ja. Vi migrerar från bland annat WooCommerce, Magento och Wix med säker datahantering.",
  },
  "7": {
    question: "Optimerar ni hastighet och SEO?",
    answer:
      "Ja. Vi följer best practices för prestanda och grundläggande on-page SEO.",
  },
  "8": {
    question: "Får vi support efter lansering?",
    answer: "Ja. Vi erbjuder löpande support och underhåll för säkerhet och prestanda.",
  },
  "9": {
    question: "Vad kostar Shopify-utveckling?",
    answer: "Priset beror på omfattning och funktioner. Vi lämnar offert utifrån era krav.",
  },
  "10": {
    question: "Behöver vi teknisk kunskap för att sköta butiken?",
    answer:
      "Nej, Shopify är användarvänligt. Vi kan också utbilda er i produkter, ordrar och innehåll.",
  },
};

sv.shopify.faq = shopifyFaqSv;

// custom dev faq sv
sv.customDevelopment.faq = {
  "1": {
    question: "Vilka typer av skräddarsydd utveckling erbjuder ni?",
    answer:
      "Webbapplikationer, API:er, interna verktyg, portaler och skalbara backends anpassade efter er verksamhet.",
  },
  "2": {
    question: "Kan ni modernisera vårt legacy-system?",
    answer:
      "Ja. Vi granskar, omstrukturerar, migrerar kod och UX samtidigt som affärslogik bevaras.",
  },
  "3": {
    question: "Vilka tekniker använder ni?",
    answer:
      "Bland annat React, Next.js, Node.js och moln – valda utifrån prestanda, säkerhet och skalbarhet.",
  },
  "4": {
    question: "Hur uppskattar ni tid och kostnad?",
    answer:
      "Vi börjar med discovery, scope och milstolpar och ger en transparent uppskattning.",
  },
  "5": {
    question: "Erbjuder ni drift efter lansering?",
    answer: "Ja. Underhåll, övervakning, säkerhetsuppdateringar och nya funktioner.",
  },
};

// salesforce, erp, zoho, marketing faq - assign similarly (shorter)

sv.salesforce.faq = {
  "1": {
    question: "Vilka Salesforce-tjänster erbjuder ni?",
    answer:
      "Rådgivning, implementering, anpassning, automation, integrationer, datamigrering och adoption.",
  },
  "2": {
    question: "Kan Salesforce anpassas till vår säljprocess?",
    answer:
      "Ja. Objekt, fält, flöden, dashboards och automationer efter er process.",
  },
  "3": {
    question: "Hjälper ni med datamigrering?",
    answer: "Ja. Kartläggning, rensning, migrering och validering från legacy eller annan CRM.",
  },
  "4": {
    question: "Kan Salesforce integreras med våra verktyg?",
    answer: "Ja. ERP, marknadsföring, support och tredjepartsappar.",
  },
  "5": {
    question: "Utbildar ni efter go-live?",
    answer: "Ja. Rollbaserad utbildning, dokumentation och support.",
  },
};

sv.erp.faq = {
  "1": {
    question: "Vilka områden förbättrar ERP?",
    answer: "Ekonomi, lager, inköp, drift och rapportering i en gemensam bild.",
  },
  "2": {
    question: "Hur väljer ni rätt ERP-approach?",
    answer: "Vi analyserar processer, smärtpunkter och mål och föreslår en färdplan.",
  },
  "3": {
    question: "Kan ERP integreras med befintlig stack?",
    answer: "Ja. CRM, e-handel, bokföring och drift – mindre manuellt arbete.",
  },
  "4": {
    question: "Hur lång tid tar implementation?",
    answer: "Beror på moduler och data. Vi levererar i faser för lägre risk.",
  },
  "5": {
    question: "Stöttar ni efter go-live?",
    answer: "Ja. Optimering av flöden och rapporter när verksamheten utvecklas.",
  },
};

sv.zoho.faq = {
  "1": {
    question: "Vad kan Zoho CRM göra för oss?",
    answer: "Hantera leads, automation, affärer och pipeline för snabbare sälj.",
  },
  "2": {
    question: "Kan Zoho anpassas till vårt arbetssätt?",
    answer: "Ja. Moduler, fält, automationer, blueprints och dashboards.",
  },
  "3": {
    question: "Erbjuder ni migrering till Zoho?",
    answer: "Ja. Från kalkylblad eller annan CRM med mappning och validering.",
  },
  "4": {
    question: "Integreras Zoho med e-post och appar?",
    answer: "Ja. E-post, telefoni, marknadsföring och tredjepartsappar.",
  },
  "5": {
    question: "Får teamet onboarding och utbildning?",
    answer: "Ja. Introduktion, rollbaserad utbildning och support.",
  },
};

sv.marketing.faq = {
  "1": {
    question: "Vilka marknadsföringstjänster erbjuder Alvatech?",
    answer:
      "Performance marketing, betalda annonser, SEO, social strategi, innehåll och funneloptimering.",
  },
  "2": {
    question: "Hur snabbt ser vi resultat?",
    answer: "Betalt ger ofta signaler inom veckor; SEO och organisk tillväxt tar månader.",
  },
  "3": {
    question: "Hanterar ni Meta och Google?",
    answer: "Ja. Planering, lansering och optimering med målgrupper, kreativitet och spårning.",
  },
  "4": {
    question: "Hur följer ni upp kampanjer?",
    answer: "KPI:er som CPL, CAC, ROAS och konvertering med regelbunden rapportering.",
  },
  "5": {
    question: "Kan ni koppla marknadsföring till sälj?",
    answer: "Ja. Vi synkar med er funnel och CRM för bättre nurturing.",
  },
};

writeFileSync(join(root, "locales/sv/servicePages.json"), JSON.stringify(sv, null, 2), "utf8");
console.log("Wrote locales/en/servicePages.json and locales/sv/servicePages.json");
