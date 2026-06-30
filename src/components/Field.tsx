type FieldProps = {
  label: string;
};

export function Field({ label }: FieldProps) {
  return (
    <div className="field-block">
      <strong>{label}</strong>
      <div className="blank-field" />
    </div>
  );
}
