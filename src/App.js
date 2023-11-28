import { useRef } from "react";
import Playground from "./modules/Playground";
import formManager from "./modules/form";
import "./styles.css";
import FormComponent from "./components/FormComponent";
import JsonDisplay from "./components/JsonDisplay";

// Load modules -
// Each module registers themselves into the form manager.
// Registration can use more complex patterns if required.
import "./modules/location";
import "./modules/schedule";

export default function App({
  // Easily use values in prop, making components testable.
  isLoading = Playground.isLoading,
  value = Playground.value,
  increment = Playground.increment,
  decrement = Playground.decrement,
  random = Playground.random,
  cards = Playground.cards,
  addCard = Playground.addCard,
}) {
  const renderRef = useRef(0);
  renderRef.current++;

  return (
    <div className="App">
      <VerboseComments />
      <hr />
      Root has rendered {renderRef.current} times.
      <hr />
      <h2>Form Example</h2>
      <FormComponent modules={formManager.modules.value} />
      <br />
      <p>Check out this dynamic payload.</p>
      <JsonDisplay label="payloads" data={formManager.payloads} />
      <hr />
      <h2>Basic signals demo</h2>
      <p>{value}</p>
      <div>
        <button disabled={isLoading} onClick={decrement}>
          -
        </button>
        <button disabled={isLoading} onClick={random}>
          {isLoading ? "Loading" : "Fake Fetch Random Number!"}
        </button>
        <button
          disabled={isLoading}
          onClick={increment}
          data-testid="increment"
        >
          +
        </button>
      </div>
      <br />
      <hr />
      <h2>Array in signals</h2>
      <button onClick={addCard}>Get New Number</button>
      <ul>
        {cards.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    </div>
  );
}

function VerboseComments() {
  return (
    <>
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
    </>
  );
}
