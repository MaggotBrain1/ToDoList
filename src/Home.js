import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import Header from "./components/_Shared/Header/index";
import TopBar from "./components/nav/TopBar";
import UserContext from "./components/context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Foundation} from "@expo/vector-icons";

export default function Home() {

    const [item, setItem] = useState();

   const getData = async () => {
            const jsonValue = await AsyncStorage.getItem('@tasks')
            if (jsonValue !== null) {
                setItem(JSON.parse(jsonValue));
                console.log("valeur getData : ", item);
            }
    }


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/bgHome.jpg')} style={styles.backgroundImage} >
            <TopBar task={{item}}/>
            <Header/>
            </ImageBackground>
            <TouchableOpacity onPress={()=>getData()}>
                <Foundation name="list" size={30} color="white" />
            </TouchableOpacity>
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        backgroundColor: "#00365C",

    },
    backgroundImage: {
        flex: 1,
        resizeMode:"cover",
    },
});

