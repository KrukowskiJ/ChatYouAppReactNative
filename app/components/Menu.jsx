import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
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
            height: 150,
            position: 'relative',
        },
        background: {
            borderTopLeftRadius: 70,
            borderTopRightRadius: 70,
            backgroundColor: 'white',
            position: "absolute",
            top: 100,
            width: '100%',
            height: '90%'
        },
        quote: {
            marginTop: "15%",
            marginBottom: "10%",
            height: "15%",
            justifyContent: "center",
        },
        description: {
            textAlign: "center",
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "1%",
            marginBottom: "1%",
            fontSize: 15,
            color: '#838181'
        },
        quote2: {
            marginTop: 5,
        },
        quoterow1: {
            marginLeft: "2%",
            flexDirection: "row",
        },
        quote4: {
            marginTop: 5,
        },
        quoterow2: {
            marginLeft: "87%",
            flexDirection: "row",
        },
        avatarname: {
            height: "14%",
            flexDirection: "row",
            marginLeft: "auto",
            marginRight: "auto",
        },
        avatar: {
            overflow: "hidden",
            borderWidth: 5,
            borderRadius: 990,
            borderColor: "#F09035",
            marginTop: 20,
            height: 120,
            width: 120,
            justifyContent: "center",
            alignItems: "center",
        },
        username: {
            marginTop: 70,
            justifyContent: "center",
            marginLeft: "5%",
            fontSize: 20,
            fontFamily: 'NotoSansMalayalamBold',
            color: '#838181',
        },
        emoji:
        {
            marginTop: "2%",
            flexDirection: 'row',
            marginLeft: "auto",
            marginRight: "auto",
        },
        happy:
        {
            alignItems: 'center',
        },
        medium:
        {
            paddingLeft: 30,
        },
        sad:
        {
            paddingLeft: 30,
        },
        button:
        {
            backgroundColor: "#F09035",
            borderRadius: 17,
            justifyContent: "center",
            width: "30%",
            //position: "center",
            height: "75%",
        },
        buttonsrow: {
            flexDirection: "row",
            justifyContent: "space-evenly",
        },
        buttons:
        {
            height: "35%",
        },
        buttonText:
        {
            textAlign: "center",
            margin: "auto",
            justifyContent: "center",
            fontFamily: 'NotoSansMalayalamRegular',
            color: "white",
            fontSize: 24,
            textAlign: "center",
        },
        emojitext: {
            marginTop: "1%",
            color: '#838181',
            textAlign: "center",
            fontFamily: 'NotoSansMalayalamRegular',
            fontSize: 15,
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
                    <View style={styles.avatar}>
                        <Image
                            source={UserAvatar}
                            style={{ width: 100, height: 100 }}
                        />
                    </View>
                    <Text style={styles.username}>
                        User User Name
                    </Text>

                </View>
                <View style={styles.quote}>
                    <View style={styles.quoterow1}>
                        <Image
                            style={styles.quote1}
                            source={require("../assets/quote2.png")} />
                        <Image
                            style={styles.quote2}
                            source={require("../assets/quote2.png")} />
                    </View>
                    <Text style={styles.description}>
                        DESCRIPTION asdsad asd dsa sad
                        asdsaff
                        safsafsafsaf fsaf
                        sadadssad
                    </Text>
                    <View style={styles.quoterow2}>
                        <Image
                            style={styles.quote3}
                            source={require("../assets/quote1.png")} />
                        <Image
                            style={styles.quote4}
                            source={require("../assets/quote1.png")} />
                    </View>
                </View>


                <View style={styles.buttons}>
                    <View style={styles.buttonsrow}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatMenu')}>
                            <Text style={styles.buttonText}>Chat</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatMenu')}>
                            <Text style={styles.buttonText}>Info</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonsrow}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatMenu')}>
                            <Text style={styles.buttonText}>Share</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatMenu')}>
                            <Text style={styles.buttonText}>Question</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <Text style={styles.emojitext}>
                    How are You feeling today?
                </Text>
                <View style={styles.emoji}>

                    <TouchableOpacity style={styles.happy} onPress={() => alert('happy')}>
                        <Image
                            style={{ width: 63, height: 63 }}
                            source={require("../assets/happy.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.medium} onPress={() => alert('medium')}>
                        <Image
                            style={{ width: 63, height: 63 }}
                            source={require("../assets/medium.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sad} onPress={() => alert('sad')}>
                        <Image style={{ width: 63, height: 63 }}
                            source={require("../assets/sad.png")} />
                    </TouchableOpacity>

                </View>
                <ScrollView style={styles.scrollList}>

                </ScrollView>
            </View>
        </View>
    );

}



