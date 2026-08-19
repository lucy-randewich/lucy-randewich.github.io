import { Typography } from "@mui/material";

interface SectionHeadingProps {
  children: React.ReactNode;
  marginBottom?: { xs: number; md: number };
}

export const SectionHeading = ({
  children,
  marginBottom,
}: SectionHeadingProps) => (
  <Typography
    component="h2"
    sx={{
      fontSize: { xs: "2.8rem", md: "4rem" },
      lineHeight: 1,
      letterSpacing: "-.05em",
      m: 0,
      mb: marginBottom,
    }}
  >
    {children}
  </Typography>
);
