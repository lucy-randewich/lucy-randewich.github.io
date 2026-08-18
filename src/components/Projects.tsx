import { Box, Button, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CornellBox from "../images/Cornell_box.png";
import Cows from "../images/cows.png";
import DND from "../images/dnd.png";
import ML from "../images/ML.png";
import ThesisPaper from "../resources/Thesis.pdf";
import MLPaper from "../resources/cw_xm20246.pdf";

interface ProjectsPageProps {
  id?: string;
}
const projects = [
  {
    title: "Cow Identification",
    image: Cows,
    summary:
      "Deep metric learning for identifying individual cattle from depth imagery.",
    detail: "BSc thesis · Deep-learning research",
    skills: "Python · PyTorch · Dataset curation",
    link: ThesisPaper,
    label: "Read thesis",
  },
  {
    title: "Ray Tracer",
    image: CornellBox,
    summary: "A graphics renderer developed from first principles using C++.",
    detail: "Independent graphics project",
    skills: "C++ · Linear algebra · Rendering",
    link: "https://github.com/lucy-randewich/graphics",
    label: "View code",
  },
  {
    title: "ML Method Analysis",
    image: ML,
    summary: "An empirical comparison of common machine-learning techniques.",
    detail: "Academic research paper",
    skills: "Python · Machine learning · Evaluation",
    link: MLPaper,
    label: "Read paper",
  },
  {
    title: "Decisions & Disruptions",
    image: DND,
    summary:
      "An interactive game teaching practical cyber-security principles.",
    detail: "Bristol Cyber Security Group",
    skills: "Java · Swing · Cyber security",
    link: "https://www.decisions-disruptions.org",
    label: "Visit website",
  },
];

const ProjectsPage = ({ id }: ProjectsPageProps) => (
  <section id={id}>
    <Box
      sx={{ bgcolor: "#eeece7", py: { xs: 8, md: 12 }, px: { xs: 2.5, md: 4 } }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Typography
          sx={{
            color: "#a3474e",
            fontSize: ".75rem",
            letterSpacing: ".16em",
            fontWeight: 700,
            textTransform: "uppercase",
            mb: 1.5,
          }}
        >
          Selected work
        </Typography>
        <Box
          sx={{
            display: { md: "flex" },
            justifyContent: "space-between",
            alignItems: "end",
            mb: { xs: 5, md: 7 },
            gap: 3,
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: { xs: "2.8rem", md: "4rem" },
              lineHeight: 1,
              letterSpacing: "-.05em",
              fontWeight: 400,
              m: 0,
            }}
          >
            Some stuff I've made
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 2,
          }}
        >
          {projects.map((project) => (
            <Box
              key={project.title}
              sx={{
                bgcolor: "#fff",
                border: "1px solid #dedbd5",
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                minHeight: "310px",
                transition: "transform .2s ease, box-shadow .2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 14px 30px rgba(23,23,22,.08)",
                },
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt=""
                sx={{
                  width: { xs: "100%", lg: "44%" },
                  height: { xs: 190, lg: "auto" },
                  minHeight: { lg: "100%" },
                  objectFit: "contain",
                  bgcolor: "#f7f5f1",
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
                    color: "#a3474e",
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
                  sx={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.7rem",
                    fontWeight: 400,
                    lineHeight: 1.05,
                    mt: 1.4,
                    mb: 1.2,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: ".9rem",
                    lineHeight: 1.55,
                  }}
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
                    color: "#171716",
                    textTransform: "none",
                    p: 0,
                    mt: "auto",
                    pt: 2.2,
                    fontWeight: 700,
                    "&:hover": { color: "#a3474e", bgcolor: "transparent" },
                  }}
                >
                  {project.label}
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </section>
);
export default ProjectsPage;
