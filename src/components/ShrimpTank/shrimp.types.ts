export interface TankCell {
  x: number;
  y: number;
}

export type ShrimpDirection = "left" | "right";
export type Movement = readonly [xChange: number, yChange: number];
