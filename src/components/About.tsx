import { Box, Button, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "../images/stor3.jpeg";
import CV from "../resources/CV.pdf";

interface AboutPageProps {
  id?: string;
}

const AboutPage = ({ id }: AboutPageProps) => (
  <section id={id}>
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        minHeight: { md: "calc(100vh - 64px)" },
        px: { xs: 2.5, md: 4 },
        py: { xs: 8, md: 11 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.15fr .85fr" },
        gap: { xs: 6, md: 10 },
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          component="h1"
          sx={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 400,
            fontSize: { xs: "3.25rem", sm: "4.4rem", lg: "5.5rem" },
            lineHeight: 0.98,
            letterSpacing: "-.055em",
            maxWidth: "720px",
            m: 0,
          }}
        >
          Building reliable systems rapidly.
        </Typography>
        <Typography
          sx={{
            mt: 3.5,
            fontSize: { xs: "1.05rem", md: "1.2rem" },
            lineHeight: 1.7,
            color: "text.secondary",
            maxWidth: "590px",
          }}
        >
          I’m a full-stack software engineer at Laka, with experience across
          production insurance systems, machine-learning applications and
          cyber-security research tooling.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 4 }}>
          <Button
            component="a"
            href="#projects"
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              bgcolor: "#171716",
              px: 2.5,
              py: 1.25,
              borderRadius: 0,
              textTransform: "none",
              "&:hover": { bgcolor: "#a3474e" },
            }}
          >
            View selected work
          </Button>
          <Button
            component="a"
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              borderColor: "#171716",
              color: "#171716",
              px: 2.5,
              py: 1.25,
              borderRadius: 0,
              textTransform: "none",
              "&:hover": {
                borderColor: "#a3474e",
                color: "#a3474e",
                bgcolor: "transparent",
              },
            }}
          >
            Download CV
          </Button>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            borderTop: "1px solid #d7d4ce",
            mt: 7,
            pt: 2.5,
            gap: 2.5,
          }}
        >
          {[
            ["Current", "Software Engineer, Laka"],
            ["Focus", "Full-stack & data systems"],
            ["Based in", "Bristol, United Kingdom"],
          ].map(([label, value]) => (
            <Box key={label}>
              <Typography
                sx={{
                  fontSize: ".7rem",
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                  mb: 0.5,
                }}
              >
                {label}
              </Typography>
              <Typography
                sx={{ fontSize: ".9rem", fontWeight: 600, lineHeight: 1.35, color: '#a3474e' }}
              >
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          maxWidth: { xs: "440px", md: "none" },
          justifySelf: { xs: "center", md: "end" },
          width: "100%",
        }}
      >
        <Box
          component="img"
          src={Image}
          alt="Lucy Randewich"
          sx={{
            display: "block",
            width: "100%",
            aspectRatio: "4 / 5",
            objectFit: "cover",
            filter: "saturate(.82)",
          }}
        />
      </Box>
    </Box>
  </section>
);
export default AboutPage;
