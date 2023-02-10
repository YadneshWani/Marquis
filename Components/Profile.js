import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import background from "../assets/Images/Background.png";
import { EvilIcons } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileStyle}>
        <View style={styles.profileIcon}></View>
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
        <TouchableOpacity style={{ marginLeft: 60, marginTop: 2 }}>
          <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.editButton}
          >
            <EvilIcons name="pencil" size={35} color="white" />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.menuItem}>
        <View style={styles.body}>
          <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HouseHold");
                }}
              >
                <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                  Manage Household
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              marginLeft: -15,
            }}
          ></View>

          <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                My Orders
              </Text>
            </View>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              marginLeft: -15,
            }}
          ></View>

          <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                Notification Settings
              </Text>
            </View>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              marginLeft: -15,
            }}
          ></View>

          <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                Society Name,BA 704
              </Text>
            </View>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              marginLeft: -15,
            }}
          ></View>

          <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                Security Alert List
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              marginLeft: -15,
            }}
          ></View>

          <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                Support & Feedback
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#D9D9D9",
              width: 352,
              marginLeft: -15,
            }}
          ></View>

          <View style={styles.bodyContentStyle}>
            <View style={styles.smallItemProfile}></View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 8 }}>
                Logout
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE7D7",
  },
  profileStyle: {
    width: 352,
    height: 109,
    backgroundColor: "white",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 30,
    shadowOffset: { width: -2, height: "0.12" },
    shadowOpacity: "0.12",
    flexDirection: "row",
  },
  profileIcon: {
    width: 90,
    height: 90,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    marginLeft: 12,
    marginTop: 7,
  },
  editButton: {
    width: 35,
    height: 35,
    backgroundColor: "#6E815F",
    borderRadius: 12,
    alignSelf: "flex-start",
    marginLeft: 12,
    marginTop: 5,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContentStyle: {
    flexDirection: "row",
    marginBottom: 8,
  },
  body: {
    paddingHorizontal: "2%",
    paddingVertical: "3%",
  },
  menuItem: {
    width: 352,
    padding: "2%",
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: "2%",
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 10,
  },
  smallItemProfile: {
    width: 46,
    height: 46,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    marginLeft: 5,
    marginRight: 6,
    marginTop: 2,
  },
});
export default Profile;
