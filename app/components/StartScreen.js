import React, { Component } from "react";
import Login from "../components/Login";
import { NavigationActions } from "react-navigation";
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";

class StartScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/favicon.png")} style={styles.logo} />

        <View>
          <Text style={styles.name}>ChatYouApp</Text>

          <Text style={styles.text}>Wygraj życie!</Text>
        </View>

        <Image source={require("../assets/icon.png")} style={styles.logo2} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffa843",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logo: {
    width: 100,
    height: 100,
  },
  name: {
    textAlign: "center",
    fontSize: 35,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    fontStyle: "italic",
  },
  logo2: {
    width: 50,
    height: 50,
  },
});

export default StartScreen;
