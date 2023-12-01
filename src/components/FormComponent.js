import form from "../modules/form";
import SimpleInput from "./SimpleInput";
import { computed } from "@preact/signals-react";
import useRenderCount from "../hooks/useRenderCount";

export default function FormComponent({ modules = form.modules.value }) {
  const renderCount = useRenderCount();
  return (
    <div
      style={{
        display: "grid",
        gap: "0.5rem",
        backgroundColor: "rgba(0,0,0,0.075)",
        padding: "0.5rem",
        borderRadius: "0.5rem",
      }}
    >
      {Object.entries(modules).map(([moduleName, module]) => (
        <div
          key={moduleName}
          style={{
            display: "grid",
            gap: "0.5rem",
            backgroundColor: "rgba(0,0,0,0.075)",
            padding: "0.5rem",
            borderRadius: "0.5rem",
          }}
        >
          <h3>Module: {moduleName}</h3>
          {Object.entries(module.fields).map(([fieldName, field]) => (
            <SimpleInput
              key={`${moduleName}.${fieldName}`}
              label={`${moduleName}.${fieldName}`}
              required={field.required}
              value={computed(() => field.value)} // Prevents array level rerendering.
              onChange={(value) => (field.value = value)}
              errorMessage={field.error?.message}
              disabled={field.disabled}
            />
          ))}
        </div>
      ))}
      <code>Form Module rendered {renderCount}×</code>
    </div>
  );
}
