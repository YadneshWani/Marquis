import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const StartDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "ios") {
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
      <View style={{}}>
        {true && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
            style={{
              marginTop: 0,
              width: 85,
              height: 30,
              marginLeft: 35,
              marginTop: 5,
              backgroundColor: "white",
              borderColor: "black",
            }} //add this
          />
        )}
      </View>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>
        {date.toLocaleString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default StartDatePicker;
