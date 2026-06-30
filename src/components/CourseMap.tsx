import { useTranslation } from "react-i18next";
import type { WeekPlan } from "../data/workbook";

type CourseMapProps = {
  weeks: WeekPlan[];
};

export function CourseMap({ weeks }: CourseMapProps) {
  const { t } = useTranslation();

  return (
    <div className="course-map">
      {weeks.map((week) => (
        <section className="course-map-week" key={week.id}>
          <h3>
            {t("course.week", { number: week.number })}:{" "}
            {t(`weeks.${week.id}.title`)}
          </h3>
          <table className="compact-table">
            <thead>
              <tr>
                <th>{t("course.dayCode")}</th>
                <th>{t("course.focus")}</th>
                <th>{t("course.requiredSheets")}</th>
              </tr>
            </thead>
            <tbody>
              {week.days.map((day) => (
                <tr key={day.code}>
                  <td>
                    <strong>{day.code}</strong>
                  </td>
                  <td className="model-text compact-text">{day.model}</td>
                  <td>
                    {day.requiredSheets
                      .map((sheet) => t(`course.sheets.${sheet}`))
                      .join(" · ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}
