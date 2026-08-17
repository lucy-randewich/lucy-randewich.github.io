import { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image1 from "../images/stor2.jpeg";
import Image2 from "../images/lakes.jpeg";
import Image4 from "../images/stor3.jpeg";
import Image6 from "../images/grad.jpeg";
import CV from "../resources/CV.pdf";
import Typewriter from "typewriter-effect";

interface AboutPageProps {
  id?: string;
}

const images = [Image6, Image1, Image2, Image4];

const typewriterStrings = [
  "Full-stack Software Engineer",
  "Machine Learning Enthusiast"
];

const AboutPage = ({ id }: AboutPageProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className="about">
      <Box
        sx={{
          backgroundColor: "#ffffff",
          minHeight: "100vh",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 3, md: 8, lg: 12 },
          py: { xs: 10, md: 14 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            alignItems: "center",
            gap: { xs: 8, md: 10, lg: 14 },
          }}
        >
          {/* Image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition:
                "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "500px",
                aspectRatio: "4 / 5",
                overflow: "hidden",
              }}
            >
              {images.map((image, index) => (
                <Box
                  key={image}
                  component="img"
                  src={image}
                  alt="Lucy Randewich"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: currentImageIndex === index ? 1 : 0,
                    transition: "opacity 1s ease-in-out",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Content */}
          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition:
                "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
            }}
          >

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "2.2rem",
                  md: "3rem",
                  lg: "3.5rem",
                },
                fontWeight: 700,
                lineHeight: 1.05,
                mb: 3,
              }}
            >
              I like building things
              <br />
              <Box
                component="span"
                sx={{
                  color: "rgba(220, 120, 150, 1)",
                }}
              >
                that work
              </Box>
            </Typography>

            <Box
              sx={{
                minHeight: "2rem",
                mb: 3,
                fontSize: { xs: "1rem", md: "1.15rem" },
                fontWeight: 500,
              }}
            >
              <Typewriter
                options={{
                  strings: typewriterStrings,
                  autoStart: true,
                  loop: true,
                  delay: 45,
                  deleteSpeed: 25,
                }}
              />
            </Box>

            <Typography
              component="p"
              sx={{
                fontSize: { xs: "1rem", md: "1.05rem" },
                lineHeight: 1.8,
                color: "text.secondary",
                maxWidth: "560px",
                mb: 3,
              }}
            >
              I'm a full-stack software engineer with experience building
              production insurance systems, cyber-security research tooling,
              and machine learning applications.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                flexWrap: "wrap",
              }}
            >
              <Button
                component="a"
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  backgroundColor: "#222",
                  color: "#fff",
                  px: 3,
                  py: 1.2,
                  borderRadius: "3px",
                  textTransform: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#000",
                    boxShadow: "none",
                  },
                }}
              >
                View CV
              </Button>

              <Typography
                component="span"
                sx={{
                  fontSize: "0.85rem",
                  color: "text.secondary",
                }}
              >
                Bristol, UK
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default AboutPage;