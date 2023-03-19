import { useState, useEffect } from "react";

import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownResident from "./DropDownResident";
import { RadioButton } from "react-native-paper";
import { getSocietyData } from "../Services/SocietyRequest";
import { SelectList } from "react-native-dropdown-select-list";
import { getUserData } from "../Services/SignInRequest";

let flatData = [];
let societyUserData = [];
// const wingData = [];
const Resident = ({ route }) => {
  const wData = [];
  console.log("Resident User Data " + route.params.userData);
  let id = 0;

  const fData = [];
  let societyData = [];
  let usersData = [];

  const [value, setValue] = useState("A");
  const [selected, setSelected] = useState([]);
  const [wingData, setWingData] = useState([]);
  const [floorData, setFloorData] = useState([]);
  const [societyArray, setSoceityArray] = useState([]);
  const [userData, setUserData] = useState(route.params.userData);
  async function getData() {
    societyData = await getSocietyData();
    usersData = await getUserData();

    console.log("Users Data " + usersData.data);
    if (societyData != undefined) {
      setSoceityArray(societyData.data);

      for (let i = 0; i < societyData.data.length; i++) {
        if (societyData.data[i].society_id == userData.society_id) {
          for (let j = 0; j < societyData.data[i].wings.length; j++) {
            wData.push({
              key: j + 1,
              value: societyData.data[i].wings[j].name,
              floor: societyData.data[i].wings[j].floor,
              flat: societyData.data[i].wings[j].flat_per_floor_count,
            });
          }

          setWingData(wData);
        }
      }
      societyUserData = [];
      for (let j = 0; j < usersData.data.length; j++) {
        console.log("Inside new FOr loop ...");
        if (usersData.data[j].society_id == userData.society_id) {
          console.log("inside......");

          societyUserData.push({
            id: parseInt(usersData.data[j].floor),
            name: usersData.data[j].name,
            flat_no: usersData.data[j].flat_no,
            wing: usersData.data[j].wing_name,
            image: usersData.data[j].profile_image,
          });
        }
      }
      societyUserData.sort((a, b) => (a.flat_no > b.flat_no ? 1 : -1));
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
              total: wingData[j].flat,
            });
            flatData[k] = [];
            for (let x = 0; x < societyUserData.length; x++) {
              if (selected == societyUserData[x].wing) {
                if (societyUserData[x].id == k + 1) {
                  flatData[k].push({
                    id: ++id,
                    name:
                      societyUserData[x].name +
                      " " +
                      societyUserData[x].flat_no,
                    image: societyUserData[x].image,
                  });
                }
              }
            }
            // flatData.push({
            //   id: ++id1,
            //   name: "Yadnesh Wani 503",
            // });
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

    console.log("Soceity Users Data " + societyUserData);
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

  console.log("Selected Wing " + selected);
  console.log("Flat Data  " + flatData);
  //console.log("selected Data " + selected);

  // console.log(value);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.HeaderStyle}>
          {userData.profile_image != null ? (
            <Image
              source={{
                uri: userData.profile_image || userData.profile_image,
              }}
              style={styles.Profile}
            />
          ) : (
            <View style={styles.Profile}></View>
          )}

          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                marginTop: 12,
                marginLeft: 12,
              }}
            >
              {userData.name}
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                marginLeft: 12,
                color: "#434F39",
              }}
            >
              {userData.wing_name}/{userData.flat_no}
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
          renderItem={({ item, index }) => (
            <DropDownResident
              title={item.title}
              //name="1st Floor"
              id={item.id}
              total={item.total}
              flatsData={flatData[index]}

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
