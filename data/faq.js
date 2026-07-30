export const accordionItems = [
  {
    id: 1,
    question: "Do I need to know about how to code?",
    answer:
      "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Alvatech.",
    controls: "uc-accordion-24",
    expanded: true,
  },
  {
    id: 2,
    question: "Can I use it for commercial projects?",
    answer:
      "Feel free to do so. Alvatech does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word).",
    controls: "uc-accordion-26",
    expanded: false,
  },
  {
    id: 3,
    question: "Can I use it for multiple projects?",
    answer: "Definitely! Please use it however you like; we don’t limit it.",
    controls: "uc-accordion-28",
    expanded: false,
  },
  {
    id: 4,
    question: "Can I use this to create and sell a product?",
    answer: "Do not ever consider doing it.",
    controls: "uc-accordion-30",
    expanded: false,
  },
  {
    id: 5,
    question: "What is your refund policy?",
    answer:
      "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
    controls: "uc-accordion-32",
    expanded: false,
  },
];
function serviceFaqKeys(base, count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    questionKey: `${base}.${i + 1}.question`,
    answerKey: `${base}.${i + 1}.answer`,
  }));
}

export const shopifyFaq = serviceFaqKeys("servicePages.shopify.faq", 10);

export const customDevelopmentFaq = serviceFaqKeys("servicePages.customDevelopment.faq", 5);
export const marketingFaq = serviceFaqKeys("servicePages.marketing.faq", 5);
export const salesforceCrmFaq = serviceFaqKeys("servicePages.salesforce.faq", 5);
export const erpSolutionsFaq = serviceFaqKeys("servicePages.erp.faq", 5);
export const zohoCrmFaq = serviceFaqKeys("servicePages.zoho.faq", 5);
export const home13Faq = serviceFaqKeys("home13.faq.items", 13);
export const aboutFaq = serviceFaqKeys("pages.about.faq.items", 8);

export const integrationsFaq = [
  { id: 1, questionKey: "pages.integrations.faq.1.question", answerKey: "pages.integrations.faq.1.answer" },
  { id: 2, questionKey: "pages.integrations.faq.2.question", answerKey: "pages.integrations.faq.2.answer" },
  { id: 3, questionKey: "pages.integrations.faq.3.question", answerKey: "pages.integrations.faq.3.answer" },
  { id: 4, questionKey: "pages.integrations.faq.4.question", answerKey: "pages.integrations.faq.4.answer" },
  { id: 5, questionKey: "pages.integrations.faq.5.question", answerKey: "pages.integrations.faq.5.answer" },
];

export const accordionItems2 = [
  {
    id: 23,
    titleKey: "servicePages.marketing.accordion.23.title",
    contentKey: "servicePages.marketing.accordion.23.content",
    icon: "/assets/images/common/icons/zap.svg",
    isOpen: false,
  },
  {
    id: 25,
    titleKey: "servicePages.marketing.accordion.25.title",
    contentKey: "servicePages.marketing.accordion.25.content",
    icon: "/assets/images/common/icons/target.svg",
    isOpen: false,
  },
  {
    id: 27,
    titleKey: "servicePages.marketing.accordion.27.title",
    contentKey: "servicePages.marketing.accordion.27.content",
    icon: "/assets/images/common/icons/settings.svg",
    isOpen: true,
  },
];
