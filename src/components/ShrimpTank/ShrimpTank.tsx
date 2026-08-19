import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { alpha, Box, Dialog, IconButton, Typography } from "@mui/material";
import { colors, shadows } from "../../theme";
import { BUBBLE_NAMES, MOVEMENTS, shrimpAssets } from "./shrimp.constants";
import { ShrimpControls } from "./ShrimpControls";
import { ShrimpSprite } from "./ShrimpSprite";
import { useShrimpGame } from "./useShrimpGame";
import { useTankAudio } from "./useTankAudio";
import "./ShrimpTank.css";

interface ShrimpTankProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShrimpTank = ({ isOpen, onClose }: ShrimpTankProps) => {
  const tankRef = useRef<HTMLDivElement>(null);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const {
    isMuted,
    playCollection,
    start: startAudio,
    stop: stopAudio,
    toggle: toggleAudio,
  } = useTankAudio();
  const game = useShrimpGame();

  useEffect(() => {
    if (!isOpen) return;
    const focusTimer = window.setTimeout(() => tankRef.current?.focus(), 100);
    startAudio();
    return () => window.clearTimeout(focusTimer);
  }, [isOpen, startAudio]);

  const closeTank = () => {
    onClose();
    stopAudio();
    game.reset();
    setIsFocusMode(false);
  };

  const moveShrimp = (xChange: number, yChange: number) => {
    if (game.move(xChange, yChange)) playCollection();
  };

  const returnFocusToTank = () => tankRef.current?.focus();

  const handleTankKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const movement = MOVEMENTS[event.key];
    if (!movement) return;
    event.preventDefault();
    moveShrimp(...movement);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={closeTank}
      onKeyDown={handleTankKeyDown}
      maxWidth={isFocusMode ? "md" : "xs"}
      fullWidth
      slotProps={{
        paper: {
          sx: {
            overflow: "hidden",
            boxShadow: shadows.dialog,
            transition: "max-width .6s ease, width .6s ease",
          },
        },
        backdrop: {
          sx: {
            bgcolor: alpha(colors.ink, 0.38),
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          },
        },
      }}
    >
      <Box
        className={`tank-shell${game.hasStarted ? " has-started" : ""}`}
        sx={{
          bgcolor: colors.tank.water,
          backgroundImage: `linear-gradient(${alpha(colors.paper, 0.08)}, ${alpha(colors.tank.ink, 0.08)}), url('${shrimpAssets.background}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: isFocusMode ? { xs: 520, md: 620 } : 430,
          position: "relative",
          overflow: "hidden",
          p: 3.5,
        }}
      >
        <Box className="tank-light" aria-hidden="true" />
        <IconButton
          className="tank-interface sound-button"
          aria-label={isMuted ? "Unmute tank sounds" : "Mute tank sounds"}
          onClick={() => {
            toggleAudio();
            returnFocusToTank();
          }}
          sx={{
            position: "absolute",
            zIndex: 3,
            right: 94,
            top: 12,
            color: colors.tank.ink,
            "&:hover": { bgcolor: alpha(colors.paper, 0.45) },
          }}
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
        <IconButton
          className="tank-interface focus-button"
          aria-label={isFocusMode ? "Exit focus mode" : "Enter focus mode"}
          onClick={() => {
            setIsFocusMode((current) => !current);
            returnFocusToTank();
          }}
          sx={{
            position: "absolute",
            zIndex: 3,
            right: 53,
            top: 12,
            color: colors.tank.ink,
            "&:hover": { bgcolor: alpha(colors.paper, 0.45) },
          }}
        >
          {isFocusMode ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </IconButton>
        <IconButton
          className="tank-interface close-button"
          aria-label="Close shrimp tank"
          onClick={closeTank}
          sx={{
            position: "absolute",
            zIndex: 3,
            right: 12,
            top: 12,
            color: colors.tank.ink,
            "&:hover": { bgcolor: alpha(colors.paper, 0.45) },
          }}
        >
          <CloseIcon />
        </IconButton>
        {BUBBLE_NAMES.map((bubble) => (
          <Box
            key={bubble}
            component="img"
            src={shrimpAssets.bubble}
            alt=""
            className={`tank-bubble bubble-${bubble}`}
          />
        ))}
        {!game.hasStarted && (
          <Typography
            component="h2"
            sx={{
              position: "relative",
              zIndex: 2,
              color: colors.tank.ink,
              fontSize: "2.6rem",
              letterSpacing: "-.05em",
              lineHeight: 1,
              m: 0,
            }}
          >
            Shrimp tank
          </Typography>
        )}
        <Box
          className="tank-score tank-interface"
          aria-label={`Score: ${game.score}`}
          sx={{
            position: "absolute",
            zIndex: 3,
            top: game.hasStarted ? 28 : 78,
            left: 28,
            color: colors.tank.score,
            bgcolor: alpha(colors.paper, 0.34),
            px: 0.75,
            py: 0.25,
            fontSize: ".68rem",
            letterSpacing: ".1em",
            fontWeight: 700,
            textTransform: "uppercase",
            transition: "top .3s ease",
          }}
        >
          score{" "}
          <Box
            component="span"
            sx={{ fontFamily: "h2.fontFamily", fontSize: ".95rem", ml: 0.35 }}
          >
            {String(game.score).padStart(2, "0")}
          </Box>
        </Box>
        {game.isPartyTime && (
          <Typography className="party-message" aria-live="polite">
            SHRIMPLY THE BEST!
          </Typography>
        )}
        {!game.hasStarted && (
          <Typography
            aria-label="Use the arrow keys to move"
            sx={{
              position: "absolute",
              zIndex: 3,
              top: 79,
              right: 28,
              color: colors.tank.hint,
              fontSize: ".78rem",
              letterSpacing: ".2em",
              opacity: 0.85,
            }}
          >
            ← ↑ ↓ →
          </Typography>
        )}
        <Box
          ref={tankRef}
          role="application"
          aria-label="Shrimp tank game. Use the arrow keys to move the shrimp."
          tabIndex={0}
          sx={{ position: "absolute", inset: 0, zIndex: 2, outline: "none" }}
        >
          {game.food.map((pellet) => (
            <Box
              key={`${pellet.x}-${pellet.y}`}
              component="img"
              src={shrimpAssets.pellet}
              alt=""
              className="tank-food"
              sx={{
                left: `calc(${pellet.x} * 11.5% + 4%)`,
                top: `calc(${pellet.y} * 13% + 34%)`,
              }}
            />
          ))}
          {game.collectionEffect && (
            <Box
              key={game.collectionEffect.id}
              className="collection-ripple"
              sx={{
                left: `calc(${game.collectionEffect.position.x} * 11.5% + 4%)`,
                top: `calc(${game.collectionEffect.position.y} * 13% + 34%)`,
              }}
            />
          )}
          <ShrimpSprite
            className="game-shrimp"
            label="Your cherry shrimp"
            style={{
              left: `calc(${game.shrimpPosition.x} * 11.5% + 4%)`,
              top: `calc(${game.shrimpPosition.y} * 13% + 34%)`,
            }}
            isPartyTime={game.isPartyTime}
            isEating={game.isEating}
            isMoving={game.isMoving}
            swimFrame={game.swimFrame}
            facing={game.facing}
          />
        </Box>
        <ShrimpSprite
          className="tank-shrimp shrimp-two"
          isPartyTime={game.isPartyTime}
          facing="left"
        />
        <ShrimpControls onMove={moveShrimp} />
      </Box>
    </Dialog>
  );
};
