import { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { getDiscussionData } from "../Services/DiscussionRequest";
import axios from "axios";
import DiscussionDetail from "./DiscussionDetail";
import sampleImage from "../assets/Images/sample.png";
import { getUserData } from "../Services/SignInRequest";
//import { panHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler";

const Communication = ({ navigation, route }) => {
  let count = 0;
  let j = 0;
  const [user, setUser] = useState([]);
  const [feedArray, setFeedArray] = useState([]);
  const [userId, setUserId] = useState("");
  const [desc, setDesc] = useState({ data: "" });
  let authorArray = [];
  let userArray = [];
  let userData = [];
  async function getData() {
    const DiscussionData = await getDiscussionData();
    userData = await getUserData();
    setFeedArray(DiscussionData.data);
    //console.log(DiscussionData.data);

    for (let i = 0; i < userData.data.length; i++) {
      if (userData.data[i].contact == route.params.phoneNumber) {
        setUserId(userData.data[i].user_id);
      }
    }

    DiscussionData.data.forEach((item, index) =>
      authorArray.push(item.author_id)
    );
    console.log("Author " + authorArray);
    for (let i = 0; i < DiscussionData.data.length; i++) {
      const userUrl = `https://marquis-backend.onrender.com/user/getUser/${authorArray[i]}`;
      const UserResponse = await axios.get(userUrl);
      //console.log("iam here")
      if (UserResponse.data.data != null) {
        console.log("User Data " + UserResponse.data.data);

        userArray.push(UserResponse.data);
      } else {
        console.log("user is null");
        //setUser(UserResponse.data)
        //userArray.push(UserResponse.data)
      }

      console.log("User datas " + userArray);
      console.log(userUrl);
    }
    setUser(userArray);
    //console.log("Userssss Data "+user[0].data?.name);
    //console.log("user Array"+userArray[0].data.name)

    // console.log(DiscussionData.data);
  }
  useEffect(() => {
    //   getHomeFeedData();
    getData();
    user.map((item) => {
      console.log("Username Item : " + item.data.name);
    });
    //console.log("User Data "+ UserResponse.data);
    console.log("Array Size " + feedArray);
  }, []);

  const funcUserName = (authorId) => {
    let name;

    while (j < user.length) {
      name = user[j].data.name;
      j++;
      break;
    }
    // user.map((userName)=>{

    //     name=userName.data.name;
    // })
    return name;
  };

  const funcDate = (dateAndTime) => {
    let date = dateAndTime.split("T");

    return date[0];
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 17,
          marginLeft: 24,
          marginBottom: 17,
          alignSelf: "flex-start",
        }}
      >
        <Text style={{ color: "#6E6E6E" }}>Filter</Text>
        <AntDesign
          style={{ marginRight: 12, marginLeft: 3, marginTop: 2 }}
          name="caretdown"
          size={12}
          color="black"
        />
        <Text style={{ color: "#6E6E6E" }}>Date</Text>
        <AntDesign
          style={{ marginLeft: 3, marginTop: 2 }}
          name="caretdown"
          size={12}
          color="black"
        />
      </View>
      {/* //{userArray[count++].name} */}
      {feedArray ? (
        <FlatList
          data={feedArray}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DiscussionDetail", {
                  descKey: item.discussion_id,
                  name: funcUserName(feedArray[index].author_id),
                  date: funcDate(feedArray[index].createdAt),
                  image: feedArray[index].image,
                  userId: userId,
                });
              }}
            >
              {/* <DiscussionDetail DiscussionID={item}/>  */}
              <View style={styles.items}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    {feedArray[index].image != null ? (
                      <Image
                        source={{
                          uri: feedArray[index].image || feedArray[index].image,
                        }}
                        style={styles.itemProfile}
                      />
                    ) : (
                      <View style={styles.itemProfile}></View>
                    )}
                  </View>
                  <View>
                    <Text style={styles.itemText}>{item.title}</Text>
                    <View style={styles.tag}>
                      <Text
                        style={{
                          marginLeft: 8,
                          color: "white",
                          fontWeight: "700",
                          fontSize: 11,
                          alignSelf: "center",
                        }}
                      >
                        DISCUSSION
                      </Text>
                      {
                        // user.map((userName)=>{
                        //     return(<Text style={{marginLeft:14,marginTop:0,color:'#6E6E6E',width:80,height:14,fontSize:12}}>{userName.data.name}</Text>)
                        // })
                      }

                      <Text
                        style={{
                          marginLeft: 14,
                          marginTop: 0,
                          color: "#6E6E6E",
                          width: 80,
                          height: 14,
                          fontSize: 12,
                        }}
                      >
                        {funcUserName(feedArray[index].author_id)}
                      </Text>

                      <Text
                        style={{
                          marginLeft: 8,
                          marginTop: 0,
                          color: "#6E6E6E",
                          width: 80,
                          height: 14,
                          fontSize: 12,
                        }}
                      >
                        {funcDate(feedArray[index].createdAt)}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  {feedArray[index].image != null ? (
                    <Image
                      source={{
                        uri: feedArray[index].image || feedArray[index].image,
                      }}
                      style={styles.smallItemProfile}
                    />
                  ) : (
                    <View style={styles.smallItemProfile}></View>
                  )}
                  <View>
                    <Text
                      style={{
                        width: 124,
                        height: 16,
                        marginTop: 18,
                        marginLeft: 6,
                        color: "#6E6E6E",
                      }}
                    >
                      Comment Display
                    </Text>
                  </View>
                </View>
                <View style={{ marginLeft: 12, flexDirection: "row" }}>
                  <Text style={{ color: "#6E6E6E", marginLeft: 38 }}>
                    1 Comment
                  </Text>
                </View>
                <Text style={{ color: "#D9D9D9" }}>
                  _______________________________________________
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 41,
                    marginRight: 72,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome
                      name="commenting-o"
                      size={24}
                      color="#6E6E6E"
                    />
                    <Text style={{ marginLeft: 4, marginTop: 4 }}>Comment</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <MaterialCommunityIcons
                      name="share"
                      size={24}
                      color="#6E6E6E"
                    />
                    <Text style={{ marginLeft: 4, marginTop: 4 }}>Share</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginLeft: 4, marginTop: 4 }}>Hide</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <ActivityIndicator size={"small "} />
      )}

      <View style={{ marginLeft: 280, marginTop: 20 }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AddDiscussion", {
              userId: userId,
            })
          }
        >
          <Entypo name="circle-with-plus" size={80} color="#6E815F" />
        </TouchableOpacity>
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
    flexDirection: "row",
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
export default Communication;
