import { Box, Typography } from "@mui/material";

interface TimelineProps {
  id?: string;
}
const roles = [
  {
    period: "2024 — Present",
    title: "Software Engineer",
    organisation: "Laka",
    text: "Developing and maintaining production systems across claims, onboarding, partner APIs and monitoring. Led a company-wide claims data remediation project that reduced customer-support issues to near zero.",
  },
  {
    period: "2023 — 2024",
    title: "Research Associate",
    organisation: "Bristol Cyber Security Group",
    text: "Developed professional tooling for REPHRAIN’s Testbed OS framework and contributed to applied cyber-security research.",
  },
  {
    period: "2022 — 2023",
    title: "Machine Learning Intern & Teaching Assistant",
    organisation: "Oxford Nanopore Technologies · University of Bristol",
    text: "Optimised neural networks and MLOps automation for bioinformatics applications, while teaching software engineering, operating systems and software security.",
  },
  {
    period: "2020 — 2023",
    title: "BSc Computer Science, First Class",
    organisation: "University of Bristol",
    text: "Graduated with 75% overall. Awarded the Hargrave Scholarship and the Netcraft Prize for academic performance.",
  },
];

const Timeline = ({ id }: TimelineProps) => (
  <section id={id}>
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, md: 4 },
      }}
    >
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
        Experience
      </Typography>
      <Typography
        component="h2"
        sx={{
          fontFamily: "Georgia, serif",
          fontSize: { xs: "2.8rem", md: "4rem" },
          lineHeight: 1,
          letterSpacing: "-.05em",
          fontWeight: 400,
          m: 0,
          mb: { xs: 5, md: 7 },
        }}
      >
        Grounded in research, moved to production.
      </Typography>
      <Box sx={{ borderTop: "1px solid #d7d4ce" }}>
        {roles.map((role) => (
          <Box
            key={role.title}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "190px 1fr 1.3fr" },
              gap: { xs: 1, md: 4 },
              py: { xs: 3, md: 4.5 },
              borderBottom: "1px solid #d7d4ce",
            }}
          >
            <Typography
              sx={{
                color: "#a3474e",
                fontSize: ".78rem",
                fontWeight: 700,
                letterSpacing: ".04em",
              }}
            >
              {role.period}
            </Typography>
            <Box>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.35rem" },
                  lineHeight: 1.2,
                  m: 0,
                  fontWeight: 700,
                }}
              >
                {role.title}
              </Typography>
              <Typography
                sx={{ mt: 0.7, color: "text.secondary", fontSize: ".9rem" }}
              >
                {role.organisation}
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
              {role.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </section>
);
export default Timeline;
