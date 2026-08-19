import { Box } from "@mui/material";
import { layout } from "../../theme";
import { SectionEyebrow, SectionHeading } from "../shared";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects.data";

interface ProjectsProps {
  id?: string;
}

export const Projects = ({ id }: ProjectsProps) => (
  <section id={id}>
    <Box
      sx={{
        bgcolor: "action.hover",
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, md: 4 },
      }}
    >
      <Box sx={{ maxWidth: layout.contentWidth, mx: "auto" }}>
        <SectionEyebrow>Selected work</SectionEyebrow>
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <SectionHeading>Some stuff I've made</SectionHeading>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 2,
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Box>
      </Box>
    </Box>
  </section>
);
