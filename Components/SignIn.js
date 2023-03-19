import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
import { useNavigation } from "@react-navigation/native";
import { getUserData } from "../Services/SignInRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

let pno = "";
const SignIn = () => {
  let [present, setPresent] = useState("no");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [userArray, setUserArray] = useState([]);

  const [state, setState] = useState("send");
  const recaptchaVerifier = useRef(null);
  const navigation = useNavigation();
  let userData;
  let p = "no";

  async function getData() {
    userData = await getUserData();
    setUserArray(userData.data);
    console.log("phone Number " + userData.data[1].contact);
  }
  useEffect(() => {
    //   getHomeFeedData();
    getData();
    getAsyncData();
  }, []);

  const storeData = async () => {
    console.log("inside set item");
    try {
      await AsyncStorage.setItem("phone_number", pno);
    } catch (e) {
      alert(e);
    }
  };

  const getAsyncData = async () => {
    try {
      const value = await AsyncStorage.getItem("phone_number");
      console.log("value =====" + value);
      if (value !== null) {
        console.log("value " + value);
        navigation.navigate("MainController", {
          phoneNumber: value,
        });
      } else {
        console.log("value=null");
      }
    } catch (e) {
      alert(error);
    }
  };

  const phoneNumberVerify = () => {
    userArray.map((user, index) => {
      let phno = user.contact.toString();
      //pno = user.contact;
      phno = "+91" + phno;
      // console.log("Phone number of stirng " + phno);
      // console.log("inside map" + index);
      // console.log("phno " + phoneNumber);
      if (phno == phoneNumber.toString()) {
        p = "yes";
        pno = user.contact;
        // console.log("inside map if ");
        // setPresent("yes");
      }
      console.log("Household" + user.household.length);
      for (let i = 0; i < user.household.length; i++) {
        let householdPhoneNumber = user.household[i].contact;
        householdPhoneNumber = "+91" + householdPhoneNumber;
        if (householdPhoneNumber == phoneNumber.toString()) {
          console.log("yes you can log in...");
          p = "yes";
          pno = user.contact;
          break;
        }
      }
    });
    console.log("singIn " + pno);
    sendVerification();
  };
  const sendVerification = () => {
    // userArray.map((user, index) => {
    //   console.log("inside map" + index);
    //   console.log("phno " + phoneNumber);
    //   if (user.contact == phoneNumber) {
    //     setPresent("yes");
    //     console.log("inside map if ");
    //   }
    // });

    console.log(p);
    const phoneProvider = new firebase.auth.PhoneAuthProvider();

    if (p == "yes") {
      phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then(setVerificationId);
      setPhoneNumber("");
      setState("verify");
      p = "no";
    } else {
      alert("User not registered");
      setPhoneNumber("");
    }
  };

  const confirmCode = () => {
    console.log("pno " + pno);
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode("");
        navigation.navigate("MainController", {
          phoneNumber: pno,
        });
      })
      .catch((error) => {
        alert(error);
      });

    // navigation.navigate("Home");
    setState("send");
    storeData();
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
        <TouchableOpacity onPress={phoneNumberVerify}>
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
      {/* <TouchableOpacity
        onPress={navigation.navigate("MainController", {
          phoneNumber: pno,
        })}
      >
        <Text> Home </Text>
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
