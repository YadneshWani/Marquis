import React, { useState, useEffect } from "react";
import SVGQRCode from "react-native-qrcode-svg";
import QRCodeDisplay from "../assets/Images/QRCodeDisplay.png";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Share,
} from "react-native";
import { getSocietyData } from "../Services/SocietyRequest";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";

const Invites = ({ route }) => {
  const [userData, setUserData] = useState(route.params.userData);
  const [societyName, setSocietyName] = useState();

  let inviteCode = Math.floor(100000 + Math.random() * 900000).toString();

  //   date picker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);
  const [state, setState] = useState(false);

  let message = `${userData.name} has Invited you to Flat No.${
    userData.flat_no
  } ${societyName} on ${date.toLocaleDateString()} and your Invitation Code is ${inviteCode}`;

  const storeData = () => {
    try {
      axios({
        method: "POST",
        url: "https://marquis-backend.onrender.com/invite/addInvite",
        data: {
          invitee: userData.name,
          invitation_date: date.toLocaleDateString(),
          invitation_time: date.toLocaleTimeString(),
        },
      });
      setState(true);
    } catch (error) {
      alert(error);
      setState(false);
    }
  };

  //   share messge
  const onShare = async () => {
    storeData();

    if (state == true) {
      try {
        const result = await Share.share({
          message: message,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    //setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "ios" || "android") {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  //   date pickeer end

  async function getData() {
    const societyData = await getSocietyData();

    for (let i = 0; i < societyData.data.length; i++) {
      if (societyData.data[i].society_id == userData.society_id) {
        setSocietyName(societyData.data[i].name);
      }
    }
  }

  useEffect(() => {
    //   getHomeFeedData();
    getData();
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: "700",
            alignSelf: "center",
            fontSize: 18,
            marginTop: 40,
          }}
        >
          {userData.name}
        </Text>
        <Text style={{ alignSelf: "center", fontSize: 18, marginTop: 4 }}>
          has invited you to{" "}
        </Text>
        <Text
          style={{
            fontWeight: "700",
            alignSelf: "center",
            fontSize: 18,
            marginTop: 4,
          }}
        >
          Flat No.{userData.flat_no}
        </Text>
        <Text
          style={{
            fontWeight: "700",
            alignSelf: "center",
            fontSize: 18,
            marginTop: 4,
          }}
        >
          {societyName}
        </Text>
        <Text style={{ alignSelf: "center", marginTop: 4 }}>
          on{" "}
          {/* <Text
            style={{
              fontWeight: "700",
              alignSelf: "center",
              fontSize: 18,
              marginTop: 4,
            }}
          >
            01-Sept-2022
          </Text> */}
        </Text>

        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          //accentColor="red"

          onChange={onChange}
          style={{
            marginTop: 0,
            width: 100,
            height: 40,
            marginLeft: "36%",
            marginTop: 0,

            borderColor: "black",
          }}
        />

        <Text style={{ marginLeft: "26%", fontSize: 16 }}>
          Date Selected: {date.toLocaleDateString()}
        </Text>
        {/* </View> */}
      </View>

      <View style={styles.QRCodeStyle}>
        <SVGQRCode
          value={inviteCode}
          size={250}
          color="black"
          backgroundColor="white"
        />
      </View>

      <View>
        <ImageBackground
          source={QRCodeDisplay}
          resizeMode="cover"
          style={styles.QRcodeNumStyle}
        >
          <Text
            style={{
              fontSize: 48,
              fontWeight: "700",
              color: "white",
              alignSelf: "center",
            }}
          >
            {inviteCode}
          </Text>
        </ImageBackground>
      </View>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 388,
    height: 222,
    backgroundColor: "#DEE7D7",
  },
  QRCodeStyle: {
    alignSelf: "center",
    marginTop: 34,
  },
  QRcodeNumStyle: {
    width: 240,
    height: 80,
    marginTop: 59,
    borderRadius: 12,

    alignSelf: "center",
  },
});

export default Invites;
