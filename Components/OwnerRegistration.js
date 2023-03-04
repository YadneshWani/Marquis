import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import Toast from "react-native-simple-toast";
import { SelectList } from "react-native-dropdown-select-list";
import { getUserData } from "../Services/SignInRequest";

import { getSocietyData } from "../Services/SocietyRequest";
const OwnerRegistration = ({ societyNames, imageURI }) => {
  let societyData;
  let societyArray = [];
  let wData = [];
  let fData = [];
  let flatData = [];
  let userData = [];
  const [name, setName] = useState("");
  const [mailId, setMailId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let societyId;
  //let sname;
  let wingName = "";
  let societyName = "";
  let floorNumber;
  let flatNumber;
  let flatExists;
  async function getSocietyDetail(val) {
    societyData = await getSocietyData();
    userData = await getUserData();
    societyName = val;
    societyArray = societyData.data;
    wData.length = 0;
    for (let i = 0; i < societyArray.length; i++) {
      if (societyArray[i].name == val) {
        for (let j = 0; j < societyArray[i].wings.length; j++) {
          wData.push({
            key: j + 1,
            value: societyArray[i].wings[j].name,
            floor: societyArray[i].wings[j].floor,
            flat: societyArray[i].wings[j].flat_per_floor_count,
          });
        }
        societyId = societyArray[i].society_id;
      }
      //setWingData(wData);
    }
    console.log("Wing Details " + wData);
  }

  const getfloor = (val) => {
    fData.length = 0;
    wingName = val;
    for (let i = 0; i < wData.length; i++) {
      if (wData[i].value == val) {
        for (let j = 0; j < wData[i].floor; j++) {
          fData.push({
            key: j + 1,
            value: j + 1,
          });
        }
        // for (let j = 0; j < wData[i].flat; j++) {
        //   flatData.push({
        //     key: j + 1,
        //     value: j + 1,
        //   });
        // }
      }
    }
    console.log("floor Data " + fData);
    // console.log(flatData);
  };

  const getFlats = (val) => {
    flatData.length = 0;
    floorNumber = val;
    for (let i = 0; i < wData.length; i++) {
      if (wData[i].value == wingName) {
        for (let j = 0; j < wData[i].flat; j++) {
          flatData.push({
            key: j + 1,
            value: val * 100 + (j + 1),
          });
        }
      }
    }
    console.log("Flat Data " + flatData);
  };
  // const getSocietyDetail = () => {
  //   console.log("hello my name is yadnesh");
  // };
  console.log("names" + societyNames);
  const checkForFlatNumber = (val) => {
    //userData = await getUserData();
    console.log("inside check for flat number");
    for (let i = 0; i < userData.data.length; i++) {
      if (userData.data[i].wing_name == wingName) {
        console.log("inside check for flat if..");
        if (userData.data[i].flat_no == val) {
          console.log("inside check for flat number if .....");
          flatExists = "yes";
        }
      }
    }
  };
  const addUser = () => {
    axios({
      method: "POST",
      url: "https://marquis-backend.onrender.com/user/addUser",
      data: {
        name: name,
        email_id: mailId,
        contact: phoneNumber,
        profile_image: imageURI,
        flat_no: flatNumber,
        wing_name: wingName,
        floor: floorNumber,
        society_id: societyId,
        type: "Owner",
      },
    });
    console.log("Image URI " + imageURI);
    console.log("Name " + name);
    console.log("Mail ID  " + mailId);
    console.log("Phone Number " + phoneNumber);
    console.log("Society Name " + societyId);
    console.log("Wing Name " + wingName);
    console.log("floor Number " + floorNumber);
    console.log("flat Number " + flatNumber);
    console.log("type Owner");
    // Toast.show("User Added Successfully..");
    alert("User added Successfully...");
  };
  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        onChangeText={setName}
      />
      <TextInput
        style={styles.inputStyle}
        keyboardType={"email-address"}
        placeholder="Mail ID"
        onChangeText={setMailId}
      />
      <TextInput
        style={styles.inputStyle}
        keyboardType={"number-pad"}
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
      />
      {/* <TextInput style={styles.inputStyle} placeholder="Society Name" /> */}
      <SelectList
        setSelected={(val) => {
          getSocietyDetail(val);
          //setSociety(val);
        }}
        //onSelect={getSocietyDetail(sname)}
        data={societyNames}
        save="value"
        placeholder="Society Name"
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
        dropdownStyles={{ width: 350 }}
      />

      <SelectList
        setSelected={(val) => {
          getfloor(val);
          //setWing(val);
        }}
        data={wData}
        save="value"
        placeholder="Select Wing"
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
        dropdownStyles={{ width: 350 }}
      />
      {/* <TextInput style={styles.inputStyle} placeholder="Wing" /> */}

      <SelectList
        setSelected={(val) => {
          getFlats(val);
          //setFloor(val);
        }}
        data={fData}
        save="value"
        placeholder="Floor"
        maxHeight={100}
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
        dropdownStyles={{ width: 350 }}
      />
      {/* <TextInput
        style={styles.inputStyle}
        keyboardType={"numeric"}
        placeholder="Floor"
      />
      <TextInput
        style={styles.inputStyle}
        keyboardType={"numeric"}
        placeholder="Flat Number"
      /> */}
      <SelectList
        setSelected={(val) => {
          checkForFlatNumber(val);
          console.log("flat Exists value " + flatExists);
          if (flatExists == "yes") {
            alert("Flat Not Available");
            flatExists = "no";
            flatNumber = "";
          } else {
            flatNumber = val;
          }
        }}
        data={flatData}
        save="value"
        placeholder="Flat Number"
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
        dropdownStyles={{ width: 350 }}
        maxHeight={80}
      />
      <TouchableOpacity onPress={addUser}>
        <View style={styles.SubmitBtn}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "700",
              margin: 17,
            }}
          >
            SUBMIT
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "Gray",
    borderRadius: 100,
    paddingLeft: 5,
    marginTop: 15,
    borderWidth: 1,
    width: 290,
    height: 30,
    alignSelf: "center",
    borderColor: "#D9D9D9",
  },
  SubmitBtn: {
    width: 120,
    height: 60,
    backgroundColor: "#6E815F",
    marginTop: 30,
    borderRadius: 12,
    alignSelf: "center",
    alignItems: "center",
  },
});

export default OwnerRegistration;
