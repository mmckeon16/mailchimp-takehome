import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

export default function TabPanel(props) {
  const { children, value, index, label, ...other } = props;

  const hiddenBool = !label || value === undefined || value !== index;

  return (
    <div
      role="tabpanel"
      hidden={hiddenBool}
      id={`tabpanel-${label}`}
      aria-labelledby={label}
      {...other}
    >
      {!hiddenBool && (
        <Box sx={{ p: 3 }}>
          <Fade
            easing={{ enter: "cubic-bezier(0,-1.55,.61,1.58)", exit: "linear" }}
            in={!hiddenBool}
          >
            {children}
          </Fade>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};
