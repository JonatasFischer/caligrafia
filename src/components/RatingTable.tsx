import { useTranslation } from "react-i18next";

type RatingTableProps = {
  criteria: string[];
};

export function RatingTable({ criteria }: RatingTableProps) {
  const { t } = useTranslation();

  return (
    <table className="rating-table">
      <thead>
        <tr>
          <th>{t("common.goal")}</th>
          <th>0</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>{t("common.observation")}</th>
        </tr>
      </thead>
      <tbody>
        {criteria.map((criterion) => (
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
  );
}
