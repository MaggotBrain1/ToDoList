import * as React from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const Login = () =>{
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

            <ImageBackground source={require('../../../assets/bgHome.jpg')} resizeMode="cover"  style={{width: '100%', height: '100%'}}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/bgHome.jpg')}
                />
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={mail}
                        placeholder="E-mail"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Mot de passe"
                    />
                    <TouchableOpacity style={styles.btn} onPress={()=>handleLogin()}>
                        <Text style={styles.txt}>Connection</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2} onPress={()=>handleRegister()}>
                        <Text style={styles.txt2}>Inscription</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 60,
        width:350,
        margin: 12,
        padding: 10,
        borderRadius:10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        textAlign:"center",
    },
    img:{
        height:160,
        width:160,
        borderRadius:100,
        alignItems: 'center',
        alignSelf:'center',
        margin:100
    },
    btn:{
        height:60,
        width:130,
        backgroundColor:"#00365C",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        marginTop:22,
    },
    btn2:{

        height:60,
        width:130,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        marginTop:22,
    },
    txt:{
        color:"white",
    },
    txt2:{
        color:"#00365C",
    }

});


export default Login;


