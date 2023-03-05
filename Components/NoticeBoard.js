import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";

import { getNoticeData } from "../Services/NoticeRequest";
const NoticeBoard = () => {
  const [noticeArray, setNoticeArray] = useState([]);
  async function getData() {
    const noticeData = await getNoticeData();
    setNoticeArray(noticeData.data);
    console.log(noticeData);
  }
  useEffect(() => {
    //   getHomeFeedData();
    getData();
  }, []);
  return (
    <View>
      {/* {noticeArray ? (
        <FlatList
          data={noticeArray}
          renderItem={({ item, index }) => (
            <View style={styles.NoticeContainer}>
              <Text
                style={{
                  color: "#585858",
                  marginLeft: 8,
                  marginRight: 10,
                  marginTop: 10,
                }}
                horizontal={true}
              >
                {item.description}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <ActivityIndicator size={"small "} />
      )} */}
      <ScrollView>
        <View style={styles.NoticeContainer}>
          {noticeArray ? (
            noticeArray.map((item, index) => (
              <Text
                style={{
                  color: "#585858",
                  marginLeft: 8,
                  marginRight: 10,
                  marginTop: 10,
                }}
              >
                {item.description} posted by :- {item.name}
              </Text>
            ))
          ) : (
            <ActivityIndicator size={"small "} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  NoticeContainer: {
    backgroundColor: "#FFF4D2",
    width: 352,
    height: 77,
    borderRadius: 12,
    padding: 5,
    margin: 16,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#CABE9B",
    alignSelf: "center",
  },
});
export default NoticeBoard;
