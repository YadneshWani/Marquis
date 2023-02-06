import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import CircleBackground from "../assets/Images/CircleBackground.png";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const HouseHold = ({}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profileStyle}>
          <View style={styles.profileIcon}></View>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                marginTop: 12,
                marginLeft: 12,
              }}
            >
              Your Name
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                marginLeft: 12,
                color: "#434F39",
              }}
            >
              BA/704
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontWeight: "400",
                  marginLeft: 12,
                  fontSize: 14,
                  color: "#1C6ECD",
                }}
              >
                share address
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* //Family Tab */}
        <View style={styles.FamilyContainer}>
          <Text style={styles.heading}>Family</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 50,
              marginLeft: 30,
              marginTop: 10,
            }}
          >
            <View style={styles.smallItemProfile}></View>
            <View style={styles.smallItemProfile}></View>
            <View>
              <TouchableOpacity>
                <AntDesign name="pluscircle" size={50} color="#6E815F" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 130,
              marginLeft: 10,
            }}
          >
            <Text style={styles.nameStyle}>Family Member</Text>
            <Text style={styles.nameStyle}>Family Member</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 150,
              marginLeft: 30,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity>
                <Ionicons
                  name="call"
                  size={24}
                  color="#00DB92"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="sharealt" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity>
                <Ionicons
                  name="call"
                  size={24}
                  color="#00DB92"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="sharealt" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Daily help tab */}

        <View style={styles.DailyHelpContainer}>
          <Text style={styles.heading}>Daily Help</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 50,
              marginLeft: 30,
              marginTop: 10,
            }}
          >
            <View style={styles.smallItemProfile}></View>
            <View style={styles.smallItemProfile}></View>
            <View>
              <TouchableOpacity>
                <AntDesign name="pluscircle" size={50} color="#6E815F" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 150,
              marginLeft: 30,
            }}
          >
            <Text style={styles.nameStyle}>Daily Help</Text>
            <Text style={styles.nameStyle}>Daily Help</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 150,
              marginLeft: 30,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity>
                <Ionicons
                  name="call"
                  size={24}
                  color="#00DB92"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="sharealt" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity>
                <Ionicons
                  name="call"
                  size={24}
                  color="#00DB92"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="sharealt" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Vehicle tab */}

        <View style={styles.MyVehicleContainer}>
          <Text style={styles.heading}>My Vehicles</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 50,
              marginLeft: 30,
              marginTop: 10,
            }}
          >
            <View style={styles.smallItemProfile}></View>
            <View style={styles.smallItemProfile}></View>
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={50} color="#6E815F" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 160,
              marginLeft: 30,
            }}
          >
            <Text style={styles.nameStyle}>Honda City</Text>
            <Text style={styles.nameStyle}>Activa</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 150,
              marginLeft: 30,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="list" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="list" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Guest */}

        <View style={styles.GuestContainer}>
          <Text style={styles.heading}>Guest</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 50,
              marginLeft: 30,
              marginTop: 10,
            }}
          >
            <View style={styles.smallItemProfile}></View>
            <View style={styles.smallItemProfile}></View>
            <View>
              <TouchableOpacity>
                <AntDesign name="pluscircle" size={50} color="#6E815F" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 130,
              marginLeft: 10,
            }}
          >
            <Text style={styles.nameStyle}>Guest Name</Text>
            <Text style={styles.nameStyle}>Guest Name</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 150,
              marginLeft: 30,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity>
                <Ionicons
                  name="call"
                  size={24}
                  color="#00DB92"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="sharealt" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity>
                <Ionicons
                  name="call"
                  size={24}
                  color="#00DB92"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="sharealt" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE7D7",
    alignItems: "center",
  },
  profileStyle: {
    width: 352,
    height: 109,
    backgroundColor: "white",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 30,
    shadowOffset: { width: -2, height: "0.12" },
    shadowOpacity: "0.12",
    flexDirection: "row",
  },
  profileIcon: {
    width: 90,
    height: 90,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    marginLeft: 12,
    marginTop: 7,
  },
  FamilyContainer: {
    width: 352,
    height: 190,
    backgroundColor: "white",
    borderRadius: 12,
    marginTop: 20,
  },
  DailyHelpContainer: {
    width: 352,
    height: 190,
    backgroundColor: "white",
    borderRadius: 12,
    marginTop: 20,
  },
  MyVehicleContainer: {
    width: 352,
    height: 190,
    backgroundColor: "white",
    borderRadius: 12,
    marginTop: 20,
  },
  GuestContainer: {
    width: 352,
    height: 190,
    backgroundColor: "white",
    borderRadius: 12,
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    marginLeft: 15,
  },
  smallItemProfile: {
    width: 50,
    height: 50,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    marginLeft: 5,
    marginRight: 6,
    marginTop: 2,
  },
  addButton: {
    width: 55,
    height: 55,
    borderRadius: 200,
    backgroundColor: "#6E815F",
  },
  nameStyle: {
    color: "#6E6E6E",
    fontWeight: "500",
    fontSize: 13,
    marginTop: 5,
  },
});
export default HouseHold;
