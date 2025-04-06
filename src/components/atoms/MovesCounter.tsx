import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface MovesCounterProps {
  moves: number;
}

export const MovesCounter: React.FC<MovesCounterProps> = ({ moves }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Moves</Text>
      <Text style={styles.count}>{moves}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "#666",
  },
  count: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
  },
});
