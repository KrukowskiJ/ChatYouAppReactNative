import React, { Component, PureComponent } from 'react';
import { createAppContainer } from "react-navigation";
import Login from './Login';
import StartScreen from './StartScreen';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from "expo-font";
import ChatList from './ChatList';
import Chatbot from './Chatbot';
import Chatbox from './ChatBox';
import ChatConnect from './ChatConnect';
import RandUserMenu from './RandUserMenu';
import Menu from './Menu';

const MyStackNavigator = createStackNavigator(
  {
    StartScreen: {
      screen: StartScreen,
      navigationOptions: {
        headerShown: false
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false
      },
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        headerShown: false
      },
    },
    ChatMenu: {
      screen: ChatList,
      navigationOptions: {
        headerShown: false
      },
    },
    Chatbot: {
      screen: Chatbot,
      navigationOptions: {
        headerShown: false
      }
    },
    Chatbox: {
      screen: Chatbox,
      navigationOptions: {
        headerShown: false
      }
    },
    ChatConnect: {
      screen: ChatConnect,
      navigationOptions: {
        headerShown: false
      }
    },
    RandUserMenu: {
      screen: RandUserMenu,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    initialRouteName: 'Login',
  },
);
const AppContainer = createAppContainer(MyStackNavigator);

export default class StackNavigator extends React.Component {

  state = {
    loaded: false
  };
  _loadFontsAsync = async () => {
    let isLoaded = await Font.loadAsync({
      NotoSansMalayalamRegular: require("../assets/font/NotoSansMalayalam-Regular.ttf"),
      NotoSansMalayalamBold: require("../assets/font/NotoSansMalayalam-Bold.ttf")
    });
    this.setState({ loaded: isLoaded });
  };

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    return <AppContainer />;
  }
} 
