import type { Movement, TankCell } from "./shrimp.types";

export const GRID_COLUMNS = 9;
export const GRID_ROWS = 5;
export const FOOD_COUNT = 1;
export const PARTY_SCORE = 67;
export const START_POSITION: TankCell = { x: 1, y: 2 };

export const MOVEMENTS: Record<string, Movement> = {
  ArrowUp: [0, -1],
  ArrowDown: [0, 1],
  ArrowLeft: [-1, 0],
  ArrowRight: [1, 0],
};

export const BUBBLE_NAMES = ["one", "two", "three", "four"] as const;

export const shrimpAssets = {
  background: "/assets/shrimp/background/tank-clear-stratum-natural-light.webp",
  bubble: "/assets/shrimp/items/bubble.png",
  pellet: "/assets/shrimp/items/pellet.png",
  idle: "/assets/shrimp/sprites/idle.png",
  eat: "/assets/shrimp/sprites/eat.png",
  party: "/assets/shrimp/sprites/party.png",
  swim: [
    "/assets/shrimp/sprites/swim-1.png",
    "/assets/shrimp/sprites/swim-2.png",
  ],
} as const;
