import react, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
  Modal,
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
import AddHouseHold from "./AddHouseHold";
import { useNavigation } from "@react-navigation/native";
const HouseHold = ({ route }) => {
  let familyArray = [];
  let guestArray = [];
  let dailyHelpArray = [];
  let vehicleArray = [];
  let userData = [];
  let HouseHoldData = [];
  const [modalVisible, setModalVisible] = useState(false);
  const [family, setFamily] = useState([]);
  const [dailyHelp, setDailyHelp] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [guest, setGuest] = useState([]);
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [usersData, setUsersData] = useState(route?.params?.userData);

  let phoneNumber = route.params.phoneNumber;
  console.log("Household Phone numebr :" + phoneNumber);
  // const [HouseHoldData, setHouseHoldData] = useState([]);
  async function getData() {
    //userData = await getUserData();
    //const navigation = useNavigation();
    //const arr = route.params.userData;
    //userData = route.params.userData;
    //console.log("User Data ::::" + route.params.userData);

    for (let i = 0; i < usersData.data.length; i++) {
      if (usersData.data[i].user_id == route.params.userId) {
        HouseHoldData = usersData.data[i];
        setImage(usersData.data[i].profile_image);
        setName(usersData.data[i].name);
        setTitle(
          "" + usersData.data[i].wing_name + "/" + usersData.data[i].flat_no
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
    console.log("My Vehicle " + vehicle);
    console.log("Guest " + guest);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          // onRequestClose={() => {
          //   Alert.alert("Modal has been closed.");
          //   setModalVisible(!modalVisible);
          // }}
        >
          {/* ()=>setModalVisible(!modalVisible)}></TouchableWithoutFeedback> */}

          <AddHouseHold
            phoneNumber={phoneNumber}
            onDismiss={() => {
              setModalVisible(false);
            }}
          />
        </Modal>
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
                extraData={family}
                renderItem={({ item, index }) => (
                  <View>
                    <View style={styles.smallItemProfile}></View>
                    <View>
                      <Text style={styles.nameStyle}>{item.name}</Text>
                    </View>
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
                  </View>
                )}
                keyExtractor={(item, index) => index}
              />
            }
            {/* {family.map((item, index) => (
              <View style={styles.smallItemProfile}></View>
            ))} */}
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <AntDesign name="pluscircle" size={50} color="#6E815F" />
              </TouchableOpacity>
            </View>
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
            <FlatList
              //numColumns={1}
              data={dailyHelp}
              horizontal={true}
              extraData={dailyHelp}
              renderItem={({ item, index }) => (
                <View>
                  <View style={styles.smallItemProfile}></View>
                  <Text style={styles.nameStyle}>{item.name}</Text>
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
                </View>
              )}
              keyExtractor={(item, index) => index}
            />

            {/* <View style={styles.smallItemProfile}></View>
            <View style={styles.smallItemProfile}></View> */}
            <View>
              <TouchableOpacity>
                <AntDesign name="pluscircle" size={50} color="#6E815F" />
              </TouchableOpacity>
            </View>
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
                extraData={vehicle}
                renderItem={({ item, index }) => (
                  <View>
                    <View style={styles.smallItemProfile}></View>
                    <Text style={styles.nameStyle}>{item.name}</Text>
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
                  </View>
                )}
                keyExtractor={(item, index) => index}
              />
            }
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <AntDesign name="pluscircle" size={50} color="#6E815F" />
              </TouchableOpacity>
            </View>
            {/* {family.map((item, index) => (
              <View style={styles.smallItemProfile}></View>
            ))} */}
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
                extraData={guest}
                renderItem={({ item, index }) => (
                  <View>
                    <View style={styles.smallItemProfile}></View>
                    <Text style={styles.nameStyle}>{item.name}</Text>
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
                  </View>
                )}
                keyExtractor={(item, index) => index}
              />
            }
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <AntDesign name="pluscircle" size={50} color="#6E815F" />
              </TouchableOpacity>
            </View>
            {/* {family.map((item, index) => (
              <View style={styles.smallItemProfile}></View>
            ))} */}
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
