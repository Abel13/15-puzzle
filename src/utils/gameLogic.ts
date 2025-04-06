import { Position, Tile } from "../types";

export const BOARD_SIZE = 4;
const TOTAL_TILES = BOARD_SIZE * BOARD_SIZE - 1;

export const createInitialTiles = (): Tile[] => {
  const tiles: Tile[] = [];
  let numbers = Array.from({ length: TOTAL_TILES }, (_, i) => i + 1);

  // Shuffle the numbers
  numbers = shuffleArray(numbers);

  // Create tiles with positions
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (i === BOARD_SIZE - 1 && j === BOARD_SIZE - 1) continue;
      const index = i * BOARD_SIZE + j;
      tiles.push({
        value: numbers[index],
        position: { row: i, col: j },
      });
    }
  }

  // Only return solvable puzzles
  return isSolvable(tiles) ? tiles : createInitialTiles();
};

export const isSolvable = (tiles: Tile[]): boolean => {
  let inversions = 0;
  const values = tiles.map((tile) => tile.value);

  for (let i = 0; i < values.length - 1; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] > values[j]) inversions++;
    }
  }

  return inversions % 2 === 0;
};

export const isAdjacent = (pos1: Position, pos2: Position): boolean => {
  const rowDiff = Math.abs(pos1.row - pos2.row);
  const colDiff = Math.abs(pos1.col - pos2.col);
  return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
};

export const getEmptyPosition = (tiles: Tile[]): Position => {
  const positions = new Set(
    tiles.map((tile) => `${tile.position.row},${tile.position.col}`)
  );

  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (!positions.has(`${row},${col}`)) {
        return { row, col };
      }
    }
  }

  return { row: BOARD_SIZE - 1, col: BOARD_SIZE - 1 };
};

export const isComplete = (tiles: Tile[]): boolean => {
  return tiles.every((tile) => {
    const expectedValue =
      tile.position.row * BOARD_SIZE + tile.position.col + 1;
    return tile.value === expectedValue;
  });
};

const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
