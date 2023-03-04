import react, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
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
import { getUserData } from "../Services/SignInRequest";
const HouseHold = ({ route }) => {
  let familyArray = [];
  let guestArray = [];
  let dailyHelpArray = [];
  let vehicleArray = [];
  let userData = [];
  let HouseHoldData = [];
  const [family, setFamily] = useState([]);
  const [dailyHelp, setDailyHelp] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [guest, setGuest] = useState([]);
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  // const [HouseHoldData, setHouseHoldData] = useState([]);
  async function getData() {
    userData = await getUserData();

    for (let i = 0; i < userData.data.length; i++) {
      if (userData.data[i].user_id == route.params.userId) {
        HouseHoldData = userData.data[i];
        setImage(userData.data[i].profile_image);
        setName(userData.data[i].name);
        setTitle(
          "" + userData.data[i].wing_name + "/" + userData.data[i].flat_no
        );
      }
    }
    console.log("House Hold Data " + HouseHoldData);
    console.log("household length " + HouseHoldData.household.length);

    for (let i = 0; i < HouseHoldData.household.length; i++) {
      switch (HouseHoldData.household[i].type) {
        case "Family": {
          familyArray.push({
            name: HouseHoldData.household[i].name,
            contact: HouseHoldData.household[i].contact,
          });
          break;
        }
        case "Daily Help": {
          dailyHelpArray.push({
            name: HouseHoldData.household[i].name,
            contact: HouseHoldData.household[i].contact,
          });
          break;
        }
        case "Vehicle": {
          vehicleArray.push({
            name: HouseHoldData.household[i].name,
            contact: HouseHoldData.household[i].contact,
            image: HouseHoldData.household[i].image,
          });
          break;
        }
        case "Guest": {
          guestArray.push({
            name: HouseHoldData.household[i].name,
            contact: HouseHoldData.household[i].contact,
            image: HouseHoldData.household[i].image,
          });
          break;
        }
        default: {
          console.log("no type matched");
        }
      }
      setDailyHelp(dailyHelpArray);
      setFamily(familyArray);

      setVehicle(vehicleArray);
      setGuest(guestArray);

      //console.log("family size" + familyArray.length);
    }
    console.log("family size  " + family);
    console.log("Daliy Help Size" + dailyHelp);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profileStyle}>
          {image != null ? (
            <Image
              source={{ uri: image || image }}
              style={styles.profileIcon}
            />
          ) : (
            <View style={styles.profileIcon}></View>
          )}

          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                marginTop: 12,
                marginLeft: 12,
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                marginLeft: 12,
                color: "#434F39",
              }}
            >
              {title}
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
            {
              <FlatList
                //numColumns={1}
                data={family}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <View style={styles.smallItemProfile}></View>
                )}
                keyExtractor={(item, index) => index}
              />
            }
            {/* {family.map((item, index) => (
              <View style={styles.smallItemProfile}></View>
            ))} */}
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
              marginRight: 100,
              marginLeft: 10,
            }}
          >
            {
              <FlatList
                //numColumns={1}
                data={family}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <Text style={styles.nameStyle}>{item.name}</Text>
                )}
                keyExtractor={(item, index) => index}
              />
            }
            {/* {family.map((item, index) => (
              <Text style={styles.nameStyle}>{item.name}</Text>
            ))} */}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 120,
              marginLeft: 30,
            }}
          >
            {
              <FlatList
                //numColumns={1}
                data={family}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                      marginLeft: 35,
                      //width: 50,
                    }}
                  >
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
                )}
                keyExtractor={(item, index) => index}
              />
            }
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
            {dailyHelp.length != 1 ? (
              <FlatList
                //numColumns={1}
                data={dailyHelp}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <View style={styles.smallItemProfile}></View>
                )}
                keyExtractor={(item, index) => index}
              />
            ) : (
              <View style={styles.smallItemProfile}></View>
            )}
            {/* <View style={styles.smallItemProfile}></View>
            <View style={styles.smallItemProfile}></View> */}
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
              marginRight: 10,
              marginLeft: 60,
            }}
          >
            {dailyHelp.length != 1 ? (
              <FlatList
                //numColumns={1}
                data={dailyHelp}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <Text
                    style={{
                      marginLeft: 15,
                      color: "#6E6E6E",
                      fontWeight: "500",
                      fontSize: 13,
                      marginTop: 5,
                    }}
                  >
                    {item.name}
                  </Text>
                )}
                keyExtractor={(item, index) => index}
              />
            ) : (
              <Text style={styles.nameStyle}>{dailyHelp[0].name}</Text>
            )}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 100,
              marginLeft: 30,
            }}
          >
            {dailyHelp.length != 1 ? (
              <FlatList
                //numColumns={1}
                data={dailyHelp}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                      marginLeft: 35,
                      //width: 50,
                    }}
                  >
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
                )}
                keyExtractor={(item, index) => index}
              />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  marginLeft: 35,
                  //width: 50,
                }}
              >
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
            )}
          </View>
        </View>

        {/* Vehicle */}
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
            {
              <FlatList
                //numColumns={1}
                data={vehicle}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <View style={styles.smallItemProfile}></View>
                )}
                keyExtractor={(item, index) => index}
              />
            }
            {/* {family.map((item, index) => (
              <View style={styles.smallItemProfile}></View>
            ))} */}
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
              marginRight: 100,
              marginLeft: 50,
            }}
          >
            {
              <FlatList
                //numColumns={1}
                data={vehicle}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <Text style={styles.nameStyle}>{item.name}</Text>
                )}
                keyExtractor={(item, index) => index}
              />
            }
            {/* {family.map((item, index) => (
              <Text style={styles.nameStyle}>{item.name}</Text>
            ))} */}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 120,
              marginLeft: 70,
            }}
          >
            {
              <FlatList
                //numColumns={1}
                data={vehicle}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="bell-outline"
                        size={24}
                        color="black"
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Feather name="list" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item, index) => index}
              />
            }
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
            {
              <FlatList
                //numColumns={1}
                data={guest}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <View style={styles.smallItemProfile}></View>
                )}
                keyExtractor={(item, index) => index}
              />
            }
            {/* {family.map((item, index) => (
              <View style={styles.smallItemProfile}></View>
            ))} */}
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
              marginRight: 100,
              marginLeft: 10,
            }}
          >
            {
              <FlatList
                //numColumns={1}
                data={guest}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <Text style={styles.nameStyle}>{item.name}</Text>
                )}
                keyExtractor={(item, index) => index}
              />
            }
            {/* {family.map((item, index) => (
              <Text style={styles.nameStyle}>{item.name}</Text>
            ))} */}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 120,
              marginLeft: 30,
            }}
          >
            {
              <FlatList
                //numColumns={1}
                data={guest}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                      marginLeft: 35,
                      //width: 50,
                    }}
                  >
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
                )}
                keyExtractor={(item, index) => index}
              />
            }
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
    marginLeft: 35,

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
    marginLeft: 10,
  },
});
export default HouseHold;
