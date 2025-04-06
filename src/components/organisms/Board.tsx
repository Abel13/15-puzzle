import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Tile as TileComponent } from "../atoms/Tile";
import { Tile } from "../../types";

const BOARD_SIZE = 4;
const WINDOW_WIDTH = Dimensions.get("window").width;
const BOARD_WIDTH = WINDOW_WIDTH - 40;

interface BoardProps {
  tiles: Tile[];
  onTilePress: (tile: Tile) => void;
}

export const Board: React.FC<BoardProps> = ({ tiles, onTilePress }) => {
  return (
    <View style={styles.board}>
      {tiles.map((tile) => (
        <TileComponent
          key={tile.value}
          value={tile.value}
          position={tile.position}
          onPress={() => onTilePress(tile)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: BOARD_WIDTH,
    height: BOARD_WIDTH,
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
    position: "relative",
  },
});
