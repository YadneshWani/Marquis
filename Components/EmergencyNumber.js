import { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { getSocietyData } from "../Services/SocietyRequest";
import { ActivityIndicator } from "react-native-paper";
import call from "react-native-phone-call";

let helperData = [];
const EmergencyNumber = () => {
  const [societyArray, setSocietyArray] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getData() {
    if (loading) {
      return;
    }
    setLoading(true);

    const societyData = await getSocietyData();
    setSocietyArray(societyData.data);
    setLoading(false);
    for (let i = 0; i < societyArray.length; i++) {
      if (societyData.data[i].society_id == "6YjbJ6i") {
        //console.log("Inside if");
        for (let j = 0; j < societyData.data[i].emergency_numbers.length; j++) {
          helperData.push(societyData.data[i].emergency_numbers[j]);
        }
      }
    }
  }
  useEffect(() => {
    //   getHomeFeedData();
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {/* <View style={styles.ListItem}> */}

      {!loading ? (
        <FlatList
          //numColumns={1}
          data={helperData}
          renderItem={({ item, index }) => (
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onPress={() => {
                  const contact = item.contact.toString();
                  const arg = {
                    number: contact,
                    prompt: true,
                  };
                  call(arg).catch(console.error);
                }}
              >
                <Text style={styles.item}>{item.name}</Text>
                <MaterialIcons
                  name="local-phone"
                  size={28}
                  color="#00DB92"
                  style={{ margin: 15 }}
                />
              </TouchableOpacity>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: "#D9D9D9",
                  width: 380,
                  marginLeft: -15,
                }}
              ></View>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <ActivityIndicator size={"large"} />
      )}
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  ListItem: {
    width: 338,
    height: 420,
    backgroundColor: "white",
    borderRadius: 12,
    marginTop: 12,
  },
  item: {
    fontSize: 18,
    color: "#6E6E6E",
    lineHeight: 18,
    justifyContent: "space-between",
    marginTop: 18,
    marginLeft: 22,
    marginBottom: 18,
  },
});
export default EmergencyNumber;
