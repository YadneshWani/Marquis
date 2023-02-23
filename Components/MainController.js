import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Home";
// import LoginScreen from './Login';
import ProfileScreen from "./Profile";
import CommunityScreen from "./Community";
import ActionScreen from "./ActionBottomSheet";
import ServiceScreen from "./Service";
import BottomSheetScreen from "./BottomSheetScreen";
import {
  Button,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  Ionicons,
  AntDesign,
  Feather,
  MaterialIcons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Actions from "./Actions";
import { Provider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import ActionBottomSheet from "./ActionBottomSheet";

// import { Navigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const BottomSheet = () => {
  <View
    style={{
      flex: 1,
      backgroundColor: "red",
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height,
    }}
  >
    <Text>Yadnesh </Text>
  </View>;
};
const MyTabs = () => {
  const [show, setShow] = useState(false);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
            size = focused ? size + 5 : size + 5;
          } else if (route.name === "Community") {
            iconName = focused ? "md-people-sharp" : "md-people-outline";
            size = focused ? size + 5 : size + 5;
          } else if (route.name === "Actions") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle";
            size = focused ? size + 35 : size + 35;
            color = focused ? "#6E815F" : "#6E815F";
          } else if (route.name === "Service") {
            iconName = focused ? "briefcase" : "briefcase";
            size = focused ? size + 5 : size + 5;
          } else if (route.name === "Profile") {
            iconName = focused
              ? "md-person-circle-sharp"
              : "md-person-circle-outline";
            size = focused ? size + 15 : size + 15;
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6E815F",
        inactiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: { height: 90 },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen name="Login" component={LoginScreen} />  */}
      <Tab.Screen name="Community" component={CommunityScreen} />

      <Tab.Screen
        name="BottomSheetScreen"
        component={BottomSheetScreen}
        options={({ navigation }) => ({
          tabBarStyle: { height: 60 },
          tabBarButton: (props) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MyModal");
                  // <ActionBottomSheet show={show} setShow={setShow} />;
                }}
              >
                <Ionicons name="ios-add-circle" size={55} color="#6E815F" />
              </TouchableOpacity>
              {/* <Provider>
                <View> */}
              <ActionBottomSheet show={show} setShow={setShow} />
              {/* </View>
              </Provider>  */}
            </View>
          ),
        })}
      />
      <Tab.Screen name="Service" component={ServiceScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
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

export default MyTabs;
