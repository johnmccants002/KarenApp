import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const CTAButton = ({ title, onPress, variant }) => {
  const containerStyle =
    variant === "primary" ? styles.containerPrimary : styles.containerSecondary;

  const textStyle =
    variant === "primary" ? styles.textPrimary : styles.textSecondary;

  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerPrimary: {
    height: 60,
    backgroundColor: "purple",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  containerSecondary: {
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textPrimary: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  textSecondary: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
});
