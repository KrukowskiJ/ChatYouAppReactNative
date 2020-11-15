import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {LinearGradient} from 'expo-linear-gradient';
import Logo from '../assets/logo.png';
import Lupa from '../assets/lupa.png';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ChatBotAvatar from '../assets/chatbotlogo.png';
import UserAvatar from '../assets/useravatar.png'
import UserAvatar2 from '../assets/useravatar2.png'
import Filtr from '../assets/filtr.png'


export default function RadUserMenu(){

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
             marginTop: 150,
             width: '100%',
             height:'100%',
             flex:1
         },
         logo: {
             width: 100,
             height: 30,
             marginTop:70,
             alignSelf:'center',
             position: "absolute",
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
        scrollList:{
            marginLeft:'5%',
            marginRight:'5%',
            marginBottom:200,
            height: '70%',
            backgroundColor:'white'
        },
        filtr: {
            height:30,
            width: 30,
            marginHorizontal:20,
        },
        questionBox: {
            borderBottomColor: '#C6C2C2',
            borderBottomWidth: 1.5,
            marginTop:30,
            marginHorizontal:20
        },
        title:{
            fontSize:30
        },
        agebox: {
            backgroundColor:'#DEDEDE',
            borderRadius:40,
            textAlign:'center',
            width:60,
            fontSize:30
        }
        });

        const RandUserButton=()=>{
            return(
                <View style={styles.randuserField}>
                    <Text style={styles.randUser}>
                        Rand new user
                    </Text>
                 </View>
            ); 
         }

         const Title=()=>{
            return(
                <View style={{ flexDirection: 'row', alignSelf:'center', marginTop:30}}>
                    <Image
                        source={Filtr}
                        style={styles.filtr}
                    />
                    <Text style={{fontSize:30}}>
                        Filters
                    </Text>
                </View>
            );
         }

         const Age=()=>{
             return(
                 <View style={styles.questionBox}>
                     <Text style={styles.title}>
                         Age Range
                     </Text>
                    <View style={{flexDirection:'row', alignSelf:'center', marginVertical:20}}>
                        <Text style={{fontSize:25, marginHorizontal:10}}>
                            from:
                        </Text>
                        <TextInput style={styles.agebox}>

                        </TextInput>
                        <Text style={{fontSize:25, marginHorizontal:10}}>
                            to:
                        </Text>
                        <TextInput style={styles.agebox}>
                            
                        </TextInput>
                    </View>
                 </View>
             );
         }

         const Region=()=>{
             return(
                 <View style={styles.questionBox}>
                     <Text style={styles.title}>
                         Region
                     </Text>
                     <View                         style={{            
                            backgroundColor:'#DEDEDE',
                            borderRadius:40,
                            marginVertical:20,
                            paddingHorizontal:10
                        }}>

                        <Picker
                        //   selectedValue={selectedValue}
                        >
                        {/* //     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        // > */}
                            <Picker.Item label="dolnośląskie" value="dolnoslaskie" />
                            <Picker.Item label="kujawsko-pomorskie" value="kujawsko-pomorskie" />
                            <Picker.Item label="lubelskie" value="lubelskie" />
                            <Picker.Item label="lubuskie" value="lubuskie" />
                            <Picker.Item label="łódzkie" value="lódzkie" />
                            <Picker.Item label="małopolskie" value="malopolskie" />
                            <Picker.Item label="mazowieckie" value="mazowieckie" />
                            <Picker.Item label="opolskie" value="opolskie" />
                            <Picker.Item label="podkarpackie" value="podkarpackie" />
                            <Picker.Item label="podlaskie" value="podlaskie" />
                            <Picker.Item label="pomorskie" value="pomorskie" />
                            <Picker.Item label="śląskie" value="ślaskie" />
                            <Picker.Item label="świętokrzyskie" value="swietokrzyskie" />
                            <Picker.Item label="warmińsko-mazurskie" value="warmińsko-mazurskie" />
                            <Picker.Item label="wielkopolskie" value="wielkopolskie" />
                            <Picker.Item label="zachodniopomorskie" value="zachodniopomorskie" />
                        </Picker>
                    </View>
                 </View>
             );
         }

         const Status=()=>{
            return(
                <View style={styles.questionBox}>
                    <Text style={styles.title}>
                        Disease Status
                    </Text>
                    <View                         style={{            
                           backgroundColor:'#DEDEDE',
                           borderRadius:40,
                           marginVertical:20,
                           paddingHorizontal:10
                       }}>

                       <Picker
                       //   selectedValue={selectedValue}
                       >
                       {/* //     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                       // > */}
                           <Picker.Item label="Recovered" value="recovered" />
                           <Picker.Item label="Fighting" value="fighting" />
                       </Picker>
                   </View>
                </View>
            );
        }

        const CancerType=()=>{
            return(
                <View style={styles.questionBox}>
                    <Text style={styles.title}>
                         Type of Cancer
                    </Text>
                    <View                         style={{            
                           backgroundColor:'#DEDEDE',
                           borderRadius:40,
                           marginVertical:20,
                           paddingHorizontal:10
                       }}>

                       <Picker
                       //   selectedValue={selectedValue}
                       >
                       {/* //     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                       // > */}
                           <Picker.Item label="Random" value="random" />
                           <Picker.Item label="Skin cancer" value="Skin cancer" />
                            <Picker.Item label="Lung cancer" value="Lung cancer" />
                            <Picker.Item label="Prostate cancer" value="Prostate cancer" />
                            <Picker.Item label="Breast cancer" value="Breast cancer" />
                            <Picker.Item label="Colorectal cancer" value="Colorectal cancer" />
                            <Picker.Item label="Kidney (renal) cancer" value="Kidney (renal) cancer" />
                            <Picker.Item label="Bladder cancer" value="Bladder cancer" />
                            <Picker.Item label="Non-Hodgkin's lymphoma" value="Non-Hodgkin's lymphoma" />
                       </Picker>
                   </View>
                </View>
            );
        }

    return(
        <View style={{flex:1}}>
            <LinearGradient colors={['#F09035','#FFFA7C']} style={styles.linearGradient}>
            <Image
                    style={styles.logo}
                    source={Logo}
                />
            </LinearGradient>  
            <View style={styles.background} >
                <Title />
                <ScrollView style={styles.scrollList}>
                    <Age />
                    <Region />
                    <Status />
                    <CancerType />
                    <RandUserButton/>
                </ScrollView>
            </View>
        </View>
    );
}