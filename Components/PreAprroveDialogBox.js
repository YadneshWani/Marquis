import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Modal } from "react-native-paper";
import OnceTab from "./OnceTab";
import FrequentlyTab from "./FrequentlyTab";

const Once = [
  {
    id: "1",
    name: "Contacts",
  },
  {
    id: "2",
    name: "Rencent Invites",
  },
  {
    id: "3",
    name: "Enter Manually",
  },
];
const PreAprroveDialogBox = ({
  modalVisible,
  onDismiss,
  enableBackdropDismiss,
}) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("Once");
  console.log(value);
  return (
    <View style={styles.container} backDropDismiss={enableBackdropDismiss}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 8,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setValue("Once");
          }}
        >
          {value == "Once" ? (
            <Text style={{ marginLeft: 10, color: "black", fontWeight: "700" }}>
              Once
            </Text>
          ) : (
            <Text style={{ marginLeft: 10, color: "#6E6E6E" }}>Once</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setValue("Frequently");
          }}
        >
          {value == "Frequently" ? (
            <Text style={{ marginLeft: 50, color: "black", fontWeight: "700" }}>
              Frequently
            </Text>
          ) : (
            <Text style={{ marginLeft: 50, color: "#6E6E6E" }}>Frequently</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={onDismiss}>
          <EvilIcons
            style={{ marginLeft: 100 }}
            name="close"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {value == "Once" ? <OnceTab /> : <FrequentlyTab />}
      {/* <Text style={{ color: "#D9D9D9" }}>
        ________________________________________
      </Text>
      <View>
        <Text style={{ color: "#6E6E6E" }}>
          Allow my guest once{" "}
          <Text style={{ color: "#1F66BA", textDecorationLine: "underline" }}>
            Today
          </Text>
        </Text>
        <Text
          style={{
            marginTop: 14,
            color: "#1F66BA",
            textDecorationLine: "underline",
            alignSelf: "center",
          }}
        >
          Advanced Options
        </Text>
        <Text style={{ marginTop: 9, color: "#6E6E6E", alignSelf: "center" }}>
          SELECT GUEST FROM
        </Text>
      </View>
      <Text style={{ color: "#D9D9D9" }}>
        ________________________________________
      </Text>
      <FlatList
        //numColumns={1}
        keyExtractor={(item) => item.id}
        data={Once}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.item}>{item.name}</Text>
              <MaterialIcons
                style={{ marginTop: 0, marginRight: 18 }}
                name="arrow-forward-ios"
                size={18}
                color="#434F39"
              />
            </TouchableOpacity>
            <Text style={{ color: "#D9D9D9" }}>
              ________________________________________
            </Text>
          </View>
        )}
      /> */}
    </View>
    // </Modal>
  );
};

export default PreAprroveDialogBox;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 220,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 150,
    margin: 50,
    shadowOffset: { width: -3, height: 0.22 },
    shadowOpacity: 0.7,
    shadowColor: "gray",
  },
  item: {
    color: "black",
    justifyContent: "space-between",
    marginLeft: 22,
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 80,
    backgroundColor: "rgba(0,0,0,0.012)",
  },
});
