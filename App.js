import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./components/StartScreen";
import Login from "./components/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <StartScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
