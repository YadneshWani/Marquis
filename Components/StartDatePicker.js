import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const StartDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    //setDate(currentDate);
  };

  //const d = new Date(date.setDate(date.getDate() + 30));
  //console.log(d);

  const showMode = (currentMode) => {
    if (Platform.OS === "ios" || "android") {
      console.log("IOS");
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    console.log("above current mode" + currentMode);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginTop: 10,
            marginLeft: 40,
          }}
        >
          Start Date
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginTop: 10,
            marginLeft: 50,
          }}
        >
          End Date
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        {true && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onStartDateChange}
            style={{
              marginTop: 0,
              width: 85,
              height: 30,
              marginLeft: 35,
              marginTop: 5,
              backgroundColor: "#DEE7D7",
              borderColor: "black",
            }} //add this
          />
        )}

        {true && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            maximumDate={new Date(date.setDate(date.getDate() + 30))}
            minimumDate={new Date(date.setDate(date.getDate() - 30))}
            onChange={onEndDateChange}
            style={{
              marginTop: 0,
              width: 85,
              height: 30,
              marginLeft: 35,
              marginTop: 5,
              backgroundColor: "#DEE7D7",
              borderColor: "black",
            }} //add this
          />
        )}
      </View>
      {/* <Text style={{ fontSize: 16, fontWeight: "500" }}>
        {date.toLocaleString()}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({});
export default StartDatePicker;
