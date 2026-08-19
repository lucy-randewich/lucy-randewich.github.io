import { Box } from "@mui/material";
import { colors, layout } from "../../theme";
import { SectionEyebrow, SectionHeading } from "../shared";
import { timelineEntries } from "./timeline.data";
import { TimelineItem } from "./TimelineItem";

interface TimelineProps {
  id?: string;
}

export const Timeline = ({ id }: TimelineProps) => (
  <section id={id}>
    <Box
      sx={{
        maxWidth: layout.contentWidth,
        mx: "auto",
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, md: 4 },
      }}
    >
      <SectionEyebrow>Experience</SectionEyebrow>
      <SectionHeading marginBottom={{ xs: 5, md: 7 }}>
        Grounded in research, moved to production.
      </SectionHeading>
      <Box sx={{ borderTop: `1px solid ${colors.borderStrong}` }}>
        {timelineEntries.map((entry) => (
          <TimelineItem key={entry.title} entry={entry} />
        ))}
      </Box>
    </Box>
  </section>
);
