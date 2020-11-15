import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Logo from '../assets/logo.png';
import Lupa from '../assets/lupa.png';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ChatBotAvatar from '../assets/chatbotlogo.png';
import UserAvatar from '../assets/useravatar.png'
import UserAvatar2 from '../assets/useravatar2.png'
import SendIcon from '../assets/send.png'

export default function ChatBox(){

    const styles = StyleSheet.create({
        container: {
           backgroundColor: '#fff',
           height: '100%'
        },
        linearGradient: {
             width: '100%',
             height: '35%',
             marginBottom: 20
          },
        background: {
            backgroundColor:'white',
            width: '100%',
            flex:1
        },
        logo: {
            width: 100,
            height: 30,
            marginTop:'30%',
            alignSelf:'center'
          },
          line: {
              marginLeft:20,
              marginTop: 30,
              flexDirection: 'row',
          },
          name: {
            minWidth:100,
            marginLeft: 20,
            marginTop:'auto',
            marginBottom:'auto',
            fontSize:30
          },
          avatar: {
              height: 60,
              width: 60
          },
          shareField: {
                marginRight:20,
                backgroundColor:'#FFFFFF',
                flex:1,
                height:50,
                marginTop:10,
                borderRadius:40,
                alignSelf:'center',
                width:'40%',
             },
            share: {
                color:'black',
                alignSelf:'center',
                fontSize:15,
                marginTop:'auto',
                marginBottom:'auto'
            },
            scroll: {
                backgroundColor: 'white',
                height:'40%',
                width: '90%',
                alignSelf:'center'
            },
            messageField: {
                backgroundColor: '#DEDEDE',
                height:50,
                borderRadius: 40,
                width: '80%',
                marginTop:10,
                marginBottom:10,
                marginRight:10
            },
            lineSend: {
                flexDirection: 'row',
                width: '90%',
                alignSelf:'center',
            },
            iconSend: {
                flex: 0.8,
                width: null,
                height: null,
                resizeMode: 'contain'
            },
            messageFromLine: {
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 10
            },
            messageToLine: {
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 10,
                marginLeft:'auto'
            },
            messageFrom: {
                backgroundColor: '#DEDEDE',
                borderRadius:40,
                padding: 20,
                maxWidth: '60%'
            },
            messageTo: {
                backgroundColor: '#DEDEDE',
                borderRadius:40,
                padding: 20,
                maxWidth: '60%'
            },
            messageAvatar: {
                height: 60,
                width: 60,
                marginHorizontal:10,
                marginTop:10
            },
            text: {
                padding:15
            }
        });

        const Line=()=>{
            return(
                <View style={styles.line}>
                    <Image
                        source={UserAvatar}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>
                        Jan
                    </Text>
                    <View style={styles.shareField}>
                        <Text style={styles.share}>
                            Share your email
                        </Text>
                    </View>
                </View>
            );
        }

        const SendBox=()=>{
            return(
                <View style={styles.lineSend}>
                    <View style={styles.messageField}>
                        <TextInput
                            style={styles.text}
                            placeholder='Message' 
                            multiline={true}
                      />
                    </View>
                    <Image
                        source={SendIcon}
                        style={styles.iconSend}
                    />
                </View>
            );
        }

        const MessageFrom=()=>{
            return(
                <View style={styles.messageFromLine}>
                    <Image 
                        source={UserAvatar2}
                        style={styles.messageAvatar}
                    />
                    <Text style={styles.messageFrom}>
                        sdfsdfsdfsdfgdgdfgfdgdfgsdgfdsfds
                    </Text>
                </View>
            );
        }

        const MessageTo=()=>{
            return(
                <View style={styles.messageToLine}>
                  <Text style={styles.messageTo}>
                        sdfsdfsdfsdfgdgdfgfdgdfgsdgfdsfdssdfsdffdgdfgd
                    </Text>
                    <Image 
                        source={UserAvatar}
                        style={styles.messageAvatar}
                    />
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
               <Line/>
            </LinearGradient>  
            <View style={styles.background} >
                <ScrollView style={styles.scroll} 
                    ref={ref => scrollView = ref }
                    onContentSizeChange={() => scrollView.scrollToEnd({ animated: true })}
                >
                    <MessageFrom />
                    <MessageTo />
                    <MessageFrom />
                    <MessageTo />
                    <MessageFrom />
                    <MessageTo />
                    <MessageFrom />
                    <MessageTo />
                    <MessageFrom />
                </ScrollView>
                <SendBox/>
            </View>
      </View>
    );
}