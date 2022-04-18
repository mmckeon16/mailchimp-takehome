import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Oakland Tab", () => {
  render(<App />);
  const tabElement = screen.getByText(/Oakland/);
  expect(tabElement).toBeInTheDocument();
});
