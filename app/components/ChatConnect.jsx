import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Mail from '../assets/mail.png'
export default function ChatConnect(){

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            height: '100%'
         },
         linearGradient: {
              width: '100%',
              height: '80%',
              position: 'relative',
           },
         background: {
             borderTopLeftRadius: 40, 
             borderTopRightRadius: 40,
             backgroundColor:'white',
             position: "absolute",
             top: '75%',
             width: '100%',
             height: '90%',
         },
         mail: {
             marginTop: 100,
             height: 140,
             alignSelf:'center',
             marginBottom: 30
        },
        congratulation: {
            fontSize: 40,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 30,
            alignSelf: 'center',
        },  
        info: {
            fontSize: 30,
            color: '#545454',
            fontWeight: 'bold',
            alignSelf: 'center',
            textAlign: 'center'
        }    ,
        email: {
            marginTop:60,
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
            textAlign: 'center',
        } ,
        line: {
            marginTop: 30,
            width:'70%',
            alignSelf:'center',
            borderBottomColor: '#C6C2C2',
            borderBottomWidth: 1.5,
        }
    });
    

    return(
        <View style = {styles.container}>
        <LinearGradient colors={['#FFA843','#FFFA7C']} style={styles.linearGradient}>
                 <Image
                    source={Mail}
                    style={styles.mail}
                    resizeMode="contain"
                />
                <Text style={styles.congratulation}>
                    Congratulations!
                </Text>
                <Text style={styles.info}>
                    You exchanged {"\n"}
                    E-mails {"\n"}
                    successfully
                </Text>
        </LinearGradient>  
        <View style={styles.background} >
               <Text style={styles.email}>
                    jan.nowak@wp.pl
                </Text>
                <View opacity={0.37} style={styles.line}></View>
        </View>
      </View>

    );
}