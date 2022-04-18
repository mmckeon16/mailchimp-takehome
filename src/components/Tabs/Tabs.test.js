import { render, screen } from "@testing-library/react";
import Tabs from "./Tabs";

describe("Tabs tests", () => {
  test("renders all Tabs", () => {
    render(<Tabs />);
    const tabElement1 = screen.queryByText(/Oakland/);
    const tabElement2 = screen.queryByText(/Atlanta/);
    const tabElement3 = screen.queryByText(/Brooklyn/);
    const tabElement4 = screen.queryByText(/Vancouver/);
    const tabElement5 = screen.queryByText(/Santa Monica/);

    expect(tabElement1).toBeInTheDocument();
    expect(tabElement2).toBeInTheDocument();
    expect(tabElement3).toBeInTheDocument();
    expect(tabElement4).toBeInTheDocument();
    expect(tabElement5).toBeInTheDocument();
  });
});
