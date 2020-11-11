import { StatusBar } from "expo-status-bar";
import React, {Component} from 'react';
import StackNavigator from './app/components/StackNavigator';
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./app/components/StartScreen";
import Login from "./app/components/Login";


/*export default function App() {
  return (
    <View style={styles.container}>
      <Login />

      <StatusBar style="auto" />
    </View>
  );
}*/
export default class App extends Component {
  render() {
    return <StackNavigator />
  }
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
