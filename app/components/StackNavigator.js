import React, {Component, PureComponent} from 'react';
import { createAppContainer } from "react-navigation"; 
import Login from './Login';  
import StartScreen from './StartScreen'; 
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from "expo-font";
import ChatList from './ChatList';

const MyStackNavigator = createStackNavigator(
    {
      Home: {
      screen: StartScreen,
      navigationOptions: {
        headerShown: false
      },
    },
    Screen2: {
      screen: Login,
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
  },
    {
        initialRouteName: 'ChatMenu',
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
    this.setState({ loaded: isLoaded});
  };

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    return <AppContainer />;
  }
} 
