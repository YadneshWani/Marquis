import react, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import CircleBackground from "../assets/Images/CircleBackground.png";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import call from "react-native-phone-call";
const HouseHold = ({}) => {
  const familyArray = [];
  const guestArray = [];
  const dailyHelpArray = [];
  const vehicleArray = [];
  const [family, setFamily] = useState([]);
  const [dailyhelp, setDailyHelp] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [guest, setGuest] = useState([]);
  // const [HouseHoldData, setHouseHoldData] = useState([]);
  async function getUserData() {
    const userUrl = `https://marquis-backend.onrender.com/user/getUser/IdZ7IJB`;
    const UserResponse = await axios.get(userUrl);

    const HouseHoldData = UserResponse.data.data;
    console.log("household length " + HouseHoldData.household.length);

    for (let i = 0; i < HouseHoldData.household.length; i++) {
      switch (HouseHoldData.household[i].type) {
        case "Family": {
          familyArray.push({
            name: HouseHoldData.household[i].name,
            contact: HouseHoldData.household[i].contact,
            image: HouseHoldData.household[i].image,
          });
          break;
        }
        case "Daily Help": {
          dailyHelpArray.push({
            name: HouseHoldData.household[i].name,
            contact: HouseHoldData.household[i].contact,
            image: HouseHoldData.household[i].image,
          });
          break;
        }
        case "Vehicle": {
          vehicleArray.push({
            name: HouseHoldData.household[i].name,
            contact: HouseHoldData.household[i].contact,
            image: HouseHoldData.household[i].image,
          });
        }
        case "Guest": {
          guestArray.push({
            name: HouseHoldData.household[i].name,
            contact: HouseHoldData.household[i].contact,
            image: HouseHoldData.household[i].image,
          });
        }
        default: {
          console.log("no type matched");
        }
      }
      setFamily(familyArray);
      setDailyHelp(dailyHelpArray);
      setVehicle(vehicleArray);
      setGuest(guestArray);

      //console.log("family size" + familyArray.length);
    }
  }

  useEffect(() => {
    getUserData();
    // for (let i = 0; i < HouseHoldData.household.length; i++) {
    //   if (HouseHoldData.household[i].type == "Family") {
    //     familyArray.push({
    //       name: HouseHoldData.household[i].name,
    //       contact: HouseHoldData.household[i].contact,
    //       image: HouseHoldData.household[i].image,
    //     });
    //   } else if (HouseHoldData.household[i].type == "Daily Help") {
    //     dailyHelpArray.push({
    //       name: HouseHoldData.household[i].name,
    //       contact: HouseHoldData.household[i].contact,
    //       image: HouseHoldData.household[i].image,
    //     });
    //   } else if (HouseHoldData.household[i].type == "Vehicle") {
    //     vehicleArray.push({
    //       name: HouseHoldData.household[i].name,
    //       contact: HouseHoldData.household[i].contact,
    //       image: HouseHoldData.household[i].image,
    //     });
    //   } else if (HouseHoldData.household[i].type == "Guest") {
    //     guestArray.push({
    //       name: HouseHoldData.household[i].name,
    //       contact: HouseHoldData.household[i].contact,
    //       image: HouseHoldData.household[i].image,
    //     });
    //   } else {
    //     console.log("no type matched");
    //   }
    // }
    // setFamily(familyArray);
    // setDailyHelp(dailyHelpArray);
    // setVehicle(vehicleArray);
    // setGuest(guestArray);
  });

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

        {/* <FlatList
          //numColumns={1}
          data={familyArray}
          renderItem={({ item, index }) => ( */}
        {/* {familyArray ? (
          familyArray.map((item, index) => ( */}
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
            {family.map((item, index) => (
              <View style={styles.smallItemProfile}></View>
            ))}
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
            {family.map((item, index) => (
              <Text style={styles.nameStyle}>{item.name}</Text>
            ))}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 150,
              marginLeft: 30,
            }}
          >
            {family.map((item, index) => (
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    const contact = item.contact.toString();
                    const arg = {
                      number: contact,
                      prompt: true,
                    };
                    call(arg).catch(console.error);
                  }}
                >
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
            ))}
          </View>
        </View>
        {/* //   )}
            //   keyExtractor={(item, index) => index}
            // />
          ))
        ) : (
          <Text>Yadnesh </Text>
        )} */}

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
