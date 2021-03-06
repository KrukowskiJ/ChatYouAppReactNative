import React from 'react';
import {Button, Image, StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Logo from '../assets/logo.png';
import Lupa from '../assets/lupa.png';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ChatBotAvatar from '../assets/chatbotlogo.png';
import UserAvatar from '../assets/useravatar.png'
import UserAvatar2 from '../assets/useravatar2.png'

export default function ChatList({ navigation }){
    const styles = StyleSheet.create({
        container: {
           backgroundColor: '#fff',
           height: '100%'
        },
        linearGradient: {
             width: '100%',
             height: 200,
             position: 'relative',
          },
        background: {
            borderTopLeftRadius: 40, 
            borderTopRightRadius: 40,
            backgroundColor:'white',
            position: "absolute",
            top: 150,
            width: '100%',
            height: '90%'
        },
        logo: {
            width: 100,
            height: 30,
            top:70,
            alignSelf:'center',
            position: "absolute",
          },
        searchField: {
            backgroundColor:'#DEDEDE',
            height:50,
            borderRadius:40,
            marginTop:30,
            alignSelf:'center',
            width:'80%',
            flexDirection: 'row'
        },
        randuserField: {
            backgroundColor:'#F09035',
            height:50,
            marginTop:10,
            borderRadius:40,
            alignSelf:'center',
            width:'80%',
        },
        randUser: {
            color:'white',
            alignSelf:'center',
            fontSize:20,
            marginTop:'auto',
            marginBottom:'auto'
        },
        text:{
            fontSize:20,
            marginLeft:10,
            alignSelf:'center',
        },
        lupa:{
            height: '40%',
            marginTop:'auto',
            marginBottom:'auto',
            marginRight:20,
            marginLeft:20
        },
        scrollList:{
            marginLeft:'5%',
            marginRight:'5%',
            marginTop:30,
            marginBottom:100
        },
        description:{
            color:'#838181'
        },
        avatar: {
            height: 80,
            width:80
        },
        contact: {
            marginTop:10,
            height:100,
            flexDirection: 'row',
            borderBottomColor: '#C6C2C2',
            borderBottomWidth: 1,
        },
        username: {
            fontSize: 20
        }
     });

     const SearchBox=()=>{
        return(
            <View style={styles.searchField}>
                <Image style={styles.lupa}
                    source={Lupa}
                />
                <TextInput
                    style={styles.text}
                    placeholder='Search user'
                />
            </View>
        );
     }

     const RandUserButton=()=>{
        return(
            <View style={styles.randuserField} onStartShouldSetResponder={() => navigation.navigate('RandUserMenu')}>
                <Text style={styles.randUser}>
                    Rand new user
                </Text>
             </View>
        ); 
     }

     const Contact=(props)=>{
         if(props.icon=="0"){
             var avatarIcon=ChatBotAvatar;
             var nextPage="Chatbot";
         }else if(props.icon=="1"){
             var avatarIcon=UserAvatar;
             var nextPage="Chatbox";
         }else{
            var avatarIcon=UserAvatar2;
            var nextPage="Chatbox";
         }
         return(
             <View style={styles.contact} onStartShouldSetResponder={() => navigation.navigate(nextPage)} >
                 <Image 
                    source={avatarIcon}
                    style={styles.avatar}
                 />
                 <View style={{marginTop:10, marginLeft:20, marginBottom:0}}>
                    <Text style={styles.username}>
                        {props.username}
                    </Text>
                    <Text style={styles.description}>
                        {props.description}
                    </Text>
                 </View>
             </View>
         );
     }

    return(
      <View style = {styles.container}>
        <LinearGradient colors={['#F09035','#FFFA7C']} style={styles.linearGradient}>
           <Image
                style={styles.logo}
                source={Logo}
            />
        </LinearGradient>  
        <View style={styles.background} >

            <SearchBox/>
            <RandUserButton/>
            <ScrollView style={styles.scrollList}>
                <Contact username="Chatbot Tux" description="Hi, nice to meet you" icon="0" />
                <Contact username="Ania" description="Hi, nice to meet you" icon="1" />
                <Contact username="Adam" description="Hi, nice to meet you" icon="2" />
                <Contact username="Ania" description="Hi, nice to meet you" icon="1" />
                <Contact username="Adam" description="Hi, nice to meet you" icon="2" />
            </ScrollView>
        </View>
      </View>
    );
}

