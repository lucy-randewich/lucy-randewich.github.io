import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

interface TimelineProps {
  id?: string;
}

interface TimelineEvent {
  title: string;
  company: string;
  period?: string;
  description: string;
}

interface TimelineYear {
  year: number;
  events: TimelineEvent[];
}

const timelineData: TimelineYear[] = [
  {
    year: 2020,
    events: [
      {
        title: "BSc Computer Science",
        company: "University of Bristol",
        description:
          "Began a Computer Science BSc, awarded the Hargrave Scholarship for placing top of the cohort in first and second year.",
      },
    ],
  },
  {
    year: 2022,
    events: [
      {
        title: "Machine Learning Intern",
        company: "Oxford Nanopore Technologies",
        description:
          "Optimised neural networks for bioinformatics applications, researched Neural Architecture Search, and developed MLOps automation tools.",
      },
      {
        title: "Teaching Assistant",
        company: "University of Bristol",
        description:
          "Taught software engineering, operating systems and software security. Led technical support and weekly stand-ups for undergraduate software projects.",
      },
    ],
  },
  {
    year: 2023,
    events: [
      {
        title: "BSc Computer Science — First Class",
        company: "University of Bristol",
        description:
          "Graduated with First Class Honours, achieving 75% overall and 79% in second year. Received the 2022 Netcraft Prize for placing in the top 10 second-year students.",
      },
      {
        title: "Research Associate",
        company: "Bristol Cyber Security Group",
        description:
          "Developed professional tooling for REPHRAIN’s Testbed OS framework and contributed to cyber-security research projects.",
      },
    ],
  },
  {
    year: 2024,
    events: [
      {
        title: "Software Engineer",
        company: "Laka",
        period: "2024 – Present",
        description:
          "Develop and maintain production systems across Laka’s insurance platform, including claims tooling, customer onboarding, partner APIs and monitoring infrastructure. Led a company-wide claims data remediation project that reduced customer support issues to near zero.",
      },
    ],
  },
];

const Timeline = ({ id }: TimelineProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const section = sectionRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.2 },
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

  return (
    <section id={id} ref={sectionRef}>
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
        {/* Header */}
        <Box
          sx={{
            width: { xs: "88%", md: "80%" },
            maxWidth: "1200px",
            mx: "auto",
            mb: { xs: 6, md: 10 },
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
            Background
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
            Experience & Education
          </Typography>
        </Box>

        {/* Timeline */}
        <Box
          sx={{
            width: "100%",
            overflowX: "auto",
            overflowY: "hidden",
            pb: 4,
            scrollbarWidth: "thin",
          }}
        >
          <Box
            sx={{
              minWidth: { xs: "1000px", md: "1200px" },
              width: "max-content",
              px: { xs: 4, md: 10 },
            }}
          >
            {/* Years */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                position: "relative",
                width: "1100px",
              }}
            >
              {/* Timeline line */}
              <Box
                sx={{
                  position: "absolute",
                  top: "15px",
                  left: "0",
                  right: "0",
                  height: "1px",
                  backgroundColor: "#bdbdbd",
                  transformOrigin: "left",
                  transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 1.2s ease",
                }}
              />

              {timelineData.map((year, yearIndex) => (
                <Box
                  key={year.year}
                  sx={{
                    position: "relative",
                    px: 2,
                  }}
                >
                  {/* Year marker */}
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      border: "2px solid #222",
                      backgroundColor: "#f7f7f7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 1,
                      mx: "auto",
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1)" : "scale(0.5)",
                      transition: "opacity 0.4s ease, transform 0.4s ease",
                      transitionDelay: `${yearIndex * 0.15}s`,
                    }}
                  >
                    <Box
                      sx={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        backgroundColor: "#222",
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: "1rem",
                      mt: 1.5,
                    }}
                  >
                    {year.year}
                  </Typography>

                  {/* Cards */}
                  <Box
                    sx={{
                      mt: 3,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    {year.events.map((event, eventIndex) => (
                      <Box
                        key={`${year.year}-${event.title}`}
                        sx={{
                          width: "250px",
                          minHeight: "190px",
                          p: 2.5,
                          backgroundColor: "#fff",
                          border: "1px solid #e5e5e5",
                          borderRadius: "12px",
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible
                            ? "translateY(0)"
                            : "translateY(15px)",
                          transition:
                            "opacity 0.5s ease, transform 0.5s ease",
                          transitionDelay: `${
                            0.8 + yearIndex * 0.15 + eventIndex * 0.1
                          }s`,
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                          },
                        }}
                      >
                        <Typography
                          component="h3"
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 700,
                            lineHeight: 1.3,
                            mb: 0.5,
                          }}
                        >
                          {event.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            color: "text.secondary",
                          }}
                        >
                          {event.company}
                        </Typography>

                        {event.period && (
                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                              color: "text.secondary",
                              mt: 0.5,
                            }}
                          >
                            {event.period}
                          </Typography>
                        )}

                        <Typography
                          sx={{
                            fontSize: "0.8rem",
                            lineHeight: 1.6,
                            color: "#555",
                            mt: 2,
                          }}
                        >
                          {event.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Timeline;