import React, {Component} from 'react';
import { SafeAreaView, View, Image, StyleSheet , Text, Button} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';


class Login extends Component{
  
  render() {
        return(
<SafeAreaView style={styles.container}>

<Image source={require("../assets/bat2.png")} style={styles.logo} />

<Text style={styles.welcome}>Welcome Back</Text>

<View style={styles.container2}>
  
  <TextInput style={styles.line1} placeholder = {'Login'} autoCapitalize = {'none'} caretHidden = {true} keyboardType = {'email-address'}>  
  </TextInput>
  <View style={styles.pass}>
  <TextInput style={styles.line2} placeholder = {'Password'} secureTextEntry={true} autoCapitalize = {'none'}>
   </TextInput>
   <TouchableOpacity style={styles.oko} onPress={() => alert('oczko')}>
      <Image source={require("../assets/oko.png")} />
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.button} onPress={() => alert('Dzaialm se, nie?')}>
    <Text style={styles.buttonText}>Log in</Text>
  </TouchableOpacity>
  
  <TouchableOpacity style={styles.regText} onPress={() => alert('A tu se dzaialm tak o')}>
    <Text style={styles.reg}>Register</Text>
  </TouchableOpacity>
    <Text style={styles.ureg}>or sign in using</Text>
  
  
  
  <View style={styles.znaczki}>

  <TouchableOpacity style={styles.buttonGoogle} onPress={() => alert('gógiel')}>
    <Image source={require("../assets/g.png")} />
  </TouchableOpacity>

  <TouchableOpacity style={styles.buttonTwitter} onPress={() => alert('ptaszek')}>
    <Image source={require("../assets/twt1.png")} />
  </TouchableOpacity>

  <TouchableOpacity style={styles.buttonFacebook} onPress={() => alert('książka twarz')}>
    <Image source={require("../assets/fb1.png")} />
  </TouchableOpacity>

  </View>
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
      textAlign: "left",
      fontSize: 45,
      fontFamily: 'NotoSansMalayalamBold',
    },
    container2: {
        width: "85%",
        top: "35%",
        flex: 1,
        padding: 10,
      },
      line1: {
          paddingTop: 0,
          paddingBottom: 5,
          marginBottom: 50,
          width: "auto",
          color: "rgba(69,68,68,0.66)",
          fontSize: 30,
          fontFamily: 'NotoSansMalayalamRegular',
          padding: 4,
          borderColor: "#454444",
          borderBottomWidth: 3,
      },
      line2: {
        //width: "auto",
        //color: "rgba(69,68,68,0.66)",
        fontSize: 30,
        fontFamily: 'NotoSansMalayalamRegular',
        padding: 4,
        width: "88%",
    },
      pass:
      {
        flexDirection: 'row',
        borderColor: "#454444",
        borderBottomWidth: 3,
        marginBottom: 50,
      },
      oko:
      {
        marginTop: "auto",
        marginBottom: "auto",
        padding: 8,
        
      },
      button:
      {
        backgroundColor: "#F09035",
        borderRadius: 5,
        padding: 20,
        //marginTop: 5,
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
        //position: "center",
        height: 60,
      },
      buttonText:
      {
        fontFamily: 'NotoSansMalayalamRegular',
        color: "white",
        fontSize: 24,
        textAlign: "center", 
      },
      regText:
      {
        padding: 10,
      },
      reg:
      {
        paddingTop: 5,
        fontFamily: 'NotoSansMalayalamRegular',
        textAlign: "center",
        fontSize: 18
      },
      ureg:
      {
        
        fontFamily: 'NotoSansMalayalamRegular',
        textAlign: "center"
      },
      znaczki:
      {
        flexDirection: 'row',
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
      },
      buttonGoogle:
      {
        
         alignItems: 'center',

      },
      buttonTwitter:
      {
        paddingLeft: 30,
      },
      buttonFacebook:
      {
        paddingLeft: 30,
      },
  });


export default Login;