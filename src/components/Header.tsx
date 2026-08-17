import { useEffect, useState } from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

const navigationItems = [
  { label: "About Me", sectionId: "about" },
  { label: "Projects", sectionId: "projects" },
  { label: "Timeline", sectionId: "timeline" },
  { label: "Contact", sectionId: "contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        height: "56px",
        backgroundColor: hovered
          ? "rgba(0, 0, 0, 0.35)"
          : scrolled
            ? "rgba(0, 0, 0, 0.65)"
            : "rgba(0, 0, 0, 0.15)",
        backdropFilter: scrolled || hovered
          ? "blur(10px)"
          : "blur(6px)",
        WebkitBackdropFilter: scrolled || hovered
          ? "blur(10px)"
          : "blur(6px)",
        transition:
          "background-color 0.25s ease, backdrop-filter 0.25s ease",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "56px !important",
          height: "56px",
          px: { xs: 1.5, md: 3 },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          onClick={() => scrollToSection("about")}
          sx={{
            color: "white",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
            fontWeight: 600,
            letterSpacing: "-0.02em",
            cursor: "pointer",
            transition: "opacity 0.2s ease",

            "&:hover": {
              opacity: 0.75,
            },
          }}
        >
          Lucy Randewich
        </Box>

        <Box
          component="nav"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0, md: 0.5 },
            ml: "auto",
          }}
        >
          {navigationItems.map(({ label, sectionId }) => (
            <Button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: {
                  xs: "0.7rem",
                  sm: "0.75rem",
                  md: "0.8rem",
                },
                fontWeight: 500,
                textTransform: "none",
                minWidth: "auto",
                px: { xs: 0.8, sm: 1, md: 1.2 },
                py: 0.5,
                borderRadius: "6px",
                transition:
                  "background-color 0.2s ease, color 0.2s ease",

                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "pink",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;