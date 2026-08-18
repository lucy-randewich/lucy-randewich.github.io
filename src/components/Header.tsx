import { useState } from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { ShrimpTank } from "./Shrimp";

const navigationItems = [
  { label: "Work", sectionId: "projects" },
  { label: "Experience", sectionId: "experience" },
  { label: "Contact", sectionId: "contact" },
];

const Header = () => {
  const [isTankOpen, setIsTankOpen] = useState(false);

  const scrollToSection = (sectionId: string) =>
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(247,245,241,.92)",
          color: "#171716",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #dedbd5",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
            minHeight: "64px !important",
            px: { xs: 2.5, md: 4 },
          }}
        >
          <Box
            component="button"
            onClick={() => setIsTankOpen(true)}
            aria-label="Open Lucy's shrimp tank"
            sx={{
              border: 0,
              bgcolor: "transparent",
              p: 0,
              cursor: "pointer",
              color: "inherit",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "-.03em",
              "&:hover": { color: "#a3474e" },
            }}
          >
            Lucy Randewich
          </Box>

          <Box
            component="nav"
            sx={{
              ml: "auto",
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.25, sm: 1 },
            }}
          >
            {navigationItems.map(({ label, sectionId }) => (
              <Button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                sx={{
                  color: "inherit",
                  minWidth: 0,
                  px: { xs: 1, sm: 1.5 },
                  textTransform: "none",
                  fontSize: ".84rem",
                  "&:hover": {
                    color: "#a3474e",
                    bgcolor: "transparent",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <ShrimpTank
        isOpen={isTankOpen}
        onClose={() => setIsTankOpen(false)}
      />
    </>
  );
};

export default Header;