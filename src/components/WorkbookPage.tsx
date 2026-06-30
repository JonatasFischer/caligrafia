import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type WorkbookPageProps = {
  kicker?: string;
  title: string;
  note?: string;
  pageNumber: number;
  children: ReactNode;
};

export function WorkbookPage({
  kicker,
  title,
  note,
  pageNumber,
  children,
}: WorkbookPageProps) {
  const { t } = useTranslation();

  return (
    <section className="print-page">
      <div className="page-head">
        {kicker ? <p className="eyebrow">{kicker}</p> : null}
        <h2>{title}</h2>
      </div>
      <div className="page-body">{children}</div>
      <footer className="page-footer">
        <span>{note}</span>
        <span>
          {t("common.page")} {pageNumber}
        </span>
      </footer>
    </section>
  );
}
