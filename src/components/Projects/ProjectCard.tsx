import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button, Typography } from "@mui/material";
import { colors, shadows } from "../../theme";
import type { Project } from "./projects.types";

export const ProjectCard = ({ project }: { project: Project }) => (
  <Box
    sx={{
      bgcolor: "background.paper",
      border: `1px solid ${colors.border}`,
      display: "flex",
      flexDirection: { xs: "column", lg: "row" },
      minHeight: 310,
      transition: "transform .2s ease, box-shadow .2s ease",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: shadows.card,
      },
    }}
  >
    <Box
      component="img"
      src={project.image}
      alt=""
      width={project.imageDimensions.width}
      height={project.imageDimensions.height}
      loading="lazy"
      sx={{
        width: { xs: "100%", lg: "44%" },
        height: { xs: 190, lg: "auto" },
        minHeight: { lg: "100%" },
        objectFit: "contain",
        bgcolor: "background.default",
        p: 2,
      }}
    />
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <Typography
        sx={{
          color: "primary.main",
          fontSize: ".68rem",
          textTransform: "uppercase",
          letterSpacing: ".1em",
          fontWeight: 700,
        }}
      >
        {project.detail}
      </Typography>
      <Typography
        component="h3"
        sx={{ fontSize: "1.7rem", lineHeight: 1.05, mt: 1.4, mb: 1.2 }}
      >
        {project.title}
      </Typography>
      <Typography
        sx={{ color: "text.secondary", fontSize: ".9rem", lineHeight: 1.55 }}
      >
        {project.summary}
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: ".75rem",
          lineHeight: 1.4,
          mt: 2,
        }}
      >
        {project.skills}
      </Typography>
      <Button
        component="a"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        endIcon={<ArrowOutwardIcon />}
        sx={{
          color: "text.primary",
          p: 0,
          mt: "auto",
          pt: 2.2,
          fontWeight: 700,
          "&:hover": { color: "primary.main", bgcolor: "transparent" },
        }}
      >
        {project.linkLabel}
      </Button>
    </Box>
  </Box>
);
