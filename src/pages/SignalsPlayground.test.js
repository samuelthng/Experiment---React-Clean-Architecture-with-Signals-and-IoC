import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SignalsPlayground from "./SignalsPlayground";

// Components also easier to test due to decoupling.
describe("SignalsPlayground", () => {
  it("should show loading", () => {
    const { getByText } = render(<SignalsPlayground isLoading={true} />);
    expect(getByText("Loading")).toBeInTheDocument();
  });

  it("should show value", () => {
    const { getByText } = render(<SignalsPlayground value={12345} />);
    expect(getByText("12345")).toBeInTheDocument();
  });

  it("should trigger increment", () => {
    const increment = jest.fn();
    const { getByTestId } = render(<SignalsPlayground increment={increment} />);
    getByTestId("increment").click();
    expect(increment).toHaveBeenCalled();
  });
});
