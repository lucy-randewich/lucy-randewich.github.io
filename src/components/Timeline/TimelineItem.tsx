import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Collapse, Typography } from "@mui/material";
import type { TimelineEntry } from "./timeline.types";

interface TimelineItemProps {
  entry: TimelineEntry;
  isExpanded: boolean;
  onToggle: () => void;
}

export const TimelineItem = ({
  entry,
  isExpanded,
  onToggle,
}: TimelineItemProps) => (
  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
    <Box
      component="button"
      type="button"
      aria-expanded={isExpanded}
      onClick={onToggle}
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: { xs: "1fr auto", md: "190px 1fr auto" },
        columnGap: { xs: 2, md: 4 },
        alignItems: "center",
        py: { xs: 3, md: 4 },
        px: 0,
        color: "text.primary",
        bgcolor: "transparent",
        border: 0,
        textAlign: "left",
        cursor: "pointer",
        transition: "color .2s ease",
        "&:hover": { color: "primary.main" },
      }}
    >
      <Typography
        sx={{
          gridColumn: { xs: "1", md: "auto" },
          color: "primary.main",
          fontSize: ".75rem",
          fontWeight: 700,
          letterSpacing: ".06em",
          mb: { xs: 0.8, md: 0 },
        }}
      >
        {entry.period}
      </Typography>
      <Box sx={{ gridColumn: { xs: "1", md: "auto" } }}>
        <Typography
          component="h3"
          sx={{
            fontFamily: "inherit",
            fontSize: { xs: "1.2rem", md: "1.4rem" },
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          {entry.title}
        </Typography>
        <Typography
          sx={{ mt: 0.55, color: "text.secondary", fontSize: ".9rem" }}
        >
          {entry.organisation}
        </Typography>
      </Box>
      <Box
        sx={{
          gridColumn: { xs: "2", md: "3" },
          gridRow: { xs: "1 / span 2", md: "auto" },
          color: "primary.main",
          display: "flex",
        }}
      >
        {isExpanded ? <RemoveIcon /> : <AddIcon />}
      </Box>
    </Box>
    <Collapse in={isExpanded}>
      <Typography
        sx={{
          maxWidth: 620,
          ml: { md: "222px" },
          pr: { xs: 5, md: 8 },
          pb: { xs: 3, md: 4 },
          color: "text.secondary",
          fontSize: { xs: ".95rem", md: "1rem" },
          lineHeight: 1.65,
        }}
      >
        {entry.highlight}
      </Typography>
    </Collapse>
  </Box>
);
