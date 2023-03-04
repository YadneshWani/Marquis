import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
const AddDiscussion = ({ route }) => {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
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
  const f1 = () => {
    axios({
      method: "POST",
      url: "https://marquis-backend.onrender.com/discussion/addDiscussion",
      data: {
        title: title,
        description: desc,
        image: image,
        author_id: route.params.userId,
      },
    });

    alert("Discussion Added Successfully..");
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
        <TouchableOpacity onPress={pickImage}>
          <Text style={{ color: "#1C6ECD" }}>Attach Photo</Text>
        </TouchableOpacity>
      </View>
      {image != null ? (
        <Image source={{ uri: image || image }} style={styles.imageStyle} />
      ) : null}

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
  imageStyle: {
    marginTop: 10,
    height: 200,
    width: 300,
  },
});
export default AddDiscussion;
