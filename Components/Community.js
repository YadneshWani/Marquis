import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Community = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.discoverStyle}>
        <Text style={styles.Headings}>Discover</Text>
        <View style={{ flex: 1, flexDirection: "row", marginLeft: 30 }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              navigation.navigate("Resident");
            }}
          >
            <FontAwesome5 name="building" size={40} color="#434F39" />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1 }}>
            <Feather name="alert-triangle" size={40} color="#434F39" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, marginLeft: 0 }}
            onPress={() => {
              navigation.navigate("DailyHelp");
            }}
          >
            <MaterialCommunityIcons
              name="van-utility"
              size={40}
              color="#434F39"
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: "row", marginLeft: 0 }}>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 22,
            }}
          >
            Resident
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginRight: 10,
            }}
          >
            Emergency NO.s
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 18,
            }}
          >
            Daily Help
          </Text>
        </View>
      </View>

      <View style={styles.PaymentStyle}>
        <Text style={styles.Headings}>Payments</Text>
        <View style={{ flex: 1, flexDirection: "row", marginLeft: 30 }}>
          <TouchableOpacity style={{ flex: 1 }}>
            <MaterialIcons name="payment" size={40} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, marginRight: 120 }}>
            <MaterialCommunityIcons
              name="radio-tower"
              size={40}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: "row", marginLeft: 0 }}>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 35,
            }}
          >
            Rent
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginRight: 150,
              marginLeft: 30,
            }}
          >
            Utility Payment
          </Text>
        </View>
      </View>

      <View style={styles.EngageStyle}>
        <Text style={styles.Headings}>Engage</Text>
        <View style={{ flex: 1, flexDirection: "row", marginLeft: 50 }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              navigation.navigate("HelpDesk");
            }}
          >
            <Feather name="help-circle" size={40} color="#434F39" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              navigation.navigate("Amenities");
            }}
          >
            <FontAwesome5 name="building" size={40} color="#434F39" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 0, flex: 1 }}
            onPress={() => {
              navigation.navigate("Communication");
            }}
          >
            <MaterialCommunityIcons
              name="message-processing-outline"
              size={40}
              color="#434F39"
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: "row", marginLeft: 0 }}>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 35,
            }}
          >
            Help Desk
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 10,
            }}
          >
            Amenities
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginRight: 20,
            }}
          >
            Communications
          </Text>
        </View>

        <View style={{ flex: 1, flexDirection: "row", marginLeft: 50 }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              navigation.navigate("DailyHelp");
            }}
          >
            <MaterialCommunityIcons
              name="van-utility"
              size={40}
              color="#434F39"
            />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1 }}>
            <Ionicons name="document-outline" size={40} color="#434F39" />
          </TouchableOpacity>
          <View style={{ flex: 1 }}></View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", marginLeft: 0 }}>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 40,
            }}
          >
            Daily Help
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 28,
            }}
          >
            View All
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 40,
            }}
          ></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE7D7",
  },
  discoverStyle: {
    width: 352,
    height: 109,
    backgroundColor: "white",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 30,
    shadowOffset: { width: -2, height: "0.12" },
    shadowOpacity: "0.12",
  },
  Headings: {
    fontWeight: "700",
    fontStyle: "normal",
    marginLeft: 8,
    fontSize: 16,
    lineHeight: 24,
    alignSelf: "flex-start",
    shadowOffset: { width: -2, height: "0.12" },
    shadowOpacity: "0.12",
  },
  PaymentStyle: {
    width: 352,
    height: 109,
    backgroundColor: "white",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 30,
    shadowOffset: { width: -2, height: "0.12" },
    shadowOpacity: "0.12",
  },
  EngageStyle: {
    backgroundColor: "white",
    width: 352,
    height: 172,
    borderRadius: 12,
    //borderWidth:1,
    alignSelf: "center",
    marginTop: 30,
    shadowOffset: { width: -2, height: "0.12" },
    shadowOpacity: "0.12",
  },
});

export default Community;
