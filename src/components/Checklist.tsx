type ChecklistProps = {
  title?: string;
  items: string[];
};

export function Checklist({ title, items }: ChecklistProps) {
  return (
    <div className="checklist-block">
      {title ? <h3>{title}</h3> : null}
      <table className="checklist-table">
        <tbody>
          {items.map((item) => (
            <tr key={item}>
              <td className="checkbox-cell">□</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
