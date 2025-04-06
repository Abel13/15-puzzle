import { useState, useEffect, useCallback } from "react";
import { Tile, Position } from "../types";
import {
  createInitialTiles,
  isAdjacent,
  getEmptyPosition,
  isComplete,
} from "../utils/gameLogic";

export const useGame = () => {
  const [tiles, setTiles] = useState<Tile[]>(createInitialTiles());
  const [moves, setMoves] = useState(0);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && !isGameComplete) {
      interval = setInterval(() => {
        setTimeElapsed((time) => time + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, isGameComplete]);

  const moveTile = useCallback(
    (tile: Tile) => {
      if (isGameComplete) return;

      const emptyPosition = getEmptyPosition(tiles);

      if (isAdjacent(tile.position, emptyPosition)) {
        const newTiles = tiles.map((t) => {
          if (t.value === tile.value) {
            return { ...t, position: emptyPosition };
          }
          return t;
        });

        setTiles(newTiles);
        setMoves((moves) => moves + 1);

        const completed = isComplete(newTiles);
        if (completed) {
          setIsGameComplete(true);
          setIsActive(false);
        }
      }
    },
    [tiles, isGameComplete]
  );

  const resetGame = useCallback(() => {
    setTiles(createInitialTiles());
    setMoves(0);
    setTimeElapsed(0);
    setIsGameComplete(false);
    setIsActive(true);
  }, []);

  return {
    tiles,
    moves,
    timeElapsed,
    isGameComplete,
    moveTile,
    resetGame,
  };
};
