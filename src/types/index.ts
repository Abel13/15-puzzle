export type Position = {
  row: number;
  col: number;
};

export type Tile = {
  value: number;
  position: Position;
};

export type GameState = {
  tiles: Tile[];
  moves: number;
  isComplete: boolean;
  timeElapsed: number;
};
