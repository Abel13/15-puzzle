import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Board } from "../organisms/Board";
import { GameStats } from "../molecules/GameStats";
import { Tile } from "../../types";

interface GameTemplateProps {
  tiles: Tile[];
  moves: number;
  timeElapsed: number;
  isComplete: boolean;
  onTilePress: (tile: Tile) => void;
  onReset: () => void;
}

export const GameTemplate: React.FC<GameTemplateProps> = ({
  tiles,
  moves,
  timeElapsed,
  isComplete,
  onTilePress,
  onReset,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>15 Puzzle</Text>
      <GameStats moves={moves} timeElapsed={timeElapsed} />
      <Board tiles={tiles} onTilePress={onTilePress} />
      {isComplete && (
        <View style={styles.completeContainer}>
          <Text style={styles.completeText}>Puzzle Complete!</Text>
          <TouchableOpacity style={styles.resetButton} onPress={onReset}>
            <Text style={styles.resetButtonText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      )}
      {!isComplete && (
        <TouchableOpacity style={styles.resetButton} onPress={onReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2c3e50",
  },
  completeContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  completeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    marginBottom: 10,
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: "#3498db",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
