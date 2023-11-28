import { useRef } from "react";

export default function JsonDisplay({ label, data }) {
  const renderRef = useRef(0);
  renderRef.current++;
  return (
    <pre
      style={{
        padding: "0.5rem",
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: "0.25rem",
        textAlign: "justify"
      }}
    >
      <code>
        {label && `${label}:`}
        {JSON.stringify(data, null, 2)}
      </code>
      <p>
        <code>JsonDisplay rendered {renderRef.current}×</code>
      </p>
    </pre>
  );
}
