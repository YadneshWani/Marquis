import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Actions from "./Actions";
import { Provider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import {
  Ionicons,
  AntDesign,
  Feather,
  MaterialIcons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function CustomBottomBar() {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.CustomBottomContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 18,
          marginLeft: 18,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Ionicons name="home-outline" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Community");
          }}
        >
          <Ionicons name="md-people-outline" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShow(true)}>
          <Ionicons name="ios-add-circle" size={60} color="#6E815F" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Service");
          }}
        >
          <Ionicons name="briefcase" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Ionicons name="md-person-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <Provider>
        <View>
          <Actions
            show={show}
            onDismiss={() => {
              setShow(false);
            }}
            enableBackdropDismiss
          >
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
          </Actions>

          <StatusBar style="auto" />
        </View>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  CustomBottomContainer: {
    width: "100%",
    height: 85,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
  },
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

export default CustomBottomBar;
