import { createTheme, type PaletteMode } from "@mui/material/styles";
import { colors, darkColors, fonts } from "./tokens";

export const createAppTheme = (mode: PaletteMode) => {
  const palette = mode === "dark" ? darkColors : colors;

  return createTheme({
    palette: {
      mode,
      primary: { main: palette.accent },
      background: { default: palette.canvas, paper: palette.paper },
      text: { primary: palette.ink, secondary: palette.inkMuted },
      divider: palette.borderStrong,
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
            color: palette.ink,
            backgroundColor: palette.canvas,
            colorScheme: mode,
            fontSynthesis: "none",
            "--tank-ink": colors.tank.ink,
            "--tank-party": colors.tank.party,
            "--tank-party-shadow": colors.tank.partyShadow,
            "--tank-food-shadow": colors.tank.foodShadow,
            "--tank-control-background": colors.tank.controlBackground,
            "--tank-control-border": colors.tank.controlBorder,
            "--tank-control-hover": colors.tank.controlHover,
            "--tank-light": colors.tank.light,
            "--tank-ripple": colors.tank.ripple,
          },
          html: { scrollBehavior: "smooth" },
          body: { margin: 0 },
          "*": { boxSizing: "border-box" },
          "::selection": {
            backgroundColor: palette.accentSoft,
            color: palette.ink,
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
      },
    },
  });
};
