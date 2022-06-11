import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {AntDesign, EvilIcons} from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import AsyncStorage from "@react-native-async-storage/async-storage";


const TopBar = ({task}) =>{
    const navigation = useNavigation();


    return(
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.navBtnH}>
                    <TouchableOpacity onPress={()=>navigation.navigate("AddList")}>
                        <Foundation name="list" size={30} color="#00365C" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate("Home",{params : {task :task}})}>
                        <AntDesign name="home" size={30} color="#00365C" />
                    </TouchableOpacity>
                </View>
                <View style={styles.navBtnA}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Register")}>

                                <View style={styles.imageEmpty} style={styles.image}>
                                    <EvilIcons name="user" size={60} style={styles.image} />
                                </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
                        <Feather name="bell" size={30} color="#00365C" />
                    </TouchableOpacity>
                </View>
         </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nav:{
        height:80,
        width:"100%",
        alignItems: 'center',
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor: 'rgba(255, 255, 255, 0.3)',

    },
    navBtnH:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:20,
        width:"20%",
    },
    navBtnA:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginRight:20,
        width:"22%",
        alignItems:"center",
        alignContent:"center",
    },
    img:{
        height:60,
        width:60,
        borderRadius:100
    }



});


export default TopBar;