import React from "react";
import { Dimensions, Modal, StyleSheet, Text, View } from "react-native";

const BottomSheetScreen = () => {
  return (
    <View
      style={
        {
          // position: "absolute",
          // left: 0,
          // right: 0,
          // bottom: 0,
          // top: Dimensions.get("screen").height * 0.5,
        }
      }
    >
      <View>
        <Text>Yadnesh Wani</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BottomSheetScreen;
