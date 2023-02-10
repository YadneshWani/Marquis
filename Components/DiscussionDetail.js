import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import axios from "axios";
import { IconTruckReturn } from "@tabler/icons";
const DiscussionDetail = ({ route }) => {
  let desc = [];
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  let userArray = [];
  async function getData() {
    if (loading) {
      return;
    }
    setLoading(true);
    const discussUrl = `https://marquis-backend.onrender.com/discussion/getDiscussion/${route.params.descKey}`;
    const discussResponse = await axios.get(discussUrl);

    //data=discussResponse.data.data.description;
    userArray.push(discussResponse.data);
    setUser(userArray);
    //const array =Object.values(user);
    console.log("name " + route.params.date);

    setLoading(false);
  }

  useEffect(() => {
    //   getHomeFeedData();
    getData();
    //desc=user[0];
    //console.log(user[0].data.title);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.DiscussionContainer}>
        {user ? (
          <FlatList
            data={user}
            renderItem={({ item, index }) => (
              <View style={styles.items}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.itemProfile}></View>
                  <View>
                    <Text style={styles.itemText}>{item.data.title}</Text>
                    <View style={styles.tag}>
                      <Text
                        style={{
                          marginLeft: 8,
                          color: "white",
                          fontWeight: "700",
                          fontSize: 11,
                          alignSelf: "center",
                          alignItems: "center",
                          alignContent: "center",
                        }}
                      >
                        DISCUSSION
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.smallItemProfile}></View>
                  <View>
                    <Text
                      style={{
                        width: 300,
                        height: 16,
                        marginTop: 18,
                        marginLeft: 6,
                        color: "#6E6E6E",
                      }}
                    >
                      Started by {route.params.name} {route.params.date}
                    </Text>
                  </View>
                </View>
                <Image
                  source={require("../assets/Images/sample.png")}
                  style={{ width: 100, height: 100, alignSelf: "center" }}
                />
                <Text style={{ marginLeft: 20, marginRight: 30, marginTop: 5 }}>
                  {item.data.description}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        ) : (
          <ActivityIndicator size={"large"} />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE7D7",
    alignItems: "center",
  },
  DiscussionContainer: {
    width: 328,
    height: 270,
    borderRadius: 12,
    backgroundColor: "white",
    marginTop: 10,
  },
  items: {
    width: 352,
    height: 170,
    backgroundColor: "white",
    borderRadius: 12,
    marginTop: 8,
  },
  itemProfile: {
    width: 58,
    height: 58,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    marginLeft: 12,
    marginTop: 7,
  },
  itemText: {
    fontWeight: "700",
    lineHeight: 18,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 8,
  },
  tag: {
    width: 90,
    height: 15,
    borderRadius: 12,
    backgroundColor: "#1379D7",
    marginTop: 5,
    marginLeft: 8,
    //flexDirection:"row",
  },

  smallItemProfile: {
    width: 28,
    height: 28,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    marginLeft: 12,
    marginRight: 6,
    marginTop: 10,
  },
});
export default DiscussionDetail;
