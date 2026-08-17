import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import CornellBox from "../images/Cornell_box.png";
import Cows from "../images/cows.png";
import DND from "../images/dnd.png";
import ML from "../images/ML.png";

import ThesisPaper from "../resources/Thesis.pdf";
import MLPaper from "../resources/cw_xm20246.pdf";

interface ProjectsPageProps {
  id?: string;
}

interface Project {
  id: number;
  title: string;
  image: string;
  text: string;
  longText: string;
  skills: string[];
  githubLink?: string;
  paperLink?: string;
  websiteLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cow Identification",
    image: Cows,
    text: "Deep metric learning for identifying individual cattle from depth imagery.",
    longText:
      "My BSc thesis explored deep learning for agriculture, supervised by Dr. Tilo Burghardt. I created and optimised a deep neural network for identifying individual cattle using depth imagery of their backs.",
    skills: [
      "Python",
      "PyTorch",
      "Dataset curation",
      "Data preparation",
      "Network architecture",
      "Neural network optimisation",
    ],
    githubLink:
      "https://github.com/lucy-randewich/cow-depth-identification.git",
    paperLink: ThesisPaper,
  },
  {
    id: 2,
    title: "Ray Tracer",
    image: CornellBox,
    text: "A graphics renderer developed from first principles using C++.",
    longText:
      "I created a rendering engine capable of producing realistic images and animations from geometry data. Rather than relying on graphics APIs such as OpenGL or DirectX, I researched and implemented the fundamental principles underneath them. The project explored wireframe, rasterised and ray-traced rendering, alongside different approaches to lighting and shadows.",
    skills: ["C++", "Linear algebra", "Coordinate geometry"],
    githubLink: "https://github.com/lucy-randewich/graphics",
  },
  {
    id: 3,
    title: "ML Method Analysis",
    image: ML,
    text: "An empirical analysis of common machine learning techniques.",
    longText:
      "This paper is an evaluation of a range of machine learning approaches using the California Housing and Fashion-MNIST datasets. I implemented and compared models including kernel machines, tree-based ensemble methods and Hidden Markov Models, analysing their performance and limitations.",
    skills: ["Python", "Machine learning", "Result analysis"],
    githubLink: "https://github.com/lucy-randewich/ML_coursework",
    paperLink: MLPaper,
  },
  {
    id: 4,
    title: "Decisions & Disruptions",
    image: DND,
    text: "An interactive game teaching cyber-security principles.",
    longText:
      "I worked with the Bristol Cyber Security Group to create a game teaching cyber-security best practice, with a particular focus on the consequences of insecure remote working. I developed a back-end tool and GUI used during training sessions facilitated by the Metropolitan Police.",
    skills: ["Java", "Swing UI", "Cyber security"],
    websiteLink: "https://www.decisions-disruptions.org",
  }
];

const ProjectsPage = ({ id }: ProjectsPageProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id={id}>
      <Box
        sx={{
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
          py: { xs: 8, md: 12 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Section heading */}
        <Box
          sx={{
            width: { xs: "88%", md: "80%" },
            maxWidth: "1200px",
            mx: "auto",
            mb: { xs: 5, md: 8 },
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "text.secondary",
              mb: 1,
            }}
          >
            Portfolio
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              m: 0,
            }}
          >
            Selected Projects
          </Typography>

          <Typography
            sx={{
              mt: 2,
              maxWidth: "600px",
              color: "text.secondary",
              lineHeight: 1.6,
              fontSize: "0.95rem",
            }}
          >
            A selection of software, machine learning and research projects
            I've worked on throughout my studies and career.
          </Typography>
        </Box>

        {/* Project cards */}
        <Box
          sx={{
            width: "100%",
            overflowX: "auto",
            pb: 4,
            scrollbarWidth: "thin",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2.5,
              width: "max-content",
              px: { xs: 4, md: "10%" },
            }}
          >
            {projects.map((project) => (
              <Box
                key={project.id}
                component="button"
                onClick={() => setSelectedProject(project)}
                sx={{
                  width: { xs: "290px", md: "330px" },
                  minHeight: "430px",
                  p: 0,
                  border: "1px solid #e3e3e3",
                  borderRadius: "14px",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  textAlign: "left",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition:
                    "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.08)",
                  },
                  "&:focus-visible": {
                    outline: "2px solid #222",
                    outlineOffset: "4px",
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    height: "210px",
                    backgroundColor: "#f1f1f1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transition: "transform 0.4s ease",
                      ".MuiBox-root:hover &": {
                        transform: "scale(1.04)",
                      },
                    }}
                  />
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    p: 2.5,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      mb: 1,
                      color: "#222",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      lineHeight: 1.55,
                      color: "text.secondary",
                    }}
                  >
                    {project.text}
                  </Typography>

                  <Box
                    sx={{
                      mt: "auto",
                      pt: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#555",
                      }}
                    >
                      View project
                    </Typography>

                    <ArrowForwardIcon
                      sx={{
                        fontSize: "1rem",
                        color: "#555",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Mobile scroll hint */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "0.7rem",
            color: "text.secondary",
            mt: 1,
            display: { xs: "block", md: "none" },
          }}
        >
          ← Swipe to explore →
        </Typography>
      </Box>

      {/* Project detail dialog */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        fullWidth
        maxWidth="md"
      >
        {selectedProject && (
          <>
            <IconButton
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 2,
                backgroundColor: "rgba(255,255,255,0.85)",
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box
              sx={{
                height: { xs: "220px", md: "300px" },
                backgroundColor: "#f1f1f1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>

            <DialogContent
              sx={{
                p: { xs: 3, md: 5 },
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "1.7rem", md: "2.2rem" },
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  mb: 2,
                }}
              >
                {selectedProject.title}
              </Typography>

              <Typography
                sx={{
                  maxWidth: "750px",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "text.secondary",
                  mb: 3,
                }}
              >
                {selectedProject.longText}
              </Typography>

              {/* Skills */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 4,
                }}
              >
                {selectedProject.skills.map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      px: 1.5,
                      py: 0.6,
                      borderRadius: "20px",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.75rem",
                      color: "#555",
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>

              {/* Links */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {selectedProject.githubLink && (
                  <Button
                    component="a"
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{
                      borderColor: "#ccc",
                      color: "#222",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#222",
                      },
                    }}
                  >
                    GitHub
                  </Button>
                )}

                {selectedProject.paperLink && (
                  <Button
                    component="a"
                    href={selectedProject.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{
                      borderColor: "#ccc",
                      color: "#222",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#222",
                      },
                    }}
                  >
                    Read paper
                  </Button>
                )}

                {selectedProject.websiteLink && (
                  <Button
                    component="a"
                    href={selectedProject.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{
                      borderColor: "#ccc",
                      color: "#222",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#222",
                      },
                    }}
                  >
                    Visit website
                  </Button>
                )}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </section>
  );
};

export default ProjectsPage;