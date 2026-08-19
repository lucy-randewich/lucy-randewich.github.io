import { Box } from "@mui/material";
import { shrimpAssets } from "./shrimp.constants";
import type { ShrimpDirection } from "./shrimp.types";

interface ShrimpSpriteProps {
  className: string;
  label?: string;
  style?: React.CSSProperties;
  isPartyTime?: boolean;
  isEating?: boolean;
  isMoving?: boolean;
  swimFrame?: number;
  facing?: ShrimpDirection;
}

export const ShrimpSprite = ({
  className,
  label,
  style,
  isPartyTime = false,
  isEating = false,
  isMoving = false,
  swimFrame = 0,
  facing = "right",
}: ShrimpSpriteProps) => {
  const src = isPartyTime
    ? shrimpAssets.party
    : isEating
      ? shrimpAssets.eat
      : isMoving
        ? shrimpAssets.swim[swimFrame]
        : shrimpAssets.idle;

  return (
    <Box
      component="img"
      src={src}
      className={className}
      aria-label={label}
      alt={label ?? ""}
      style={style}
      sx={{
        objectFit: "contain",
        imageRendering: "pixelated",
        transform: facing === "left" ? "scaleX(-1)" : undefined,
      }}
    />
  );
};
