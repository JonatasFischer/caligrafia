import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./locales/de.json";
import en from "./locales/en.json";
import pt from "./locales/pt.json";

export const supportedLanguages = ["pt", "en", "de"] as const;
export type Language = (typeof supportedLanguages)[number];

export const languageOptions: Array<{ code: Language; name: string }> = [
  { code: "pt", name: "Português" },
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
];

function isSupportedLanguage(value: string | null): value is Language {
  return !!value && supportedLanguages.includes(value as Language);
}

function getBrowserLanguage(): Language {
  const navigatorLocale = navigator.languages?.[0] || navigator.language;
  const language = navigatorLocale?.trim().split(/-|_/)[0] || "en";
  return isSupportedLanguage(language) ? language : "en";
}

export function getInitialLanguage(): Language {
  const saved = localStorage.getItem("user_language");
  return isSupportedLanguage(saved) ? saved : getBrowserLanguage();
}

i18n.use(initReactI18next).init({
  lng: getInitialLanguage(),
  fallbackLng: "en",
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    de: { translation: de },
  },
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

export async function setLanguage(language: Language) {
  await i18n.changeLanguage(language);
  localStorage.setItem("user_language", language);
  document.documentElement.lang = language === "pt" ? "pt-BR" : language;
}

export default i18n;
