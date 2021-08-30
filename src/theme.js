import { createTheme } from "@material-ui/core/styles";
import { green, lime } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: "#6fbf73",
      main: "#4caf50",
      dark: "#357a38",
      contrastText: "#000",
    },
    secondary: {
      light: "#4aedc4",
      main: "#1de9b6",
      dark: "#14a37f",
      contrastText: "#000",
    },
    openTitle: green["400"],
    protectedTitle: lime["400"],
    type: "light",
  },
});

export default theme;
