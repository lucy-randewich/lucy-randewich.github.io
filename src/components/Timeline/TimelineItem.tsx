import { Box, Typography } from "@mui/material";
import { colors } from "../../theme";
import type { TimelineEntry } from "./timeline.types";

export const TimelineItem = ({ entry }: { entry: TimelineEntry }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "190px 1fr 1.3fr" },
      gap: { xs: 1, md: 4 },
      py: { xs: 3, md: 4.5 },
      borderBottom: `1px solid ${colors.borderStrong}`,
    }}
  >
    <Typography
      sx={{
        color: "primary.main",
        fontSize: ".78rem",
        fontWeight: 700,
        letterSpacing: ".04em",
      }}
    >
      {entry.period}
    </Typography>
    <Box>
      <Typography
        component="h3"
        sx={{
          fontFamily: "inherit",
          fontSize: { xs: "1.25rem", md: "1.35rem" },
          lineHeight: 1.2,
          m: 0,
          fontWeight: 700,
        }}
      >
        {entry.title}
      </Typography>
      <Typography sx={{ mt: 0.7, color: "text.secondary", fontSize: ".9rem" }}>
        {entry.organisation}
      </Typography>
    </Box>
    <Typography
      sx={{
        color: "text.secondary",
        lineHeight: 1.65,
        fontSize: ".93rem",
        mt: { xs: 1, md: 0 },
      }}
    >
      {entry.description}
    </Typography>
  </Box>
);
