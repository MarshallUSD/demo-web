const translations = {
  uz: {
    pageTitle: "KindyCloud — Tez kunda",
    headline: "Tez kunda...",
    subtitle: "KindyCloud — tez orada ishga tushadi.",
    note: "Yangi raqamli platforma tayyorlanmoqda.",
    contact: "Bog‘lanish",
    email: "Email",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    footer: "© 2026 KindyCloud. Barcha huquqlar himoyalangan."
  },
  ru: {
    pageTitle: "KindyCloud — Скоро",
    headline: "Скоро...",
    subtitle: "KindyCloud — скоро будет запущен.",
    note: "Новая цифровая платформа находится в разработке.",
    contact: "Контакты",
    email: "Email",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    footer: "© 2026 KindyCloud. Все права защищены."
  },
  en: {
    pageTitle: "KindyCloud — Coming soon",
    headline: "Coming soon...",
    subtitle: "KindyCloud — launching soon.",
    note: "A new digital platform is currently in development.",
    contact: "Contact",
    email: "Email",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    footer: "© 2026 KindyCloud. All rights reserved."
  }
};

const elements = {
  html: document.documentElement,
  copyBlock: document.getElementById("copy-block"),
  headline: document.getElementById("headline"),
  subtitle: document.getElementById("subtitle"),
  note: document.getElementById("note"),
  contactTitle: document.getElementById("contact-title"),
  emailLabel: document.getElementById("email-label"),
  linkedinLabel: document.getElementById("linkedin-label"),
  telegramLabel: document.getElementById("telegram-label"),
  footerText: document.getElementById("footer-text"),
  buttons: Array.from(document.querySelectorAll(".language-button"))
};

let currentLanguage = "uz";
let switchTimeout;

function setActiveButton(language) {
  elements.buttons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyLanguage(language) {
  const content = translations[language];

  if (!content) {
    return;
  }

  document.title = content.pageTitle;
  elements.html.lang = language;
  elements.headline.textContent = content.headline;
  elements.subtitle.textContent = content.subtitle;
  elements.note.textContent = content.note;
  elements.contactTitle.textContent = content.contact;
  elements.emailLabel.textContent = content.email;
  elements.linkedinLabel.textContent = content.linkedin;
  elements.telegramLabel.textContent = content.telegram;
  elements.footerText.textContent = content.footer;
  setActiveButton(language);
  currentLanguage = language;
}

function switchLanguage(language) {
  if (language === currentLanguage || !translations[language]) {
    return;
  }

  window.clearTimeout(switchTimeout);
  elements.copyBlock.classList.add("is-switching");

  switchTimeout = window.setTimeout(() => {
    applyLanguage(language);
    elements.copyBlock.classList.remove("is-switching");
  }, 170);
}

elements.buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switchLanguage(button.dataset.lang);
  });
});

applyLanguage(currentLanguage);
