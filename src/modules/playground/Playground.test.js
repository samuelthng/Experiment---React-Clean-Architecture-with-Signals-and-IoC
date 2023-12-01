import Playground from "./Playground";

afterEach(Playground.reset);

// Can be tested easily.
describe("basic signal", () => {
  it("should start with value of 0", () => {
    expect(Playground.value).toBe(0);
  });

  it("should increment", () => {
    Playground.increment();
    expect(Playground.value).toBe(1);
  });

  it("should decrement", () => {
    Playground.decrement();
    expect(Playground.value).toBe(-1);
  });
});
