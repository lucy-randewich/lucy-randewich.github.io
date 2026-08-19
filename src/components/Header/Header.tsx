import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useState } from "react";
import { alpha, AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import type { PaletteMode } from "@mui/material";
import { layout } from "../../theme";
import { ShrimpTank } from "../ShrimpTank";
import { navigationItems } from "./navigation";

interface HeaderProps {
  mode: PaletteMode;
  onToggleMode: () => void;
}

export const Header = ({ mode, onToggleMode }: HeaderProps) => {
  const [isTankOpen, setIsTankOpen] = useState(false);

  const scrollToSection = (sectionId: string) =>
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={(theme) => ({
          bgcolor: alpha(theme.palette.background.default, 0.92),
          color: "text.primary",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${theme.palette.divider}`,
        })}
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
            <IconButton
              onClick={onToggleMode}
              aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
              color="inherit"
              size="small"
              sx={{ ml: { xs: 0.25, sm: 0.75 } }}
            >
              {mode === "light" ? (
                <DarkModeOutlinedIcon fontSize="small" />
              ) : (
                <LightModeOutlinedIcon fontSize="small" />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <ShrimpTank isOpen={isTankOpen} onClose={() => setIsTankOpen(false)} />
    </>
  );
};
