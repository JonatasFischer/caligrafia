import { useTranslation } from "react-i18next";
import type { PracticeGroup } from "../data/workbook";
import { CaligraphyGuide } from "./CaligraphyGuide";
import { RatingTable } from "./RatingTable";

type PracticeBlockProps = {
  group: PracticeGroup;
};

export function PracticeBlock({ group }: PracticeBlockProps) {
  const { t } = useTranslation();

  return (
    <div className="practice-block">
      <div className="letter-model">{group.models}</div>
      <h3>{t("sections.guidedPractice")}</h3>
      <CaligraphyGuide trace={group.models} rows={3} />
      <h3>{t("common.words")}</h3>
      <p className="model-text">{group.words.join("   ")}</p>
      <CaligraphyGuide
        trace={group.words.slice(0, 4).join("   ")}
        rows={3}
        compact
      />
      <h3>{t("common.sentences")}</h3>
      {group.sentences.map((sentence) => (
        <div key={sentence} className="sentence-practice">
          <p className="model-text">{sentence}</p>
          <CaligraphyGuide rows={1} compact />
        </div>
      ))}
      <RatingTable
        criteria={["form", "line", "size", "spacing", "pressure", "review"]}
      />
    </div>
  );
}
