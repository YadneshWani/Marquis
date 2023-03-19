import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Wheel from "./SpinTheWheel/Wheel";
import SpinTheWheel from "../assets/Images/SpinTheWheel.png";
import Game2048 from "../assets/Images/2048Game.png";
import { useNavigation } from "@react-navigation/native";

const Game = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-start",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Navigation.navigate("Wheel");
            }}
          >
            <ImageBackground
              source={SpinTheWheel}
              resizeMode="cover"
              style={{
                width: 80,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.PaymentButtons}
            onPress={() => {
              Navigation.navigate("GameController");
            }}
          >
            <ImageBackground
              source={Game2048}
              resizeMode="cover"
              style={{
                width: 80,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.PaymentButtons}></TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
          <Text
            style={{
              width: 80,
              height: 60,
              fontSize: 14,
              marginLeft: 8,
              textAlign: "center",
              marginTop: 3,
            }}
          >
            Spin The Wheel
          </Text>
          <Text
            style={{
              width: 80,
              height: 60,
              fontSize: 14,
              marginLeft: 8,
              textAlign: "center",
              marginTop: 3,
            }}
          >
            2048 Game
          </Text>
          <Text
            style={{
              width: 80,
              height: 60,
              fontSize: 14,
              marginLeft: 8,
              textAlign: "center",
              marginTop: 3,
            }}
          >
            Game 3
          </Text>
        </View>
      </View>

      {/* <Wheel /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  gameBtnsContainer: {
    flexDirection: "row",
  },
  gameBtns: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },

  PaymentButtons: {
    width: 80,
    height: 60,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
    marginLeft: 8,
    marginTop: 2,
  },
});

// const styles = StyleSheet.create({
//   container: { flex: 1 },
// });

export default Game;
