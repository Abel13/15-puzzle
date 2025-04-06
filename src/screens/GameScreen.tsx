import React from "react";
import { GameTemplate } from "../components/templates/GameTemplate";
import { useGame } from "../hooks/useGame";

export const GameScreen: React.FC = () => {
  const { tiles, moves, timeElapsed, isGameComplete, moveTile, resetGame } =
    useGame();

  return (
    <GameTemplate
      tiles={tiles}
      moves={moves}
      timeElapsed={timeElapsed}
      isComplete={isGameComplete}
      onTilePress={moveTile}
      onReset={resetGame}
    />
  );
};
