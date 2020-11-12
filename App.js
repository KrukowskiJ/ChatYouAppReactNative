import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ChatList from './views/ChatList';


export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name="Chat"
              component={ChatList}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

