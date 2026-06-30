import { useTranslation } from "react-i18next";
import type { WeekPlan } from "../data/workbook";
import { Field } from "./Field";

type WeeklyReviewProps = {
  week: WeekPlan;
};

export function WeeklyReview({ week }: WeeklyReviewProps) {
  const { t } = useTranslation();

  return (
    <div className="weekly-review">
      <div className="info-card soft">
        <strong>{t("course.weeklyDecision")}</strong>
        <p>{t("course.weeklyDecisionHint")}</p>
      </div>
      <Field
        label={`${t("course.bestLine")} · ${t("course.week", { number: week.number })}`}
      />
      <Field label={t("course.hardLetters")} />
      <Field label={t("course.nextStep")} />
      <div className="decision-row">
        <span>□ {t("course.decisions.moveOn")}</span>
        <span>□ {t("course.decisions.repeat")}</span>
        <span>□ {t("course.decisions.slowDown")}</span>
      </div>
    </div>
  );
}
