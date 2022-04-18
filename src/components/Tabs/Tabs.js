import * as React from "react";

import { styled } from "@mui/material/styles";
import { default as MuiTabs } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import TabPanel from "../TabPanel/TabPanel";

const StyledTab = styled(props => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    // fontWeight: theme.typography.fontWeightRegular,
    // fontSize: theme.typography.pxToRem(15),
    // marginRight: theme.spacing(1),
    // color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "primary.main"
    },
    "&.Mui-focusVisible": {
      color: "#163E46"
    }
  })
);

export default function Tabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100vw"
      }}
    >
      <MuiTabs
        onChange={handleChange}
        variant="scrollable"
        value={value}
        aria-label="Tabs where selection follows focus"
        sx={{
          "& .Mui-focusVisible": {
            border: theme => `1px solid ${theme.palette.primary.main}`
          },
          borderBottom: "1px solid #e8e8e8"
        }}
        selectionFollowsFocus
      >
        <StyledTab label="Oakland" />
        <StyledTab label="Atlanta" />
        <StyledTab label="Brooklyn" />
        <StyledTab label="Vancouver" />
        <StyledTab label="Santa Monica" />
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
        <Typography>
          <Link href="https://www.lipsum.com/">Lorem Ipsum</Link> is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. <Link href="https://lifeskillssoftware.tech/">Here's</Link>{" "}
          another link.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>
          Just repeating this message for tab 3.{" "}
          <Link href="https://www.lipsum.com/">Lorem Ipsum</Link> is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.{" "}
          <Link href="https://lifeskillssoftware.tech/">Here's</Link> another
          link.
        </Typography>
      </TabPanel>
    </Box>
  );
}
