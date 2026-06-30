import { useTranslation } from "react-i18next";
import { languageOptions, setLanguage, type Language } from "../i18n";

export function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "pt").split(
    "-",
  )[0] as Language;

  return (
    <label className="language-selector">
      <span>{t("app.language")}</span>
      <select
        value={current}
        onChange={(event) => setLanguage(event.target.value as Language)}
      >
        {languageOptions.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </label>
  );
}
