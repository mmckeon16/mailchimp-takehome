import * as React from "react";

import { default as MuiTabs } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import TabPanel from "../TabPanel/TabPanel";

export default function Tabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <MuiTabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </MuiTabs>
      {/* TODO make below into component */}
      <TabPanel value={value} index={0}>
        <Typography>
          Cats meow for their humans, not other cats. Heres{" "}
          <Link href="https://www.youtube.com/channel/UCheL-cUqfzUB8dfM_rFOfDQ">
            some info
          </Link>{" "}
          about Jackson Galaxy to confirm.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Item Two</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Item Three</Typography>
      </TabPanel>
    </Box>
  );
}
