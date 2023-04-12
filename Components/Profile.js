import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
  Share,
} from "react-native";
import background from "../assets/Images/Background.png";
import { EvilIcons } from "@expo/vector-icons";
import CustomBottomBar from "./CustomBottomBar";
import { getUserData } from "../Services/SignInRequest";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//import { black } from "react-native-paper/lib/typescript/styles/colors";

const Profile = ({ phoneNumber }) => {
  let userData = [];
  let familyData = [];
  let vData = [];
  let imageURI;
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [wingNo, setWingNo] = useState("");
  const [floor, setFloor] = useState("");
  const [societyId, setSocietyId] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const [flat, setFlat] = useState("");
  const [householdData, setHouseHoldData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [cardState, setCardState] = useState(false);
  const [familysData, setFamilysData] = useState([]);
  const [vehicleData, setVehicleData] = useState([]);

  console.log("profile Phone " + phoneNumber);

  const getAsyncData = async () => {
    userData = await getUserData();
    // try {
    //   let uData = await AsyncStorage.getItem("userData");
    //   userData = JSON.parse(uData);
    //   console.log("JSON User Data " + uData);
    // } catch (err) {
    //   console.warn(err);
    // }
    console.log(userData);
    for (let i = 0; i < userData.data.length; i++) {
      //console.log("contact " + userData.data[i].contact);
      //console.log("phone Number" + phoneNumber);
      if (userData.data[i].contact == phoneNumber) {
        // console.log("inside if");
        setName(userData.data[i].name);
        setImage(userData.data[i].profile_image);
        setFlat(
          "" + userData.data[i].wing_name + "/" + userData.data[i].flat_no
        );
        setUserId(userData.data[i].user_id);
        setEmail(userData.data[i].email_id);
        setFlatNo(userData.data[i].flat_no);
        setWingNo(userData.data[i].wing_name);
        setFloor(userData.data[i].floor);
        setSocietyId(userData.data[i].society_id);
        setType(userData.data[i].type);
        setAddress(userData.data[i].address);
        setHouseHoldData(userData.data[i].household);
        setUsersData(userData);
      }
    }
    console.log("Household Data " + householdData);
    for (let i = 0; i < householdData.length; i++) {
      if (householdData[i].type == "Family") {
        console.log("inside family Data");
        familyData.push(householdData[i]);
      }
      if (householdData[i].type == "Vehicle") {
        vData.push(householdData[i]);
      }
    }
    console.log("Family Data " + familyData);
    setFamilysData(familyData);
    setVehicleData(vData);
  };
  useEffect(() => {
    //   getHomeFeedData();
    getAsyncData();
  }, []);

  const pickImage = async () => {
    console.log("inside");
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      imageURI = result.uri;
      updateUser();
    }
  };

  const updateUser = () => {
    console.log("inside Update ");
    axios({
      method: "POST",
      url: "https://marquis-backend.onrender.com/user/updateUser",
      data: {
        name: name,
        email_id: email,
        contact: phoneNumber,
        profile_image: imageURI,
        flat_no: flatNo,
        wing_name: wingNo,
        floor: floor,
        society_id: societyId,
        type: type,
        user_id: userId,
        address: address,
        household: householdData,
      },
    });

    console.log(name);
    console.log(email);
    console.log(phoneNumber);
    console.log(imageURI);
    console.log(flatNo);
    console.log(wingNo);
    console.log(floor);
    console.log(societyId);
    console.log(type);
    console.log(userId);
    console.log(address);
    console.log(householdData);
  };

  const logoutUser = async () => {
    try {
      await AsyncStorage.removeItem("phone_number");
      navigation.navigate("Login");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <View style={styles.container}>
      {/* profile card */}

      {!cardState ? (
        <View style={styles.profileStyle}>
          {image != null ? (
            <Image
              source={{
                uri: image || image,
              }}
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
              {flat}
            </Text>
            <Text style={{ fontWeight: "400", marginLeft: 12, fontSize: 14 }}>
              Resident
            </Text>
          </View>
          <TouchableOpacity
            style={{ marginLeft: 60, marginTop: 2 }}
            onPress={pickImage}
          >
            <ImageBackground
              source={background}
              resizeMode="cover"
              style={styles.editButton}
            >
              <EvilIcons name="pencil" size={28} color="white" />
            </ImageBackground>
          </TouchableOpacity>

          {/* profile card view Button  */}
          <TouchableOpacity
            style={{ marginLeft: -60, marginTop: 2 }}
            onPress={() => {
              setCardState(!cardState);
            }}
          >
            <ImageBackground
              source={background}
              resizeMode="cover"
              style={styles.viewButton}
            >
              <MaterialCommunityIcons
                name="card-bulleted-outline"
                size={22}
                color="white"
              />
            </ImageBackground>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.profileCardStyleContainer}>
          <View style={styles.profileCardStyle}>
            {image != null ? (
              <Image
                source={{
                  uri: image || image,
                }}
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
                {flat}
              </Text>
              <Text style={{ fontWeight: "400", marginLeft: 12, fontSize: 14 }}>
                Resident
              </Text>
            </View>
            <TouchableOpacity
              style={{ marginLeft: 60, marginTop: 2 }}
              onPress={pickImage}
            >
              <ImageBackground
                source={background}
                resizeMode="cover"
                style={styles.editButton}
              >
                <EvilIcons name="pencil" size={28} color="white" />
              </ImageBackground>
            </TouchableOpacity>

            {/* profile card view Button  */}
            <TouchableOpacity
              style={{ marginLeft: -60, marginTop: 2 }}
              onPress={() => {
                setCardState(!cardState);
              }}
            >
              <ImageBackground
                source={background}
                resizeMode="cover"
                style={styles.viewButton}
              >
                <MaterialCommunityIcons
                  name="card-bulleted-outline"
                  size={22}
                  color="white"
                />
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              // marginLeft: -15,
            }}
          ></View>

          {/* family */}

          <View>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "700",
                marginLeft: 30,
                marginTop: 10,
              }}
            >
              Family
            </Text>
            <View style={{ flexDirection: "row" }}>
              <FlatList
                //numColumns={1}
                data={familysData}
                horizontal={true}
                //extraData={familyData}
                renderItem={({ item, index }) => (
                  <View style={{ marginLeft: 30 }}>
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 15,

                        marginTop: 5,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 13,
                        color: "#6E6E6E",
                        marginTop: 5,
                      }}
                    >
                      {item.contact}
                    </Text>
                  </View>
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "#D9D9D9",
                width: 352,
                marginTop: 10,
                // marginLeft: -15,
              }}
            ></View>
          </View>

          {/* Vehicle  */}
          <View>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "700",
                marginLeft: 30,
                marginTop: 10,
              }}
            >
              Vehicle
            </Text>
            <View style={{ flexDirection: "row" }}>
              <FlatList
                //numColumns={1}
                data={vehicleData}
                horizontal={true}
                //extraData={familyData}
                renderItem={({ item, index }) => (
                  <View style={{ marginLeft: 30 }}>
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 15,

                        marginTop: 5,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 13,
                        color: "#6E6E6E",
                        marginTop: 5,
                      }}
                    >
                      {item.vehicle_number}
                    </Text>
                  </View>
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
          </View>
        </View>
      )}

      {/* </View> */}

      {/* profile card end  */}

      <View style={styles.menuItem}>
        <View style={styles.body}>
          <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HouseHold", {
                    userId: userId,
                    phoneNumber: phoneNumber,
                    userData: usersData,
                  });
                }}
              >
                <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                  Manage Household
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              marginLeft: -15,
            }}
          ></View>

          <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                My Orders
              </Text>
            </View>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              marginLeft: -15,
            }}
          ></View>

          <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                Notification Settings
              </Text>
            </View>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              marginLeft: -15,
            }}
          ></View>

          {/* <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                
              </Text>
            </View>
          </View> */}

          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              marginLeft: -15,
            }}
          ></View>

          <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                Security Alert List
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              marginLeft: -15,
            }}
          ></View>

          <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                Support & Feedback
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              marginLeft: -15,
            }}
          ></View>

          <View style={styles.bodyContentStyle}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={logoutUser}
            >
              <View style={styles.smallItemProfile}></View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <CustomBottomBar /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE7D7",
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
  editButton: {
    width: 28,
    height: 28,
    backgroundColor: "#6E815F",
    borderRadius: 12,
    alignSelf: "flex-start",
    marginLeft: -5,
    marginTop: 5,
    marginRight: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContentStyle: {
    flexDirection: "row",
    marginBottom: 8,
  },
  body: {
    paddingHorizontal: "2%",
    paddingVertical: "3%",
  },
  menuItem: {
    width: 352,
    padding: "2%",
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: "2%",
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 10,
  },
  smallItemProfile: {
    width: 46,
    height: 46,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    marginLeft: 5,
    marginRight: 6,
    marginTop: 2,
  },
  profileCardStyleContainer: {
    width: 352,
    height: 300,
    backgroundColor: "white",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 30,
    shadowOffset: { width: -2, height: "0.12" },
    shadowOpacity: "0.12",
    //flexDirection: "row",
  },
  profileCardStyle: {
    width: 352,
    height: 109,
    backgroundColor: "white",
    //borderRadius: 12,
    alignSelf: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,

    flexDirection: "row",
  },
  viewButton: {
    width: 28,
    height: 28,
    backgroundColor: "#6E815F",
    borderRadius: 12,
    alignSelf: "flex-start",
    marginLeft: 0,
    marginTop: 5,
    marginRight: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Profile;
