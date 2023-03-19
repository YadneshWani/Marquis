import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  TextInput,
} from "react-native";

const items = ["1", "2", "3", "4", "5", "6", "7", "8"];
const minNumber = 1;
const maxNumber = items.length;
const Wheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [inputNumber, setInputNumber] = useState("");
  const [resultText, setResultText] = useState("");
  const [winningIndex, setWinningIndex] = useState(-1);
  const spinValue = useRef(new Animated.Value(0)).current;
  const generatedIndex =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber - 1;

  const startSpin = () => {
    setIsSpinning(true);
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start(() => {
      setIsSpinning(false);
      checkResult();
    });
  };

  const checkResult = () => {
    const inputIndex = parseInt(inputNumber) - 1;
    if (inputIndex === generatedIndex) {
      setResultText("You win!");
    } else {
      setResultText("You lose!");
    }
    setWinningIndex(generatedIndex);
  };

  const getRotation = () => {
    return spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", `360deg`],
    });
  };

  const renderItems = () => {
    const angle = 360 / items.length;
    return items.map((item, index) => {
      const rotation = index * angle;
      const color = index === winningIndex ? "green" : "black";
      return (
        <View
          key={index}
          style={[
            styles.itemContainer,
            { transform: [{ rotate: `${rotation}deg` }] },
          ]}
        >
          <Text style={[styles.itemText, { color }]}>{item}</Text>
        </View>
      );
    });
  };

  const renderButton = () => {
    // if (isSpinning) {
    //   return <Text style={styles.buttonText}>Spinning...</Text>;
    // } else {
    return (
      <TouchableOpacity onPress={startSpin} style={styles.button}>
        <Text style={styles.buttonText}>Spin</Text>
      </TouchableOpacity>
    );
    // }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.wheel, { transform: [{ rotate: getRotation() }] }]}
      >
        {renderItems()}
      </Animated.View>
      <Text style={styles.resultText}>{resultText}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a number"
        //keyboardType="numeric"
        value={inputNumber}
        onChangeText={setInputNumber}
      />
      {renderButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  wheel: {
    width: 300,
    height: 300,

    borderRadius: 150,
    borderWidth: 1,
    borderColor: "#000",
  },
  itemContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 60,
    padding: 400,
    paddingStart: 150,
  },
  button: {
    backgroundColor: "#000000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    width: 120,
    height: 120,
    alignSelf: "center",
    alignContent: "center",
    marginVertical: 150,
    marginTop: -240,
  },
  buttonText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },
});

export default Wheel;
