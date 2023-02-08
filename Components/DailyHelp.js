import React, { useState, useEffect } from "react";

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

const helpData = [];
const DailyHelp = ({ navigation }) => {
  const [societyArray, setSocietyArray] = useState([]);
  const [helperData, setHelperData] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getData() {
    if (loading) {
      return;
    }
    setLoading(true);
    const societyData = await getSocietyData();
    setSocietyArray(societyData.data);

    societyArray.map((item) => {
      if (item.society_id == "jYzPlMP") {
        console.log("Inside New If");
        item.emergency_numbers.map((emgNo) => {
          helpData.push(emgNo);
        });
      }
    });

    // for(let i=0;i<societyArray.length;i++)
    // {
    //     if(societyData.data[i].society_id=='')
    //     {
    //       console.log("Inside if");
    //       for(let j=0;j<societyData.data[i].emergency_numbers.length;j++){
    //       helpData.push(societyData.data[i].emergency_numbers[j]);
    //       }
    //     }

    // }
    setHelperData(helpData);
    setLoading(false);
    console.log(helperData);
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
                  navigation.navigate("DailyHelpDetail", {
                    name: item.name,
                    contact: item.contact,
                  });
                }}
              >
                <Text style={styles.item}>{item.name}</Text>
                <MaterialIcons
                  style={{ marginTop: 18, marginRight: 18 }}
                  name="arrow-forward-ios"
                  size={24}
                  color="#434F39"
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
    flex: 1,
    width: 42,
    height: 420,
    backgroundColor: "white",
  },
  item: {
    fontSize: 18,
    color: "#6E6E6E",
    lineHeight: 18,
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 18,
  },
});
export default DailyHelp;
