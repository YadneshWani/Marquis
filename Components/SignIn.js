import React, { useRef, useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [state, setState] = useState("send");
  const recaptchaVerifier = useRef(null);
  const navigation = useNavigation();

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);

    setPhoneNumber("");
    setState("verify");
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode("");
        navigation.navigate("MainController");
      })
      .catch((error) => {
        alert(error);
      });

    // navigation.navigate("Home");
    setState("send");
  };

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
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
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
      {state == "send" ? (
        <TextInput
          style={styles.inputStyle}
          keyboardType={"phone-pad"}
          onChangeText={setPhoneNumber}
          placeholder="Enter Phone Number with country Code"
          clearButtonMode="always"
        />
      ) : (
        <TextInput
          style={styles.inputStyle}
          //keyboardType={"number-pad"}
          onChangeText={setCode}
          placeholder="Enter the Code"
          clearButtonMode="always"
        />
      )}
      {state == "send" ? (
        <TouchableOpacity onPress={sendVerification}>
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
      ) : (
        <TouchableOpacity onPress={confirmCode}>
          <View style={styles.GetOtpBtn}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "700",
                margin: 17,
              }}
            >
              Verify
            </Text>
          </View>
        </TouchableOpacity>
      )}

      {/* <TouchableOpacity onPress={confirmCode}>
        <View style={styles.GetOtpBtn}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "700",
              margin: 17,
            }}
          >
            Verify OTP
          </Text>
        </View>
      </TouchableOpacity> */}
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
    alignItems: "center",
  },
});

export default SignIn;
