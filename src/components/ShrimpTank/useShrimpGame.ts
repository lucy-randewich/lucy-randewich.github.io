import { useCallback, useEffect, useRef, useState } from "react";
import { PARTY_SCORE, START_POSITION } from "./shrimp.constants";
import { clampPosition, createFood } from "./shrimp.helpers";
import type { ShrimpDirection, TankCell } from "./shrimp.types";

export const useShrimpGame = () => {
  const [shrimpPosition, setShrimpPosition] =
    useState<TankCell>(START_POSITION);
  const [food, setFood] = useState(() => createFood(START_POSITION));
  const [score, setScore] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isEating, setIsEating] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [swimFrame, setSwimFrame] = useState(0);
  const [facing, setFacing] = useState<ShrimpDirection>("right");
  const [collectionEffect, setCollectionEffect] = useState<{
    id: number;
    position: TankCell;
  } | null>(null);
  const movementTimerRef = useRef<number | null>(null);
  const eatingTimerRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (movementTimerRef.current !== null)
      window.clearTimeout(movementTimerRef.current);
    if (eatingTimerRef.current !== null)
      window.clearTimeout(eatingTimerRef.current);
  }, []);

  const move = useCallback(
    (xChange: number, yChange: number) => {
      setHasStarted(true);
      const next = clampPosition(shrimpPosition, xChange, yChange);
      const remainingFood = food.filter(
        ({ x, y }) => x !== next.x || y !== next.y,
      );
      const atePellet = remainingFood.length !== food.length;

      if (atePellet) {
        const nextScore = score + 1;
        setScore(nextScore);
        setIsEating(true);
        if (eatingTimerRef.current !== null)
          window.clearTimeout(eatingTimerRef.current);
        eatingTimerRef.current = window.setTimeout(
          () => setIsEating(false),
          520,
        );
        setCollectionEffect({ id: Date.now(), position: next });
      }
      if (xChange !== 0) setFacing(xChange < 0 ? "left" : "right");
      setIsMoving(true);
      setSwimFrame((frame) => (frame + 1) % 2);
      if (movementTimerRef.current !== null)
        window.clearTimeout(movementTimerRef.current);
      movementTimerRef.current = window.setTimeout(
        () => setIsMoving(false),
        680,
      );
      setFood(remainingFood.length === 0 ? createFood(next) : remainingFood);
      setShrimpPosition(next);
      return atePellet;
    },
    [food, score, shrimpPosition],
  );

  const reset = useCallback(() => {
    clearTimers();
    setShrimpPosition(START_POSITION);
    setFood(createFood(START_POSITION));
    setScore(0);
    setHasStarted(false);
    setIsEating(false);
    setIsMoving(false);
    setSwimFrame(0);
    setFacing("right");
    setCollectionEffect(null);
  }, [clearTimers]);

  useEffect(() => clearTimers, [clearTimers]);

  return {
    collectionEffect,
    facing,
    food,
    hasStarted,
    isEating,
    isMoving,
    isPartyTime: score >= PARTY_SCORE,
    move,
    reset,
    score,
    shrimpPosition,
    swimFrame,
  };
};
