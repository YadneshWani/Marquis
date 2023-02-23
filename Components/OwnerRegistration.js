import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
const OwnerRegistration = () => {
  return (
    <View>
      <TextInput style={styles.inputStyle} placeholder="Name" />
      <TextInput
        style={styles.inputStyle}
        keyboardType={"email-address"}
        placeholder="Mail ID"
      />
      <TextInput
        style={styles.inputStyle}
        keyboardType={"number-pad"}
        placeholder="Phone Number"
      />
      <TextInput
        style={styles.inputStyle}
        keyboardType={"numeric"}
        placeholder="Flat Number"
      />
      <TextInput style={styles.inputStyle} placeholder="Society Name" />
      <TextInput style={styles.inputStyle} placeholder="Wing" />
      <TextInput
        style={styles.inputStyle}
        keyboardType={"numeric"}
        placeholder="Floor"
      />
      <TouchableOpacity>
        <View style={styles.SubmitBtn}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "700",
              margin: 17,
            }}
          >
            SUBMIT
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
    marginTop: 15,
    borderWidth: 1,
    width: 290,
    height: 30,
    alignSelf: "center",
    borderColor: "#D9D9D9",
  },
  SubmitBtn: {
    width: 120,
    height: 60,
    backgroundColor: "#6E815F",
    marginTop: 30,
    borderRadius: 12,
    alignSelf: "center",
    alignItems: "center",
  },
});

export default OwnerRegistration;
