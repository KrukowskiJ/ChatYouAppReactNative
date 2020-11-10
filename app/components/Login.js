import React, {Component} from 'react';
import { SafeAreaView, View, Image, StyleSheet , Text} from 'react-native';

class Login extends Component{
    render() {
        return(
<SafeAreaView style={styles.container}>

<Image source={require("../assets/bat2.png")} style={styles.logo} />

<Text style={styles.welcome}>Welcome Back</Text>

<View style={styles.container2}>
<Text style={styles.line}>Login</Text>
<Text style={styles.line}>Password</Text>
</View>
</SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        alignItems: "center",
        height: '100%',
        backgroundColor: '#F3F3F3',
      },
    logo: {
        top: "15%",
        position: 'absolute',
        width: 113,
        height: 40,
    },
    welcome: {
        top: "25%",
      color: "#373736",
      textAlign: "center",
      fontSize: 45,
      fontStyle: "italic",
    },
    container2: {
        width: "85%",
        top: "35%",
        flex: 1,
        padding: 10,
      },
      line: {
          paddingTop: 100,
          width: "auto",
          color: "rgba(69,68,68,0.66)",
          fontSize: 50,
        padding: 4,
        borderColor: "#454444",
        borderBottomWidth: 4,
      }
  });


export default Login;