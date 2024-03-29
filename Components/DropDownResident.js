import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { getSocietyData } from "../Services/SocietyRequest";

const DropDownResident = ({ title, name, flatsData }) => {
  let id = 0;
  const fData = [];
  console.log("flats Data.." + flatsData);
  const [flatData, setFlatData] = useState([]);

  // setFlatData(flatsData);

  const data = [
    {
      id: 1,
      name: "Lorem Ipsum",
      total: 5,
    },
    {
      id: 2,
      name: "Lorem Ipsum",
      total: 5,
    },
    {
      id: 3,
      name: "Lorem Ipsum",
      total: 5,
    },
    {
      id: 4,
      name: "Lorem Ipsum",
      total: 5,
    },
    {
      id: 5,
      name: "Lorem Ipsum",
      total: 5,
    },
  ];
  const [showContent, setShowContent] = useState(false);
  const AnimationController = useRef(new Animated.Value(0)).current;

  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };

    Animated.timing(AnimationController, config).start();
    setShowContent(!showContent);
  };

  const arrowTransform = AnimationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 16, fontWeight: "700", marginLeft: 130 }}>
            {title}
          </Text>
          <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </Animated.View>
        </View>
      </TouchableOpacity>

      <FlatList
        data={flatsData}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            {showContent && (
              <View style={styles.body}>
                <View style={styles.bodyContentStyle}>
                  {item.image != null ? (
                    <Image
                      source={{
                        uri: item.image || item.image,
                      }}
                      style={styles.smallItemProfile}
                    />
                  ) : (
                    <View style={styles.smallItemProfile}></View>
                  )}
                  {/* <View style={styles.smallItemProfile}></View> */}
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        color: "#6F6F6F",
                        fontWeight: "500",
                        fontSize: 14,
                      }}
                    >
                      Owner
                    </Text>
                    <Text style={{ fontWeight: "700", fontSize: 16 }}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: 328,
    height: 40,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 8,
    borderRadius: 12,
    justifyContent: "space-between",
  },

  body: {
    paddingHorizontal: "2%",
    paddingVertical: "3%",
  },
  container: {
    width: "100%",
    padding: "2%",
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: "2%",
    overflow: "hidden",
  },
  smallItemProfile: {
    width: 46,
    height: 46,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    marginLeft: 12,
    marginRight: 6,
    marginTop: 10,
  },
  bodyContentStyle: {
    flexDirection: "row",
  },
});
export default DropDownResident;
