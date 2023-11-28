import { useRef } from "react";

export default function SimpleInput({
  label,
  value,
  onChange,
  required,
  errorMessage,
  disabled
}) {
  const renderRef = useRef(0);
  renderRef.current++;
  return (
    <div
      style={{
        padding: "0.5rem",
        backgroundColor: "rgba(0,0,0,0.075)",
        borderRadius: "0.5rem"
      }}
    >
      <label htmlFor={label}>
        {label}
        {required && <span style={{ color: "red" }}>*</span>}:{" "}
      </label>
      <input
        name={label}
        id={label}
        type="text"
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      {errorMessage && (
        <code style={{ display: "block", color: "red" }}>{errorMessage}</code>
      )}
      <code style={{ display: "block" }}>
        "{label}" rendered {renderRef.current}×
      </code>
    </div>
  );
}
