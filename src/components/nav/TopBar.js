import React from 'react';
import {StyleSheet,TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import PhotoItem from "../photo/PhotoItem";


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
                    <PhotoItem/>
                    <TouchableOpacity onPress={()=>console.log("GO to alert" )}>
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

    }



});


export default TopBar;