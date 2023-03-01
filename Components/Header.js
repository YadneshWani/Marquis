import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { getUserData } from "../Services/SignInRequest";
import { useEffect } from "react";

function Header({ phoneNumber }) {
  let userData = [];
  const [title, setTitle] = useState("");
  async function getData() {
    userData = await getUserData();
    console.log(userData);
    for (let i = 0; i < userData.data.length; i++) {
      //console.log("contact " + userData.data[i].contact);
      //console.log("phone Number" + phoneNumber);
      if (userData.data[i].contact == phoneNumber) {
        // console.log("inside if");
        setTitle(
          "" + userData.data[i].wing_name + "/" + userData.data[i].flat_no
        );
      }
    }
    //console.log("title " + title);
  }
  useEffect(() => {
    //   getHomeFeedData();
    getData();
  }, []);
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderTitle}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Feather
          style={{ marginTop: 10, marginRight: 10 }}
          name="search"
          size={24}
          color="black"
        />
        <TouchableOpacity>
          <View style={styles.SOSButton}>
            <MaterialCommunityIcons
              name="lightbulb-on-outline"
              size={18}
              color="white"
            />
            <Text style={{ fontWeight: "700", color: "white" }}>SOS</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    width: "100%",
    height: 49,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  HeaderTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    marginLeft: 8,
    //alignSelf:'left'
  },
  SOSButton: {
    width: 54,
    height: 28,
    backgroundColor: "#FF3D71",
    borderRadius: 4,
    alignContent: "flex-end",
    marginTop: 9,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Header;
