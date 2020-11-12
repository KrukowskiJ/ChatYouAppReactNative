import React, { Component } from "react";
import { LinearGradient } from 'expo-linear-gradient';

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";



class StartScreen extends Component {
  componentDidMount() {

    setTimeout(() => {
      this.props.navigation.navigate('Screen2')
      }, 5000);
  }
  render() {
    return (
      <View>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FF9416', 'rgba(255, 248, 89, 0.75)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}
      />
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/bat.png")} style={styles.logo} />

        <View>
          <Text style={styles.appname}>ChatYouApp</Text>

          <Text style={styles.motto}>Wygraj życie!</Text>
        </View>
      
        <Image source={require("../assets/rak'roll.png")} style={styles.logo2} />
      </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: '100%',
  },
  logo: {
    top: 250,
    position: 'absolute',
    width: 198,
    height: 70,
  },
  appname: {
    marginTop: 20,
    color: "white",
    textAlign: "center",
    fontSize: 65,
    fontStyle: "italic",
  },
  motto: {
    color: "white",
    textAlign: "center",
    fontSize: 55,
    fontStyle: "italic",
    lineHeight: 60,
  },
  logo2: {
    bottom: 20,
    position: 'absolute',
    width: 60,
    height: 60,
  },
});

export default StartScreen;
