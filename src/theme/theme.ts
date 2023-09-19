import { createTheme } from "@mui/material";
import { colors } from "./colors";

export const theme = createTheme({
  palette: {
    background: { default: colors.background, paper: "#151515" },
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    text: { primary: colors.textColor, secondary: "grey" },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
