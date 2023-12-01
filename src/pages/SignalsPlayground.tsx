import Playground from "../modules/playground";

export default function SignalsPlayground({
  // Easily use values in prop, making components testable.
  isLoading = Playground.isLoading,
  value = Playground.value,
  increment = Playground.increment,
  decrement = Playground.decrement,
  random = Playground.random,
  cards = Playground.cards,
  addCard = Playground.addCard,
}) {
  return (
    <main>
      <h1>Basic signals demo</h1>
      <p>This page plays with using signals in a class</p>
      <hr />
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
    </main>
  );
}
