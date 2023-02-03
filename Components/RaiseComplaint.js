import React from "react";
import { View, StyleSheet, Text } from "react-native";
const RaiseComplaint = () => {
  return (
    <View style={styles.container}>
      <View style={styles.complaintContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE7D7",
    alignItems: "center",
  },
  complaintContainer: {
    width: 328,
    height: 258,
    borderRadius: 12,
    backgroundColor: "white",
  },
});

export default RaiseComplaint;
