import React, { useState, useEffect } from "react";

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import image1 from "../assets/default_user.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { EvilIcons } from "@expo/vector-icons";
import { getUserData } from "../Services/SignInRequest";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
const typeData = [
  {
    key: "1",
    value: "Family",
  },
  {
    key: "2",
    value: "Daily Help",
  },
  {
    key: "3",
    value: "Guest",
  },
  {
    key: "4",
    value: "Vehicle",
  },
];
let userData = [];
const AddHouseHold = ({ onDismiss, phoneNumber }) => {
  const [householdImage, setHouseholdImage] = useState(null);
  const [householdName, setHouseholdName] = useState();
  const [householdType, setHouseholdType] = useState();
  const [householdContact, setHouseholdContact] = useState();
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
  const navigation = useNavigation();
  console.log("profile Phone " + phoneNumber);
  async function getData() {
    userData = await getUserData();
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
      }
    }
    //console.log("title " + title);
  }
  useEffect(() => {
    //   getHomeFeedData();
    getData();
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
      setHouseholdImage(result.uri);
    }
  };

  const postHouseHoldData = () => {
    try {
      console.log("Household Data " + householdData);

      householdData.push({
        name: householdName,
        contact: householdContact,
        type: householdType,
        image: householdImage,
      });
      axios({
        method: "POST",
        url: "https://marquis-backend.onrender.com/user/updateUser",
        data: {
          name: name,
          email_id: email,
          contact: phoneNumber,
          profile_image: image,
          flat_no: flatNo,
          wing_name: wingNo,
          floor: floor,
          society_id: societyId,
          type: type,
          user_id: userId,
          address: address,
          household: householdData,
          // .push({
          //   name: householdName,
          //   contact: householdContact,
          //   type: householdType,
          //   image: householdImage,
          // }),
        },
      });
    } catch (error) {
      console.log(error);
    }
    console.log("Image URI " + image);
    console.log("Name " + name);
    console.log("Mail ID  " + email);
    console.log("Phone Number " + phoneNumber);
    console.log("Society Name " + societyId);
    console.log("Wing Name " + wingNo);
    console.log("floor Number " + floor);
    console.log("flat Number " + flatNo);
    console.log("user Id " + userId);
    console.log("type Owner");
    console.log("Image : " + householdImage);
    console.log("Name : " + householdName);
    console.log("Type : " + householdType);
    console.log("Contact : " + householdContact);

    alert("Done Successfully..");
    //navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 16,
            //marginLeft: -20,
            //marginTop: 5,
          }}
        >
          Add HouseHold
        </Text>
        <TouchableOpacity onPress={onDismiss}>
          <EvilIcons
            style={{ marginLeft: 130 }}
            name="close"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "gray",
          borderRadius: 50,
          marginTop: 10,
          alignSelf: "center",
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 50,
            overflow: "hidden",
          }}
        >
          {image != null ? (
            <Image
              source={{ uri: householdImage || householdImage }}
              style={styles.imageStyle}
            />
          ) : (
            <Image source={image1} style={styles.imageStyle} />
          )}
        </View>
        <View style={styles.badgeStyle}>
          <TouchableOpacity onPress={pickImage}>
            <View>
              <MaterialIcons name="edit" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          placeholderTextColor="gray"
          onChangeText={setHouseholdName}
        />
        {/* <TextInput
          style={styles.inputStyle}
          placeholderTextColor="gray"
          placeholder="Type"

          //onChangeText={setMailId}
        /> */}
        <SelectList
          setSelected={(val) => {
            setHouseholdType(val);
          }}
          //onSelect={getSocietyDetail(sname)}
          data={typeData}
          save="value"
          placeholder="Type"
          boxStyles={{
            backgroundColor: "Gray",
            borderRadius: 100,
            paddingLeft: 5,
            marginTop: 15,
            borderWidth: 1,
            width: 290,
            height: 42,
            alignSelf: "center",
            borderColor: "#D9D9D9",
          }}
          inputStyles={{ color: "#D9D9D9" }}
          dropdownStyles={{ width: 280 }}
          maxHeight="80"
        />
        <TextInput
          style={styles.inputStyle}
          keyboardType={"number-pad"}
          placeholderTextColor="gray"
          placeholder="Contact"
          onChangeText={setHouseholdContact}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={postHouseHoldData}>
        <View>
          <Text style={{ fontSize: 18, color: "white", fontWeight: "700" }}>
            ADD
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddHouseHold;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 320,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 150,
    margin: 50,
    shadowOffset: { width: -3, height: 0.22 },
    shadowOpacity: 0.7,
    shadowColor: "gray",
  },
  badgeStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "gray",
    borderRadius: 50,
    padding: 5,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  inputStyle: {
    backgroundColor: "white",
    borderRadius: 100,
    paddingLeft: 5,
    marginTop: 5,
    borderWidth: 1,
    width: 290,
    height: 30,
    alignSelf: "center",
    fontWeight: 700,
    borderColor: "#D9D9D9",
  },
  addButton: {
    width: "25%",
    height: "12%",
    backgroundColor: "#6E815F",
    borderRadius: 12,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
