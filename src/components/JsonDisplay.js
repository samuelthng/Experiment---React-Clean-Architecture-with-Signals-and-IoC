import useRenderCount from "../hooks/useRenderCount";

export default function JsonDisplay({ label, data }) {
  const renderCount = useRenderCount();
  return (
    <pre
      style={{
        padding: "0.5rem",
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: "0.25rem",
        textAlign: "justify",
      }}
    >
      <code>
        {label && `${label}:`}
        {JSON.stringify(data, null, 2)}
      </code>
      <p>
        <code>JsonDisplay rendered {renderCount}×</code>
      </p>
    </pre>
  );
}
