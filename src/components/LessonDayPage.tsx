import { useTranslation } from "react-i18next";
import type { DayPlan, WeekPlan } from "../data/workbook";
import { ActivitySequence } from "./ActivitySequence";
import { CaligraphyGuide } from "./CaligraphyGuide";
import { DailyAssessment } from "./DailyAssessment";
import { RequiredSheets } from "./RequiredSheets";

type LessonDayPageProps = {
  week: WeekPlan;
  day: DayPlan;
};

export function LessonDayPage({ week, day }: LessonDayPageProps) {
  const { t } = useTranslation();

  return (
    <div className="lesson-day">
      <div className="day-summary-grid">
        <div className="info-card soft">
          <p className="day-code">{day.code}</p>
          <p>
            <strong>{t("course.week", { number: week.number })}</strong> ·{" "}
            {t(`weeks.${week.id}.title`)}
          </p>
          <p>
            <strong>{t("course.focus")}:</strong>{" "}
            <span className="model-text compact-text">{day.model}</span>
          </p>
        </div>
        <div className="info-card">
          <h3>{t("course.requiredSheets")}</h3>
          <RequiredSheets sheets={day.requiredSheets} />
        </div>
      </div>

      <h3>{t("course.activitySequence")}</h3>
      <ActivitySequence activities={day.activities} />

      <h3>{t("sections.modelAndRepetition")}</h3>
      <CaligraphyGuide trace={day.model} rows={3} />

      <h3>{t("sections.dailyWords")}</h3>
      <CaligraphyGuide trace={day.words.join("   ")} rows={3} compact />

      <h3>{t("sections.dailySentence")}</h3>
      <p className="model-text">{day.sentence}</p>
      <CaligraphyGuide rows={2} compact />

      <h3>{t("course.dailyAssessment")}</h3>
      <DailyAssessment assessment={day.assessment} />
    </div>
  );
}
