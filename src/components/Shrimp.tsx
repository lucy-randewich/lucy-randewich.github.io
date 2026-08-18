import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, Dialog, IconButton, Typography } from "@mui/material";

type TankCell = { x: number; y: number };

const createFood = (blockedCell?: TankCell): TankCell[] => {
  const pellets: TankCell[] = [];
  while (pellets.length < 3) {
    const pellet = {
      x: Math.floor(Math.random() * 9),
      y: Math.floor(Math.random() * 5),
    };
    const clashes = pellet.x === blockedCell?.x && pellet.y === blockedCell?.y;
    if (
      !clashes &&
      !pellets.some(({ x, y }) => x === pellet.x && y === pellet.y)
    )
      pellets.push(pellet);
  }
  return pellets;
};

const Shrimp = ({
  className,
  label,
  style,
  isPartyTime,
}: {
  className: string;
  label?: string;
  style?: React.CSSProperties;
  isPartyTime?: boolean;
}) => (
  <Box className={className} aria-label={label} style={style}>
    <Box className="shrimp-body" />
    <Box className="shrimp-segment segment-one" />
    <Box className="shrimp-segment segment-two" />
    <Box className="shrimp-segment segment-three" />
    <Box className="shrimp-segment segment-four" />
    <Box className="shrimp-tail" />
    <Box className="shrimp-eye" />
    <Box className="shrimp-claw" />
    {isPartyTime && <Box className="shrimp-party-hat" />}
  </Box>
);

