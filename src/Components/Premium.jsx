import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Premium({ onClose }) {
  const [spokeToManager, setSpokeToManager] = React.useState(false);
  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <FontAwesome name="times" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Upgrade to Premium</Text>
      <Text style={styles.description}>10 complaints a month</Text>

      <View style={{ flexDirection: "column", gap: 12 }}>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeText}>
            Subscribe for {`${spokeToManager ? "$5/month" : "$20/month"}`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.managerButton}
          onPress={() => setSpokeToManager(true)}
        >
          <Text style={styles.subscribeText}>Speak to Manager</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",

    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  subscribeButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  managerButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  subscribeText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Premium;
