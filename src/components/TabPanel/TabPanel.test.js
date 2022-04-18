import { render, screen } from "@testing-library/react";
import TabPanel from "./TabPanel";

test("renders TabPanel test child text", () => {
  render(
    <TabPanel value={1} index={1}>
      test123
    </TabPanel>
  );
  const tabPanelElement = screen.queryByText(/test123/);

  expect(tabPanelElement).toBeInTheDocument();
});

test("renders hidden TabPanel with no value prop", () => {
  render(<TabPanel index={1}>test123</TabPanel>);
  const tabPanelElement = screen.queryByText(/test123/);

  expect(tabPanelElement).toBeNull();
});

test("renders hidden TabPanel with no index prop", () => {
  render(<TabPanel value={1}>test123</TabPanel>);
  const tabPanelElement = screen.queryByText(/test123/);

  expect(tabPanelElement).toBeNull();
});