export const ShrimpTank = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [shrimpPosition, setShrimpPosition] = useState({ x: 1, y: 2 });

  const [food, setFood] = useState<TankCell[]>(() =>
    createFood({ x: 1, y: 2 }),
  );

  const [isMuted, setIsMuted] = useState(false);
  const [showKeyHint, setShowKeyHint] = useState(true);
  const [score, setScore] = useState(0);
  const isPartyTime = score >= 67;
  const tankRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const musicTimerRef = useRef<number | null>(null);

  const moveShrimp = (xChange: number, yChange: number) => {
    const next = {
      x: Math.max(0, Math.min(8, shrimpPosition.x + xChange)),
      y: Math.max(0, Math.min(4, shrimpPosition.y + yChange)),
    };
    const remaining = food.filter(
      (pellet) => pellet.x !== next.x || pellet.y !== next.y,
    );
    if (remaining.length !== food.length)
      setScore((currentScore) => currentScore + 1);
    setFood(remaining.length === 0 ? createFood(next) : remaining);
    setShrimpPosition(next);
  };

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => tankRef.current?.focus(), 100);
      startMusic();
    }
  }, [isOpen]);

  useEffect(() => () => stopMusic(), []);

  const playAmbientChord = (context: AudioContext, root: number) => {
    [root, root * 1.25, root * 1.5].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = index === 0 ? "sine" : "triangle";
      oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      oscillator.detune.setValueAtTime(
        index === 2 ? 5 : -3,
        context.currentTime,
      );
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        index === 0 ? 0.018 : 0.007,
        context.currentTime + 1.4,
      );
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 6.7);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 6.8);
    });
  };

  const stopMusic = () => {
    if (musicTimerRef.current !== null)
      window.clearInterval(musicTimerRef.current);
    musicTimerRef.current = null;
    if (audioContextRef.current) {
      void audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const startMusic = () => {
    stopMusic();
    const context = new AudioContext();
    audioContextRef.current = context;
    const notes = [174.61, 196, 220, 196];
    let index = 0;
    const playNext = () => {
      playAmbientChord(context, notes[index % notes.length]);
      index += 1;
    };
    playNext();
    musicTimerRef.current = window.setInterval(playNext, 6500);
  };

  const closeTank = () => {
    onClose();
    stopMusic();
    setScore(0);
    setShowKeyHint(true);
    setShrimpPosition({ x: 1, y: 2 });
    setFood(createFood({ x: 1, y: 2 }));
  };

  const toggleSound = () => {
    const context = audioContextRef.current;
    if (!context) return;
    if (context.state === "running") {
      void context.suspend();
      setIsMuted(true);
    } else {
      void context.resume();
      setIsMuted(false);
    }
  };

  const handleTankKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, [number, number]> = {
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
    };
    const move = moves[event.key];
    if (move) {
      event.preventDefault();
      setShowKeyHint(false);
      moveShrimp(...move);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={closeTank}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            overflow: "hidden",
            borderRadius: 0,
            boxShadow: "0 22px 70px rgba(20, 53, 58, .28)",
          },
        },
        backdrop: {
          sx: {
            bgcolor: "rgba(24, 42, 42, .38)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          },
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "#d9f2ef",
          minHeight: "430px",
          position: "relative",
          overflow: "hidden",
          p: 3.5,
        }}
      >
        <IconButton
          aria-label={isMuted ? "Unmute tank music" : "Mute tank music"}
          onClick={toggleSound}
          sx={{
            position: "absolute",
            zIndex: 3,
            right: 53,
            top: 12,
            color: "#164a50",
            "&:hover": { bgcolor: "rgba(255,255,255,.45)" },
          }}
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
        <IconButton
          aria-label="Close shrimp tank"
          onClick={closeTank}
          sx={{
            position: "absolute",
            zIndex: 3,
            right: 12,
            top: 12,
            color: "#164a50",
            "&:hover": { bgcolor: "rgba(255,255,255,.45)" },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box className="tank-bubble bubble-one" />
        <Box className="tank-bubble bubble-two" />
        <Box className="tank-bubble bubble-three" />
        <Box className="tank-bubble bubble-four" />
        <Box className="tank-bubble bubble-five" />
        <Box className="tank-bubble bubble-six" />
        <Typography
          component="h2"
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#164a50",
            fontFamily: "Georgia, serif",
            fontSize: "2.6rem",
            fontWeight: 400,
            letterSpacing: "-.05em",
            lineHeight: 1,
            m: 0,
          }}
        >
          Shrimp tank
        </Typography>
        <Box
          aria-label={`Score: ${score}`}
          sx={{
            position: "absolute",
            zIndex: 3,
            top: 78,
            left: 28,
            color: "#24585b",
            bgcolor: "rgba(255,255,255,.34)",
            px: 0.75,
            py: 0.25,
            fontSize: ".68rem",
            letterSpacing: ".1em",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          score{" "}
          <Box
            component="span"
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: ".95rem",
              ml: 0.35,
            }}
          >
            {String(score).padStart(2, "0")}
          </Box>
        </Box>
        {showKeyHint && (
          <Typography
            aria-label="Use the arrow keys to move"
            sx={{
              position: "absolute",
              zIndex: 3,
              top: 79,
              right: 28,
              color: "#317b78",
              fontSize: ".78rem",
              letterSpacing: ".2em",
              opacity: 0.85,
              transition: "opacity .5s ease",
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
          onKeyDown={handleTankKeyDown}
          sx={{ position: "absolute", inset: 0, zIndex: 2, outline: "none" }}
        >
          {food.map((pellet) => (
            <Box
              key={`${pellet.x}-${pellet.y}`}
              className="tank-food"
              sx={{
                left: `calc(${pellet.x} * 11.5% + 4%)`,
                top: `calc(${pellet.y} * 13% + 34%)`,
              }}
            />
          ))}
          <Shrimp
            className="game-shrimp"
            label="Your cherry shrimp"
            style={{
              left: `calc(${shrimpPosition.x} * 11.5% + 4%)`,
              top: `calc(${shrimpPosition.y} * 13% + 34%)`,
            }}
            isPartyTime={isPartyTime}
          />
        </Box>
        <Shrimp className="tank-shrimp shrimp-two" isPartyTime={isPartyTime} />
        <Box className="tank-plant plant-left" aria-hidden="true" />
        <Box className="tank-plant plant-middle" aria-hidden="true" />
        <Box className="tank-plant plant-right" aria-hidden="true" />
        <Box className="tank-floor" aria-hidden="true" />
      </Box>
    </Dialog>
  );
};
