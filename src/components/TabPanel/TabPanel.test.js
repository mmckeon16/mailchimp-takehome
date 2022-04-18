import { render, screen } from "@testing-library/react";
import TabPanel from "./TabPanel";

describe("TabPanel tests", () => {
  test("renders TabPanel test child text", () => {
    render(
      <TabPanel value={1} index={1} label="testLabel">
        test123
      </TabPanel>
    );
    const tabPanelElement = screen.queryByText(/test123/);

    expect(tabPanelElement).toBeInTheDocument();
  });

  test("renders no TabPanel with no value prop", () => {
    render(
      <TabPanel index={1} label="testLabel">
        test123
      </TabPanel>
    );
    const tabPanelElement = screen.queryByText(/test123/);

    expect(tabPanelElement).toBeNull();
  });

  test("renders TabPanel with value prop of 0", () => {
    render(
      <TabPanel value={0} index={0} label="testLabel">
        test123
      </TabPanel>
    );
    const tabPanelElement = screen.queryByText(/test123/);

    expect(tabPanelElement).toBeInTheDocument();
  });

  test("renders no TabPanel with no index prop", () => {
    render(
      <TabPanel value={1} label="testLabel">
        test123
      </TabPanel>
    );
    const tabPanelElement = screen.queryByText(/test123/);

    expect(tabPanelElement).toBeNull();
  });

  test("renders no TabPanel with no index or value prop", () => {
    render(<TabPanel>test123</TabPanel>);
    const tabPanelElement = screen.queryByText(/test123/);

    expect(tabPanelElement).toBeNull();
  });

  test("renders no TabPanel with no label prop", () => {
    render(
      <TabPanel value={1} index={1}>
        test123
      </TabPanel>
    );
    const tabPanelElement = screen.queryByText(/test123/);

    expect(tabPanelElement).toBeNull();
  });
});
