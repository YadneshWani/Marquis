import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Provider } from "react-native-paper";

import { View, Text, StyleSheet, Button } from "react-native";
import { BottomSheet } from "react-native-btr";
import Actions from "./Actions";
import {
  Ionicons,
  AntDesign,
  Feather,
  MaterialIcons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const ActionBottomSheet = () => {
  const [show, setShow] = useState(true);
  return (
    <Provider>
      <View>
        <Button onPress={() => setShow(true)} title="show Bottom Sheet" />
        <Actions
          show={show}
          onDismiss={() => {
            setShow(false);
          }}
          enableBackdropDismiss
        >
          <ScrollView>
            <Text style={styles.heading}>Pre Approve Entry</Text>
            <View style={styles.preApproveEntryContainer}>
              <Ionicons name="person-outline" size={40} color="#434F39" />
              <AntDesign name="car" size={40} color="#434F39" />
              <Feather name="truck" size={40} color="#434F39" />
              <Feather name="home" size={40} color="#434F39" />
            </View>
            <View style={styles.PreApproveTextStyle}>
              <Text>Guest</Text>
              <Text>Cab</Text>
              <Text>Delivery</Text>
              <Text>Visiting{"\n"}Help</Text>
            </View>

            <Text style={styles.heading}>Security</Text>
            <View style={styles.securityContainer}>
              <MaterialIcons name="security" size={40} color="#434F39" />
              <SimpleLineIcons name="envelope" size={40} color="#434F39" />
              <Feather name="truck" size={40} color="#434F39" />
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
                size={40}
                color="#434F39"
              />
            </View>
            <View style={styles.communityTextStyle}>
              <Text>Start{"\n"}Discussion</Text>
            </View>
          </ScrollView>
        </Actions>

        <StatusBar style="auto" />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    color: "#6E6E6E",
    fontSize: 18,
    fontWeight: "500",
    marginTop: 5,
    marginBottom: 18,
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
export default ActionBottomSheet;