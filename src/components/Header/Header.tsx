import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useState } from "react";
import { alpha, AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import type { PaletteMode } from "@mui/material";
import { layout } from "../../theme";
import { ShrimpLeaderboard, ShrimpTank } from "../ShrimpTank";
import { shrimpAssets } from "../ShrimpTank/shrimp.constants";
import { navigationItems } from "./navigation";

interface HeaderProps {
  mode: PaletteMode;
  onToggleMode: () => void;
}

export const Header = ({ mode, onToggleMode }: HeaderProps) => {
  const [isTankOpen, setIsTankOpen] = useState(false);
  const [leaderboardScore, setLeaderboardScore] = useState<number | null>(null);

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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            sx={{
              border: 0,
              bgcolor: "transparent",
              p: 0,
              color: "inherit",
              cursor: "pointer",
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
                  display: { xs: "none", sm: "inline-flex" },
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
            <Button
              onClick={() => setIsTankOpen(true)}
              sx={{
                position: "relative",
                overflow: "visible",
                color: "inherit",
                minWidth: 0,
                px: 1.5,
                fontSize: ".84rem",
                "&:hover": {
                  color: "primary.main",
                  bgcolor: "transparent",
                },
                "& .tank-link-shrimp": {
                  position: "absolute",
                  zIndex: -1,
                  left: "50%",
                  bottom: -24,
                  width: 42,
                  height: "auto",
                  opacity: 0,
                  pointerEvents: "none",
                  imageRendering: "pixelated",
                  transform: "translate(-50%, 9px) rotate(-5deg)",
                  transition: "opacity .2s ease, transform .3s ease",
                },
                "&:hover .tank-link-shrimp, &:focus-visible .tank-link-shrimp":
                  {
                    opacity: 1,
                    transform: "translate(-50%, 0) rotate(-5deg)",
                  },
                "@media (prefers-reduced-motion: reduce)": {
                  "& .tank-link-shrimp": { transition: "none" },
                },
              }}
            >
              Tank
              <Box
                component="img"
                className="tank-link-shrimp"
                src={shrimpAssets.idle}
                alt=""
                aria-hidden="true"
                draggable={false}
              />
            </Button>
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
      <ShrimpTank
        isOpen={isTankOpen}
        onOpenLeaderboard={() => setLeaderboardScore(0)}
        onClose={(score) => {
          setIsTankOpen(false);
          setLeaderboardScore(score);
        }}
      />
      {leaderboardScore !== null && (
        <ShrimpLeaderboard
          score={leaderboardScore}
          onClose={() => setLeaderboardScore(null)}
        />
      )}
    </>
  );
};
