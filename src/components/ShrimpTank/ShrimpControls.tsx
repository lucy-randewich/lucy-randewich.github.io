import { Box, Button } from "@mui/material";

export const ShrimpControls = ({
  onMove,
}: {
  onMove: (xChange: number, yChange: number) => void;
}) => (
  <Box className="tank-controls" aria-label="Shrimp movement controls">
    <Button aria-label="Move up" onClick={() => onMove(0, -1)}>
      ↑
    </Button>
    <Button aria-label="Move left" onClick={() => onMove(-1, 0)}>
      ←
    </Button>
    <Button aria-label="Move down" onClick={() => onMove(0, 1)}>
      ↓
    </Button>
    <Button aria-label="Move right" onClick={() => onMove(1, 0)}>
      →
    </Button>
  </Box>
);
