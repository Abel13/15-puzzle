import React from "react";
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import { Position } from "../../types";

const BOARD_SIZE = 4;
const WINDOW_WIDTH = Dimensions.get("window").width;
const TILE_SIZE = (WINDOW_WIDTH - 40) / BOARD_SIZE;
const TILE_MARGIN = 2;

interface TileProps {
  value: number;
  position: Position;
  onPress: () => void;
}

export const Tile: React.FC<TileProps> = ({ value, position, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.tile,
        {
          left: position.col * (TILE_SIZE + TILE_MARGIN * 2),
          top: position.row * (TILE_SIZE + TILE_MARGIN * 2),
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.tileText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    position: "absolute",
    width: TILE_SIZE,
    height: TILE_SIZE,
    margin: TILE_MARGIN,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  tileText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
