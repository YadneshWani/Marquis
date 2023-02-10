import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import axios from "axios";
const AddDiscussion = () => {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const f1 = () => {
    axios({
      method: "POST",
      url: "https://marquis-backend.onrender.com/discussion/addDiscussion",
      data: {
        title: title,
        description: desc,
        image: "iamgess",
        author_id: "IdZ7IJB",
      },
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Title </Text>
        <View
          style={{
            borderColor: "#6E6E6E",
            borderWidth: 1,
            borderRadius: 12,
            width: 307,
            Height: 75,
          }}
        >
          <TextInput
            editable
            multiline
            numberOfLines={10}
            maxLength={40}
            onChangeText={(Title) => setTitle(Title)}
            value={title}
            style={{ padding: 10 }}
          />
        </View>
      </View>
      <View>
        <Text>Description</Text>
        <View
          style={{
            borderColor: "#6E6E6E",
            borderWidth: 1,
            borderRadius: 12,
            width: 307,
            Height: 75,
          }}
        >
          <TextInput
            editable
            multiline
            numberOfLines={10}
            maxLength={255}
            onChangeText={(Desc) => setDesc(Desc)}
            value={desc}
            style={{ padding: 10 }}
          />
        </View>
      </View>

      <View style={{ marginTop: 10, marginRight: 220 }}>
        <TouchableOpacity>
          <Text style={{ color: "#1C6ECD" }}>Attach Photo</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={f1}>
        <View style={styles.SubmitButton}>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "white",
              fontWeight: "700",
              margin: 7,
            }}
          >
            Submit
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE7D7",
    alignItems: "center",
  },
  SubmitButton: {
    width: 110,
    height: 41,
    backgroundColor: "#6E815F",
    borderRadius: 12,
    marginTop: 20,
  },
});
export default AddDiscussion;
