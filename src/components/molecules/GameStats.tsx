import React from "react";
import { StyleSheet, View } from "react-native";
import { Timer } from "../atoms/Timer";
import { MovesCounter } from "../atoms/MovesCounter";

interface GameStatsProps {
  moves: number;
  timeElapsed: number;
}

export const GameStats: React.FC<GameStatsProps> = ({ moves, timeElapsed }) => {
  return (
    <View style={styles.container}>
      <MovesCounter moves={moves} />
      <Timer seconds={timeElapsed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 20,
  },
});
