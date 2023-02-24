import React from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import ActionBottomSheet from "./ActionBottomSheet";
import {
  Ionicons,
  AntDesign,
  Feather,
  MaterialIcons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const BottomSheetScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text style={styles.heading}>Pre Approve Entry</Text>
      <View style={styles.preApproveEntryContainer}>
        <Ionicons name="person-outline" size={30} color="#434F39" />
        <AntDesign name="car" size={30} color="#434F39" />
        <Feather name="truck" size={30} color="#434F39" />
        <Feather name="home" size={30} color="#434F39" />
      </View>
      <View style={styles.PreApproveTextStyle}>
        <Text>Guest</Text>
        <Text>Cab</Text>
        <Text>Delivery</Text>
        <Text>Visiting{"\n"}Help</Text>
      </View>

      <Text style={styles.heading}>Security</Text>
      <View style={styles.securityContainer}>
        <MaterialIcons name="security" size={30} color="#434F39" />
        <SimpleLineIcons name="envelope" size={30} color="#434F39" />
        <Feather name="truck" size={30} color="#434F39" />
      </View>
      <View style={styles.SecurityTextStyle}>
        <Text>Security{"\n"}Alert</Text>
        <Text>Message{"\n"}Gaurd</Text>
        <Text>Allow kid{"\n"}Exit</Text>
      </View>

      <Text style={styles.heading}>Community</Text>
      <View style={styles.communityContainer}>
        <MaterialCommunityIcons
          name="message-processing-outline"
          size={30}
          color="#434F39"
        />
      </View>
      <View style={styles.communityTextStyle}>
        <Text>Start{"\n"}Discussion</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#6E6E6E",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
    marginBottom: 18,
    marginLeft: 10,
  },
  preApproveEntryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 110,
    marginLeft: 25,
  },
  PreApproveTextStyle: {
    fontWeight: 400,
    fontSize: 14,
    marginLeft: 25,
    marginTop: 10,
    justifyContent: "space-between",
    marginRight: 100,
    flexDirection: "row",
  },
  securityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 160,
    marginLeft: 25,
  },
  SecurityTextStyle: {
    fontWeight: 400,
    fontSize: 14,
    marginLeft: 25,
    marginTop: 10,
    justifyContent: "space-between",
    marginRight: 150,
    flexDirection: "row",
  },
  communityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 160,
    marginLeft: 25,
  },
  communityTextStyle: {
    fontWeight: 400,
    fontSize: 14,
    marginLeft: 25,
    marginTop: 10,
    justifyContent: "space-between",
    marginRight: 150,
    flexDirection: "row",
  },
});

export default BottomSheetScreen;
