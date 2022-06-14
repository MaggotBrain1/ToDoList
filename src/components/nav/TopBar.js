import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {AntDesign, Entypo, EvilIcons, Ionicons} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const TopBar = ({task ,toggleForm}) =>{
    const navigation = useNavigation();
    return(
            <View style={styles.nav}>

                    <TouchableOpacity onPress={()=>navigation.navigate("AddList")}  >
                        <Entypo name="add-to-list" size={36} color="#00365C"style={styles.btn} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate("Home",{params : {task :task}})}>
                        <AntDesign name="home" size={36} color="#00365C" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.focusView} onPress={()=>toggleForm()}>
                        <Ionicons name="add-circle" size={90} color="#359BCC" style={styles.btn} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
                                <View  style={styles.image}>
                                    <AntDesign name="user" size={36} style={styles.image} color="#00365C"/>
                                </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
                        <Feather name="bell" size={36} color="#00365C" />
                    </TouchableOpacity>

         </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:90,
        width:90
    },

    nav:{
        height:86,
        width:"100%",
        alignItems: 'center',
        flexDirection:"row",
        justifyContent:"space-evenly",
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
    },
    focusView: {
        bottom:40,
        height:92,
        width:92,
        borderRadius:"100%",
        backgroundColor:"#005C8E",


},
    btn:{
        marginLeft:4,
        top:-2
    },


});


export default TopBar;