import * as React from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import PhotoItem from "../photo/PhotoItem";


const Register = () =>{
    const navigation = useNavigation();

    const [mail,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [samePassword,setSamePassword] = useState(null)
    const [titre,setTitre] = useState(null)


    const handleLogin = () =>{
        navigation.navigate("Home")
    }

    return(
        <View style={styles.container}>

            <ImageBackground source={require('../../../assets/bgHome.jpg')} resizeMode="cover"  style={{width: '100%', height: '100%'}}>

                <View  style={styles.img}>
                    <PhotoItem />
                </View>


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
                        placeholder="Choisissez votre mot de passe"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Comfirmer mot de passe"
                        secureTextEntry={true}
                    />


                    <TouchableOpacity style={styles.btn} onPress={()=>handleLogin()}>
                        <Text style={styles.txt}>Connection</Text>
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
    },
    select:{
        height: 60,
        width:350,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius:10,
        backgroundColor:'white',
        textAlign:"center",
        justifyContent: 'center',


    }

});


export default Register;


