import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./components/LanguageSelector";
import { Workbook } from "./components/Workbook";

export function App() {
  const { t } = useTranslation();

  return (
    <div className="app-shell">
      <header className="site-header screen-only">
        <div>
          <p className="eyebrow">{t("sections.coverKicker")}</p>
          <h1>{t("app.title")}</h1>
          <p className="site-subtitle">{t("app.subtitle")}</p>
          <p className="site-hint">{t("app.screenHint")}</p>
        </div>
        <div className="header-actions">
          <LanguageSelector />
          <button
            className="print-button"
            type="button"
            onClick={() => window.print()}
          >
            {t("app.print")}
          </button>
        </div>
      </header>
      <Workbook />
    </div>
  );
}
