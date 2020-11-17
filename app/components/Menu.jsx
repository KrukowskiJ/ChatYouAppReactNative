import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ChatBotAvatar from '../assets/chatbotlogo.png';
import UserAvatar from '../assets/useravatar.png'
import UserAvatar2 from '../assets/useravatar2.png'



export default function Menu({ navigation }) {

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
            backgroundColor: 'white',
            position: "absolute",
            top: 100,
            width: '100%',
            height: '90%'
        },
        scrollList: {
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: 30,
            marginBottom: 100
        },
        description: {
            fontSize: 30,
            justifyContent: "center",

            color: '#838181'
        },
        avatar: {
            marginLeft: 30,
            height: 100,
            width: 100
        },
        avatarname: {
            marginTop: 30,
            flexDirection: "row",
        },
        username: {
            marginLeft: 30,
            marginTop: 20,
            fontSize: 40,
            color: '#838181',
        }
    });



    const Header = () => {
        return (
            <View style={styles.contact}  >


            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Header />
            <LinearGradient colors={['#F09035', '#FFFA7C']} style={styles.linearGradient}>
            </LinearGradient>

            <View style={styles.background} >
                <View style={styles.avatarname}>
                    <Image
                        source={UserAvatar}
                        style={styles.avatar}
                    />
                    <Text style={styles.username}>
                        Jakub Krukowski
                    </Text>

                </View>
                <Text style={styles.description}>
                    DESCRIPTION
                    </Text>
                <ScrollView style={styles.scrollList}>

                </ScrollView>
            </View>
        </View>
    );

}



