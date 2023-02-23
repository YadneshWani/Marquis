import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const SignIn = () => {
  return (
    <View
      style={{
        width: 350,
        height: 300,
        backgroundColor: "white",
        borderRadius: 12,
        marginTop: 170,
      }}
    >
      <Text
        style={{
          width: 55,
          height: 30,
          fontSize: 20,
          alignSelf: "center",
          fontWeight: "700",
          marginTop: 10,
        }}
      >
        Login
      </Text>
      <TextInput
        style={styles.inputStyle}
        keyboardType={"number-pad"}
        placeholder="Phone Number"
      />
      <TouchableOpacity>
        <View style={styles.GetOtpBtn}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "700",
              margin: 17,
            }}
          >
            GET OTP
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "Gray",
    borderRadius: 100,
    paddingLeft: 5,
    marginTop: 4,
    borderWidth: 1,
    width: 290,
    height: 30,
    marginTop: 30,
    alignSelf: "center",
    borderColor: "#D9D9D9",
  },
  GetOtpBtn: {
    width: 120,
    height: 60,
    backgroundColor: "#6E815F",
    marginTop: 30,
    borderRadius: 12,
    alignSelf: "center",
  },
});

export default SignIn;
