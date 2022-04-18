import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2D6A78"
    },
    secondary: {
      main: green[500]
    }
  }
});
// 45, 106, 120
export default theme;
