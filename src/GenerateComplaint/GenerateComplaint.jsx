import React, { useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  useWindowDimensions,
  Modal,
  StyleSheet,
  Pressable,
} from "react-native";
import { KLevels, colors } from "../data/karen";

import SegmentedControl from "@react-native-segmented-control/segmented-control";
import Premium from "../Components/Premium";

function GenerateComplaint({}) {
  const { width } = useWindowDimensions();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [showPremium, setShowPremium] = React.useState(false);

  function onClose() {
    setShowPremium(false);
  }

  function presentPaymentModal() {
    // Logic to present a payment modal to the user
    // This could be a simple alert or a custom modal component
    alert("Please subscribe to generate more complaints.");
  }

  useEffect(() => {
    console.log(`This is selected: ${KLevels[selectedIndex]}`);
  }, [selectedIndex]);
  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white", // Soft Sage Green
      }}
    >
      <View style={{ flexDirection: "column", gap: 20, paddingTop: 60 }}>
        <View
          style={{
            width: width,
            justifyContent: "center",
            height: 200,
            alignItems: "center",
          }}
        >
          {/* <Image
            source={require("../assets/images/goose.jpg")}
            style={{ height: 200, width: 200 }}
          /> */}
        </View>
        <View
          style={{
            width: width,
            justifyContent: "center",
            alignItems: "center",
            height: 200,
            gap: 20,
          }}
        >
          <Text style={{ color: "#800020" }}>Karen Level</Text>
          <SegmentedControl
            values={["1", "2", "3", "4"]}
            selectedIndex={selectedIndex}
            onChange={(event) => {
              setSelectedIndex(Number(event.nativeEvent.selectedSegmentIndex));
            }}
            tintColor="#D81B60" // Vibrant Magenta
            backgroundColor="white"
            style={{ width: width - 40 }}
          />
          <View
            style={{
              width: width - 40,
              alignItems: "center",
              justifyContent: "center",
              height: "auto",
            }}
          >
            <Text style={{ color: "black", textAlign: "center" }}>
              {KLevels[selectedIndex]}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#D81B60", // Vibrant Magenta
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          height: 60,
        }}
        onPress={() => {
          setShowPremium(true);
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Generate Complaint
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        // transparent={true}
        visible={showPremium}
        // onRequestClose={() => setShowCreateOrg(false)}
      >
        <Pressable
          style={styles.modalBackground}
          onPress={() => setShowPremium(false)}
        ></Pressable>

        <View
          style={{
            flex: 1,
            zIndex: 3,
            overflow: "hidden",
            marginTop: -10,
            alignItems: "center",
            justifyContent: "center",
            // paddingHorizontal: 20,
            position: "absolute",
            top: 80,
            left: 20,
            right: 20,
            bottom: 100,
            borderRadius: 20,
            paddingVertical: 8,
            paddingHorizontal: 4,
          }}
        >
          <Premium onClose={onClose} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#4E9ACF", // A nice shade of blue, you can adjust this
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // This makes the button rounded
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
    marginBottom: 40,
    zIndex: 99,
  },
  // Add styles for the button text
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    backgroundColor: "rgba(0, 0, 0, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
});
export default GenerateComplaint;
