import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import SignIn from "./SignIn";
import Register from "./Register";
import { getSocietyData } from "../Services/SocietyRequest";

const sData = [];
const Login = () => {
  const navigation = useNavigation();
  const [state, setState] = useState(["SignIn"]);

  //const [societyArray, setSocietyArray] = useState([]);
  let societyArray = [];
  let societyData;

  async function getData() {
    societyData = await getSocietyData();
    sData.length = 0;
    societyArray = societyData.data;
    console.log("hello " + societyArray[0]);

    for (let i = 0; i < societyArray.length; i++) {
      sData.push({
        id: i + 1,
        value: societyArray[i].name,
        society_id: societyArray[i].society_id,
      });
    }

    console.log(sData);
  }
  useEffect(() => {
    //   getHomeFeedData();
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#CCE69C", "#819670"]}
        start={[0, 0]}
        end={[100, 100]}
        locations={[0.1, 0.3]}
        style={styles.gradient}
      >
        <View>
          {state == "SignIn" ? <SignIn /> : <Register societyNames={sData} />}

          {state == "SignIn" ? (
            <View
              style={{
                alignSelf: "center",
                flexDirection: "row",
                marginTop: -40,
              }}
            >
              <Text style={{ color: "#6E6E6E", fontSize: 14 }}>
                Not a Member ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setState("Register");
                }}
              >
                <Text style={{ color: "#6267DC", fontSize: 14 }}>Register</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                alignSelf: "center",
                flexDirection: "row",
                marginTop: -30,
              }}
            >
              <Text style={{ color: "#6E6E6E", fontSize: 14 }}>
                Already Registered ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setState("SignIn");
                }}
              >
                <Text style={{ color: "#6267DC", fontSize: 14 }}>Login</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate("MainController");
            }}
          >
            <Text>Home</Text>
          </TouchableOpacity> */}
        </View>
        {/* <View
          style={{
            width: 350,
            height: 300,
            backgroundColor: "white",
            borderRadius: 12,
            marginVertical: 170,
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
          <View
            style={{ alignSelf: "center", flexDirection: "row", marginTop: 20 }}
          >
            <Text style={{ color: "#6E6E6E", fontSize: 14 }}>
              Not a Member ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={{ color: "#6267DC", fontSize: 14 }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View> */}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
  },
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

export default Login;
