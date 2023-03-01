import { useState, useEffect } from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownResident from "./DropDownResident";
import { RadioButton } from "react-native-paper";
import { getSocietyData } from "../Services/SocietyRequest";
import { SelectList } from "react-native-dropdown-select-list";

let flatData = [];
// const wingData = [];
const Resident = () => {
  const wData = [];

  let id = 0;

  const fData = [];
  const [value, setValue] = useState("A");
  const [selected, setSelected] = useState([]);
  const [wingData, setWingData] = useState([]);
  const [floorData, setFloorData] = useState([]);
  const [societyArray, setSoceityArray] = useState([]);
  async function getData() {
    const societyData = await getSocietyData();
    if (societyData != undefined) {
      setSoceityArray(societyData.data);

      for (let i = 0; i < societyArray.length; i++) {
        if (societyArray[i].society_id == "jYzPlMP") {
          for (let j = 0; j < societyArray[i].wings.length; j++) {
            wData.push({
              key: j + 1,
              value: societyArray[i].wings[j].name,
              floor: societyArray[i].wings[j].floor,
              flat: societyArray[i].wings[j].flat_per_floor_count,
            });
          }
        }
        setWingData(wData);
      }
    } else {
      console.log("undefined");
    }
  }
  useEffect(() => {
    //   getHomeFeedData();
    getData();
  }, []);

  const displayFloors = () => {
    let id1 = 0;
    flatData = [];
    console.log("inside display ");
    for (let j = 0; j < wingData.length; j++) {
      console.log("inside j for ");
      if (selected == wingData[j].value) {
        {
          for (let k = 0; k < wingData[j].floor; k++) {
            fData.push({
              id: ++id,
              title: k + 1 + " Floor",
              name: "lorem Ipsum",
              total: wingData[j].flat,
            });
            if (k < wingData[j].flat) {
              flatData.push({
                id: ++id1,
                name: "Lorem Ipsum",
              });
            }
          }
          // for (let i = 0; i < wingData[j].flat; i++) {
          //   flatData.push({
          //     id: ++id,
          //     name: "Lorem Ipsum",
          //   });
          // }
        }
      }
    }

    console.log("Floor Data " + flatData);
    setFloorData(fData);
  };
  // for (let i = 0; i < societyArray.length; i++) {
  //   for (let j = 0; j < societyArray[i].wings.length; j++) {
  //     if (selected == societyArray[i].wings[j].wing.name) {
  //       for (let k = 0; k < societyArray[i].wings[j].wing.floor; k++)
  //         fData.push({
  //           id: k + 1,
  //           title: k + 1 + " Floor",
  //           total: societyArray[i].wings[j].wing.flat_per_floor_count,
  //         });
  //     }
  //   }
  // }
  // console.log(fData);
  // setFloorData(fData);

  console.log("Society Array " + selected);
  console.log("Flat Data 1 " + flatData);
  //console.log("selected Data " + selected);

  // console.log(value);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.HeaderStyle}>
          <View style={styles.Profile}></View>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                marginTop: 12,
                marginLeft: 12,
              }}
            >
              Your Name
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                marginLeft: 12,
                color: "#434F39",
              }}
            >
              BA/704
            </Text>
            <Text style={{ fontWeight: "400", marginLeft: 12, fontSize: 14 }}>
              Resident
            </Text>
          </View>
        </View>

        <SelectList
          setSelected={(val) => setSelected(val)}
          data={wingData}
          save="value"
          placeholder="Select Wing"
          onSelect={displayFloors}
        />

        <FlatList
          data={floorData}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => (
            <DropDownResident
              title={item.title}
              name="1st FLoor"
              id={item.id}
              total={item.total}
              flatsData={flatData}

              // flag="true"
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE7D7",
    alignItems: "center",
  },
  HeaderStyle: {
    width: 342,
    height: 110,
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: "row",
  },
  Profile: {
    width: 70,
    height: 70,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    marginLeft: 12,
    marginTop: 12,
  },
});
export default Resident;
