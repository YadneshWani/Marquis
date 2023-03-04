import React from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CustomBottomBar from "./CustomBottomBar";

const Service = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Searchbar
          placeholder="Search Deal"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
        <AntDesign
          name="shoppingcart"
          size={24}
          color="#819670"
          style={{ marginTop: 20, marginLeft: 5 }}
        />
        <Feather
          name="shopping-bag"
          size={20}
          color="#819670"
          style={{ marginTop: 22, marginLeft: 5 }}
        />
      </View>
      <View style={styles.ServiceInDemandContainer}>
        <Text style={styles.Heading}>Service In Demand</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              source={require("../assets/Images/Cabs.png")}
              style={{ marginLeft: 33, width: 45, height: 43 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/Images/CabRetails.png")}
              style={{ marginLeft: 33, width: 45, height: 43 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="truck"
              size={40}
              color="black"
              style={{ marginLeft: 53 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 38,
            }}
          >
            Cabs
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 36,
            }}
          >
            Cabs Retails
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 14,
            }}
          >
            Diagnostic Tests
          </Text>
        </View>
      </View>

      <View style={styles.HomeServicesContainer}>
        <Text style={styles.Heading}>Home Services</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              source={require("../assets/Images/Rent.png")}
              style={{ marginLeft: 33, width: 45, height: 43 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/Images/PestControls.png")}
              style={{ marginLeft: 33, width: 45, height: 43 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/Images/ApplianceRepairs.png")}
              style={{ marginLeft: 33, width: 45, height: 43 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/Images/PaintingServices.png")}
              style={{ marginLeft: 33, width: 45, height: 43 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 36,
            }}
          >
            Rent
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 8,
            }}
          >
            Pest Controls
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 8,
            }}
          >
            Appliance Repair
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 8,
            }}
          >
            Painting Services
          </Text>
        </View>
      </View>

      <View style={styles.PartnerDealsContainer}>
        <Text style={styles.Heading}>Partner Deals</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              source={require("../assets/Images/MoverPacker.png")}
              style={{ marginLeft: 33, width: 45, height: 43 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/Images/WaterPurifier.png")}
              style={{ marginLeft: 55, width: 45, height: 43 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/Images/Tailoring.png")}
              style={{ marginLeft: 80, width: 45, height: 43 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 35,
            }}
          >
            Packers & Movers
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 12,
            }}
          >
            Water Purifier Rental
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 12,
            }}
          >
            Tailoring Services
          </Text>
        </View>
      </View>
      {/* <CustomBottomBar /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE7D7",
  },
  searchBar: {
    width: 241,
    height: 28,
    borderRadius: 12,
    marginTop: 16,
    marginLeft: 16,
  },

  ServiceInDemandContainer: {
    width: 352,
    height: 109,
    backgroundColor: "white",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 30,
    shadowOffset: { width: -2, height: "0.12" },
    shadowOpacity: "0.12",
  },
  HomeServicesContainer: {
    width: 352,
    height: 113,
    backgroundColor: "white",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 30,
    shadowOffset: { width: -2, height: "0.12" },
    shadowOpacity: "0.12",
  },
  PartnerDealsContainer: {
    width: 352,
    height: 145,
    backgroundColor: "white",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 30,
    shadowOffset: { width: -2, height: "0.12" },
    shadowOpacity: "0.12",
  },
  Heading: {
    fontWeight: "700",
    fontStyle: "normal",
    marginLeft: 8,
    fontSize: 16,
    lineHeight: 24,
    alignSelf: "flex-start",
    shadowOffset: { width: -2, height: "0.12" },
    shadowOpacity: "0.12",
  },
});
export default Service;
