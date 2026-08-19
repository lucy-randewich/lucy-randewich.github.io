import { Typography } from "@mui/material";

export const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      color: "primary.main",
      fontSize: ".75rem",
      letterSpacing: ".16em",
      fontWeight: 700,
      textTransform: "uppercase",
      mb: 1.5,
    }}
  >
    {children}
  </Typography>
);
