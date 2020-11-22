import React, { Component, useState }  from "react";
import { LinearGradient } from 'expo-linear-gradient';

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
  ScrollView,
  Picker,
  CheckBox,
  Button,
} from "react-native";
import { color } from "react-native-reanimated";

//import { CheckBox } from 'react-native-elements'



class Blok extends React.Component {
  render() {
    return (
      <View style = {styles.pojemnikNaInput}>
       <Text style = {{fontSize: 14,fontWeight: 'bold'} }>{this.props.myText}</Text>
        <View style = {styles.textInput}>
          <TextInput>
            <Text style = {{color: "#A0A0A0"}}>{this.props.myHint}</Text>
          </TextInput>
      </View>

   </View>
    );
  }
}



const CheckFunction = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.containerCheck}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>I confirm thai I have read, consent and agree to
 <Text style = {{color: "#F09035"}}> User Agreement</Text> and <Text style = {{color: "#F09035"}}>Privacy Policy.</Text> </Text>
      </View>
      <Text style = {{textAlign: "center"}}>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
    </View>
  );
};





const Rozwijane = props  => {
  const [selectedValue, setSelectedValue] = useState(""); 

  
  return (

    <View style = {styles.pojemnikNaInput}>
    <Text style = {{fontSize: 14,fontWeight: 'bold'} }>{props.myText}</Text>
  <View style={styles.rozwijaneContainer}>
    <Picker
      selectedValue={selectedValue}
      style={{ height: 50, width: '100%',left: 0}}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
      <Picker.Item label="" value="" />
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  </View>

</View>
);

}



export default function Registrationn() {




  return (
   
    <SafeAreaView style = {styles.coos} contentContainerStyle={{flex:1}}  >
      
    <ScrollView style = {styles.scrollView}  >   

      <View style = {styles.container} >




        <View style = {styles.gora}>
        
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
          <View style = {styles.mainTextContainer}>
            <Text style = {styles.inTouchInscription}>inTouch</Text>
            <Text style = {styles.welcomeInscription}>Welcome to inTouch</Text>
          </View>
        </View>


        <View style = {styles.pojemnik}>
            <View style = {{top: '3%', }}>
             <Text style = {{left: '15%', fontSize: 25,fontWeight: 'bold'} }>Create an Acount </Text>
           </View>
        

      
        <View style = {styles.opusc}></View>

          
          <Blok myText = "First Name"/>
          <Blok myText = "Last Name"/>
          <Blok myText = "Password"/>
          <Blok myText = "Phone Number"/>
          <Blok myText = "E-mail"/>
          <Blok myText = "Birth Date" myHint = "DD-MM-YYYY"/>
         
          <Rozwijane myText = "Country"></Rozwijane>
          <Rozwijane myText =  "Disease status"/>
          <Rozwijane myText = "Type of Cancer"/>

          <Blok myText = "We are almost done.
Take Your time to write something about You for other users." /> 

          <CheckFunction/>

          <View style = {styles.button}>
          <Button style
            title="Register"
            color="#F09035"
            accessibilityLabel="Learn more about this purple button"
          />
          </View>



      </View>



    </View>
    
    <View style = {styles.container}/>
    </ScrollView>
      </SafeAreaView>

    


  );
}


const styles = StyleSheet.create({
  container: {
   // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   // justifyContent: 'center',
   height: '100%',
  },
  gora: {
    //flex: 2,
    height: '20%',
    width: '100%',
  },

  pojemnik:{
    flex: 1,
    width: '100%',
    height: 1500,
    top: '-5%',
    //Below lines will help to set the border radius
    borderRadius: 30,
    backgroundColor: 'white',
    position: 'relative',
  },

  pojemnikNaInput:{
    width: '100%',
    height: 100,
    left: '15%'
  },


  textInput: {
    top: '10%',
    justifyContent: 'center',
    padding: 5,
    borderBottomWidth: 1.0,
    width: '70%',
    marginLeft: 5,
  },

  opusc:{
    height: '5%',
    width: '100%',
    top: '30%',
    position: 'relative'
  },

  coos:{
    flex: 1,
    height: '100%',
    width: '100%'

    
  },

  scrollView: {
    flex: 1,
    height: '100%'
  },


  rozwijaneContainer:{
    width: '70%',
    height: 60,
    left: '0%',
    borderBottomWidth: 1,
  },



  containerCheck: {
   // flex: 1,
    height: 150,
    marginTop: '5%',
    marginLeft: '15%',
    marginRight: '20%',
   // alignItems: "center",
    //justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },

  button: {
    width: '60%',
    height: '10%',
    left: '20%'
    
  },

  mainTextContainer: {
    marginTop:'12%',
  },

  inTouchInscription:{
    alignSelf: "center",
    fontSize: 80,
    color: 'white'
    
  },
  welcomeInscription:{
    alignSelf: "center",
    fontSize: 30
  }

})