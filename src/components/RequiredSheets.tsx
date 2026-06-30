import { useTranslation } from "react-i18next";
import type { SheetKind } from "../data/workbook";

type RequiredSheetsProps = {
  sheets: SheetKind[];
};

export function RequiredSheets({ sheets }: RequiredSheetsProps) {
  const { t } = useTranslation();

  return (
    <div className="required-sheets">
      {sheets.map((sheet) => (
        <span key={sheet}>{t(`course.sheets.${sheet}`)}</span>
      ))}
    </div>
  );
}
