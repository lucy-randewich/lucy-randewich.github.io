import { FOOD_COUNT, GRID_COLUMNS, GRID_ROWS } from "./shrimp.constants";
import type { TankCell } from "./shrimp.types";

const cellsMatch = (first: TankCell, second?: TankCell) =>
  first.x === second?.x && first.y === second.y;

export const createFood = (blockedCell?: TankCell): TankCell[] => {
  const pellets: TankCell[] = [];

  while (pellets.length < FOOD_COUNT) {
    const pellet = {
      x: Math.floor(Math.random() * GRID_COLUMNS),
      y: Math.floor(Math.random() * GRID_ROWS),
    };

    if (
      !cellsMatch(pellet, blockedCell) &&
      !pellets.some((cell) => cellsMatch(pellet, cell))
    ) {
      pellets.push(pellet);
    }
  }

  return pellets;
};

export const clampPosition = (
  position: TankCell,
  xChange: number,
  yChange: number,
): TankCell => ({
  x: Math.max(0, Math.min(GRID_COLUMNS - 1, position.x + xChange)),
  y: Math.max(0, Math.min(GRID_ROWS - 1, position.y + yChange)),
});
