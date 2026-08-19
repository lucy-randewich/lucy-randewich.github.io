import { createTheme } from "@mui/material/styles";
import { colors, fonts } from "./tokens";

export const theme = createTheme({
  palette: {
    primary: { main: colors.accent },
    background: { default: colors.canvas, paper: colors.paper },
    text: { primary: colors.ink, secondary: colors.inkMuted },
  },
  typography: {
    fontFamily: fonts.body,
    h1: { fontFamily: fonts.display, fontWeight: 400 },
    h2: { fontFamily: fonts.display, fontWeight: 400 },
    h3: { fontFamily: fonts.display, fontWeight: 400 },
    button: { textTransform: "none" },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          color: colors.ink,
          backgroundColor: colors.canvas,
          fontSynthesis: "none",
          "--tank-ink": colors.tank.ink,
          "--tank-party": colors.tank.party,
          "--tank-party-shadow": colors.tank.partyShadow,
          "--tank-food-shadow": colors.tank.foodShadow,
          "--tank-control-background": colors.tank.controlBackground,
          "--tank-control-border": colors.tank.controlBorder,
          "--tank-control-hover": colors.tank.controlHover,
        },
        html: { scrollBehavior: "smooth" },
        body: { margin: 0 },
        "*": { boxSizing: "border-box" },
        "::selection": {
          backgroundColor: colors.accentSoft,
          color: colors.ink,
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
  },
});
