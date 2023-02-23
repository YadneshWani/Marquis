import react, { useState } from "react";

import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import OwnerRegistration from "./OwnerRegistration";
import TenantRegistration from "./TenantRegistration";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import image1 from "../assets/default_user.jpg";
const Register = () => {
  const [state, setState] = useState("Owner");
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    console.log("inside");
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View
      style={{
        width: 350,
        height: 630,
        backgroundColor: "white",
        borderRadius: 12,
        marginTop: 70,
      }}
    >
      <Text
        style={{
          width: 115,
          height: 30,
          fontSize: 20,
          alignSelf: "center",
          fontWeight: "700",
          marginTop: 10,
        }}
      >
        Registration
      </Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "gray",
          borderRadius: 50,
          marginTop: 10,
          alignSelf: "center",
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 50,
            overflow: "hidden",
          }}
        >
          {image != null ? (
            <Image source={{ uri: image || image }} style={styles.imageStyle} />
          ) : (
            <Image source={image1} style={styles.imageStyle} />
          )}
        </View>
        <View style={styles.badgeStyle}>
          <TouchableOpacity onPress={pickImage}>
            <View>
              <MaterialIcons name="edit" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 100,
          marginLeft: 100,
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setState("Owner");
          }}
        >
          {state == "Owner" ? (
            <View style={styles.selector}>
              <Text style={{ color: "white", fontWeight: "500" }}>Owner</Text>
            </View>
          ) : (
            <Text>Owner</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setState("Tenant");
          }}
        >
          {state == "Tenant" ? (
            <View style={styles.selector}>
              <Text style={{ color: "white", fontWeight: "500" }}>Tenant</Text>
            </View>
          ) : (
            <Text>Tenant</Text>
          )}
        </TouchableOpacity>
      </View>

      {state == "Owner" ? <OwnerRegistration /> : <TenantRegistration />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
  },
  inputStyle: {
    backgroundColor: "Gray",
    borderRadius: 100,
    paddingLeft: 5,
    marginTop: 15,
    borderWidth: 1,
    width: 290,
    height: 30,
    alignSelf: "center",
    borderColor: "#D9D9D9",
  },
  selector: {
    width: 70,
    height: 18,
    backgroundColor: "#6E815F",
    borderRadius: 100,
    alignItems: "center",
  },
  badgeStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "gray",
    borderRadius: 50,
    padding: 5,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Register;
