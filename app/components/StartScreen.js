import React, { Component } from "react";
import { LinearGradient } from 'expo-linear-gradient';

import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";

class StartScreen extends Component {
  render() {
    return (
      <View>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FFA843', 'rgba(255, 250, 124, 0.75)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}
      />
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/favicon.png")} style={styles.logo} />

        <View>
          <Text style={styles.name}>ChatYouApp</Text>

          <Text style={styles.text}>Wygraj życie!</Text>
        </View>

        <Image source={require("../assets/icon.png")} style={styles.logo2} />
      </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-around",
    height: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  name: {
    color: "white",
    textAlign: "center",
    fontSize: 35,
  },
  text: {
    color: "white",
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
