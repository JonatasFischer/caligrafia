import { useTranslation } from "react-i18next";
import type { ActivityPlan } from "../data/workbook";

type ActivitySequenceProps = {
  activities: ActivityPlan[];
};

export function ActivitySequence({ activities }: ActivitySequenceProps) {
  const { t } = useTranslation();

  return (
    <ol className="activity-sequence">
      {activities.map((activity, index) => (
        <li key={`${activity.kind}-${index}`}>
          <span className="activity-step">{index + 1}</span>
          <div>
            <strong>{t(`course.activities.${activity.kind}`)}</strong>
            <p>
              {activity.minutes} min · {t(`course.sheets.${activity.sheet}`)}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
