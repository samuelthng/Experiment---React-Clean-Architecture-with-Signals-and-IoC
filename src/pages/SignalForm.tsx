import form from "../modules/signalsPrimitiveTest/form";
import JsonDisplay from "../components/JsonDisplay";
import FormComponent from "../components/FormComponent";
import useRenderCount from "../hooks/useRenderCount";

// Modules made before DI setup. soo it's ugly. I know.
import "../modules/signalsPrimitiveTest/location";
import "../modules/signalsPrimitiveTest/schedule";

export default function SignalForm() {
  const renderCount = useRenderCount();
  return (
    <main>
      <h1>Signals + With Classes for Form Context</h1>
      <VerboseComments />
      <hr />
      Root has rendered {renderCount} times.
      <hr />
      <h2>Form Example</h2>
      <FormComponent modules={form.modules.value} />
      <br />
      <p>Check out this dynamic payload.</p>
      <JsonDisplay label="payloads" data={form.payloads} />
    </main>
  );
}

function VerboseComments() {
  return (
    <details>
      <summary>Comments about signals</summary>
      <p>
        The entire point of this playground is to test out how signals can be
        used to completely decouple react and business logic.
      </p>
      <p>
        This is an attempt at implementing something similar to an MVC pattern,
        rather than patterns used in React today that couples state with React
        rendering lifecycle.
      </p>
      <p>
        Form logic is housed in <code>modules/form</code>
        <br />
        Basically decoupled from React.
        <br />
        Only needs to be triggered upon entry.
      </p>
      <p>
        Check out how little variation is required on FormComponent. All the
        logic happens in the modules, and are easily testable.
        <br />
        Also, check out how optimised it is.
      </p>
    </details>
  );
}
