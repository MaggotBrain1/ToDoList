import * as React from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const FirstPage = () => {
    const navigation = useNavigation();

    const [mail,setEmail] = useState()
    const [password,setPassword] = useState()

    const handleLogin = () =>{
        navigation.navigate("AddList")
    }

    const handleRegister = () =>{
        navigation.navigate("Register")
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bgHome.jpg')} resizeMode="cover"  style={{width: '100%', height: '100%'}}>
                <TouchableOpacity style={styles.imgContainer} onPress={()=>handleLogin()}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/taskLogo.png')}
                    />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    imgContainer:{
        alignItems:"center",
        marginTop:"70%",
        marginLeft:"8%"
    },
    img:{
        height:160,
        width:140,
        alignContent:"center"

    },

});


export default FirstPage;


