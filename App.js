import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./Components/Login";
import HomeScreen from "./Components/Home";
import DailyHelpScreen from "./Components/DailyHelp";
import InvitesScreen from "./Components/Invites";
import ViewAllScreen from "./Components/ViewAll";
import CommunicationScreen from "./Components/Communication";
import HelpDeskScreen from "./Components/HelpDesk";
import AmenitiesScreen from "./Components/Amenities";
import ResidentScreen from "./Components/Resident";

import ProfileScreen from "./Components/Profile";
import CommunityScreen from "./Components/Community";
import ActionScreen from "./Components/ActionBottomSheet";
import DirectoryScreen from "./Components/Service";
import ServiceScreen from "./Components/Service";

import EmergencyNumberScreen from "./Components/EmergencyNumber";
import MainController from "./Components/MainController";
import MainControllerScreen from "./Components/MainController";
import AddUserScreen from "./Components/AddUser";
import AddDiscussionScreen from "./Components/AddDiscussion";
import DiscussionDetailScreen from "./Components/DiscussionDetail";
import DailyHelpDetailScreen from "./Components/DailyHelpDetail";
import DocumentScreen from "./Components/Document";
import HouseHoldScreen from "./Components/HouseHold";
import { View, Dimensions, Text } from "react-native";
import BottomSheetScreen from "./Components/BottomSheetScreen";
import RegisterScreen from "./Components/Register";

import GameScreen from "./Components/Game";
import WheelScreen from "./Components/SpinTheWheel/Wheel";
import Game2048Screen from "./Components/Game2048/GameController";

//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Modal } from "react-native-paper";
import CustomBottomBar from "./Components/CustomBottomBar";
import ActionBottomSheet from "./Components/ActionBottomSheet";

const Stack = createNativeStackNavigator();
const BottomSheet = ({ show, setShow }) => {
  return <ActionBottomSheet show={show} setShow={setShow} />;
};
const MyStack = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: "Marquis" }}
            />
            <Stack.Screen
              name="MainController"
              component={MainControllerScreen}
              options={{ title: "BA/704", headerShown: false }}
            />
            <Stack.Screen
              options={{ title: "Daily Help" }}
              name="DailyHelp"
              component={DailyHelpScreen}
            />

            <Stack.Screen name="Invites" component={InvitesScreen} />
            <Stack.Screen
              options={{ title: "Activities" }}
              name="ViewAll"
              component={ViewAllScreen}
            />
            <Stack.Screen
              options={{ title: "Communications" }}
              name="Communication"
              component={CommunicationScreen}
            />
            <Stack.Screen
              options={{ title: "Help Desk" }}
              name="HelpDesk"
              component={HelpDeskScreen}
            />
            <Stack.Screen
              options={{ title: "Emergency No.s" }}
              name="EmergencyNumber"
              component={EmergencyNumberScreen}
            />
            <Stack.Screen
              options={{ title: "Amenities" }}
              name="Amenities"
              component={AmenitiesScreen}
            />
            <Stack.Screen
              options={{ title: "Residents" }}
              name="Resident"
              component={ResidentScreen}
            />
            <Stack.Screen
              options={{ title: "Modal" }}
              name="ActionBottomSheet"
              component={ActionScreen}
            />
            <Stack.Screen
              options={{ title: "Start a Discussion" }}
              name="AddDiscussion"
              component={AddDiscussionScreen}
            />
            <Stack.Screen
              options={{ title: "Discussion" }}
              name="DiscussionDetail"
              component={DiscussionDetailScreen}
            />
            <Stack.Screen
              options={{ title: "Daily Help" }}
              name="DailyHelpDetail"
              component={DailyHelpDetailScreen}
            />
            <Stack.Screen
              options={{ title: "Documents" }}
              name="Document"
              component={DocumentScreen}
            />
            <Stack.Screen
              options={{ title: "Household" }}
              name="HouseHold"
              component={HouseHoldScreen}
            />
            <Stack.Screen
              options={{ title: "Home", headerShown: false }}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{ title: "Community" }}
              name="Community"
              component={CommunityScreen}
            />
            <Stack.Screen
              options={{ title: "Service" }}
              name="Service"
              component={ServiceScreen}
            />
            <Stack.Screen
              options={{ title: "Profile" }}
              name="Profile"
              component={ProfileScreen}
            />
            <Stack.Screen
              options={{ title: "Register" }}
              name="Register"
              component={RegisterScreen}
            />
            <Stack.Screen
              options={{ title: "Games" }}
              name="Game"
              component={GameScreen}
            />
            <Stack.Screen
              options={{ title: "Spin The Wheel" }}
              name="Wheel"
              component={WheelScreen}
            />
            <Stack.Screen
              options={{ title: "2048 Game" }}
              name="GameController"
              component={Game2048Screen}
            />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              presentation: "modal",
            }}
          >
            <Stack.Screen
              name="MyModal"
              component={BottomSheetScreen}
              title="Quick Actions"
            />
          </Stack.Group>

          {/*      
      //Navigation bar */}
          {/* <Stack.Screen name="Community" component={CommunityScreen}/>
        <Stack.Screen name="Actions" component={ActionScreen}/>
        <Stack.Screen name="Directory" component={DirectoryScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        */}
        </Stack.Navigator>

        {/* {activeTab === "Home" ||
        activeTab === "Community" ||
        activeTab === "Service" ||
        activeTab === "Profile" ? (
          <CustomBottomBar activeTab={activeTab} onTabPress={handleTabPress} />
        ) : null} */}
      </NavigationContainer>
      {/* {true ? <BottomSheet show={true} setShow={setShow} /> : null} */}
      {/* <BottomNavigator/>   */}
    </SafeAreaProvider>
  );
};

export default MyStack;
