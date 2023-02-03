import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Provider } from "react-native-paper";

import { View, Text, StyleSheet, Button } from "react-native";
import { BottomSheet } from "react-native-btr";
import Actions from "./Actions";

const ActionBottomSheet = () => {
  const [show, setShow] = useState(true);
  return (
    <Provider>
      <View>
        <Button onPress={() => setShow(true)} title="show Bottom Sheet" />
        <Actions
          show={show}
          onDismiss={() => {
            setShow(false);
          }}
          enableBackdropDismiss
        ></Actions>

        <StatusBar style="auto" />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default ActionBottomSheet;
