import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";

// Components also easier to test due to decoupling.
describe("App", () => {
  it("should show loading", () => {
    const { getByText } = render(<App isLoading={true} />);
    expect(getByText("Loading")).toBeInTheDocument();
  });

  it("should show value", () => {
    const { getByText } = render(<App value={12345} />);
    expect(getByText("12345")).toBeInTheDocument();
  });

  it("should trigger increment", () => {
    const increment = jest.fn();
    const { getByTestId } = render(<App increment={increment} />);
    getByTestId("increment").click();
    expect(increment).toHaveBeenCalled();
  });
});
