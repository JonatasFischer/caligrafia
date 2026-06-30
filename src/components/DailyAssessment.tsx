import { useTranslation } from "react-i18next";
import type { DailyAssessmentPlan } from "../data/workbook";

type DailyAssessmentProps = {
  assessment: DailyAssessmentPlan;
};

export function DailyAssessment({ assessment }: DailyAssessmentProps) {
  const { t } = useTranslation();

  return (
    <div className="assessment-block">
      <table className="rating-table">
        <thead>
          <tr>
            <th>{t("course.assessmentCriterion")}</th>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>{t("common.observation")}</th>
          </tr>
        </thead>
        <tbody>
          {assessment.criteria.map((criterion) => (
            <tr key={criterion}>
              <td>{t(`rating.${criterion}`)}</td>
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          ))}
        </tbody>
      </table>
      <div className="adult-read-row">
        <strong>{t("course.adultRead")}</strong>
        {assessment.adultReadOptions.map((option) => (
          <span key={option}>□ {t(`course.adultReadOptions.${option}`)}</span>
        ))}
      </div>
    </div>
  );
}
