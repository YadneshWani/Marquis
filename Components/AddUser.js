import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
const AddUser = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>User Details</Text>
      <TouchableOpacity
        style={styles.EmailButtonStyle}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate("MainController");
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          {" "}
          Sign up with email{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE7D7",
    alignItems: "center",
    //opacity:0.5,
    //backgroundColor: rgba(255, 0, 0, 0.2)
  },
  HeaderText: {
    fontSize: 40,
  },
  EmailButtonStyle: {
    marginBottom: 20,
    borderRadius: 10,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 70,
    paddingRight: 70,
    flexDirection: "row",
    backgroundColor: "#002C9B",
  },
});

export default AddUser;
