export const colors = {
  ink: "#171716",
  inkMuted: "#605e59",
  canvas: "#f7f5f1",
  paper: "#ffffff",
  surfaceMuted: "#eeece7",
  accent: "#a3474e",
  accentSoft: "#e7a7a9",
  border: "#dedbd5",
  borderStrong: "#d7d4ce",
  footerBorder: "#43413d",
  footerMuted: "#a7a49e",
  tank: {
    water: "#87d7dd",
    ink: "#164a50",
    score: "#24585b",
    hint: "#317b78",
    party: "#fff5bd",
    partyShadow: "#9c3e45",
    foodShadow: "#533517",
    controlBackground: "rgb(231 255 250 / 72%)",
    controlBorder: "rgb(22 74 80 / 24%)",
    controlHover: "rgb(255 255 255 / 94%)",
    light: "rgb(255 255 255 / 12%)",
    ripple: "rgb(231 255 250 / 82%)",
  },
} as const;

export const darkColors = {
  ink: "#f1eee8",
  inkMuted: "#b8b3aa",
  canvas: "#161513",
  paper: "#211f1c",
  surfaceMuted: "#1c1a18",
  accent: "#d98289",
  accentSoft: "#e7a7a9",
  border: "#393632",
  borderStrong: "#48433e",
} as const;

export const fonts = {
  body: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  display: 'Georgia, "Times New Roman", serif',
} as const;

export const layout = {
  contentWidth: 1200,
  headerHeight: 64,
} as const;

export const shadows = {
  card: "0 14px 30px rgb(23 23 22 / 8%)",
  dialog: "0 22px 70px rgb(20 53 58 / 28%)",
} as const;
