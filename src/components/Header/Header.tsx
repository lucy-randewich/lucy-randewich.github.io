import { useState } from "react";
import { alpha, AppBar, Box, Button, Toolbar } from "@mui/material";
import { colors, layout } from "../../theme";
import { ShrimpTank } from "../ShrimpTank";
import { navigationItems } from "./navigation";

export const Header = () => {
  const [isTankOpen, setIsTankOpen] = useState(false);

  const scrollToSection = (sectionId: string) =>
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: alpha(colors.canvas, 0.92),
          color: "text.primary",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: layout.contentWidth,
            width: "100%",
            mx: "auto",
            minHeight: `${layout.headerHeight}px !important`,
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
              "&:hover": { color: "primary.main" },
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
                  fontSize: ".84rem",
                  "&:hover": {
                    color: "primary.main",
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
      <ShrimpTank isOpen={isTankOpen} onClose={() => setIsTankOpen(false)} />
    </>
  );
};
