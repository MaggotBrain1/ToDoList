/*
import {View,Image,Text,StyleSheet,TouchableOpacity} from "react-native";
import React, {useState} from 'react';
import {storeData} from "../StorageDataService/StorageDataService";
import { Fontisto } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as ImagePicker from "expo-image-picker";

const PhotoItem =(image, setImage) => {

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library.
        
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return(

        <View style={styles.main_container}>
            <TouchableOpacity onPress={()=>pickImage()}
            >
                {
                    image ?
                        image && <Image source={{uri: image.uri}} style={styles.image}/>
                        :
                        <View style={styles.imageEmpty}>
                            <Fontisto name="picture" size={30} color="#02A1CD" />
                        </View>
                }
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    main_container: {
    flex:1,
        height:200,
        width:200,
        borderRadius:100,
    },
    image: {
        height:30,
        width:30,
        borderRadius:100,
    },
    imageEmpty:{
        height:200,
        width:200,
        borderRadius:100,
    },



})
export default PhotoItem

 */
import React, { useState } from 'react';
import {Image, View, Platform,StyleSheet,TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Fontisto} from "@expo/vector-icons";

export default function PhotoItem({image, setImage}) {

    const [img, setImg] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log("result depuis PhotoItem",result);

        if (!result.cancelled) {
            setImg(result.uri);
            setImage(result.uri);
        }
    };

    return (

    <View>
        <TouchableOpacity onPress={pickImage} >
            {image ? <Image source={{ uri: image }}  style={styles.taskImg}/>
            :
                <View style={styles.emptyPick}>
                    <Fontisto name="picture" size={60} color="#02A1CD" />
                </View>
            }
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({

    taskImg:{
        width:160,
        height:160,
        borderRadius:100,
    },
    emptyPick:{
        width:160,
        height:160,
        borderRadius:100,
        borderWidth:8,
        borderColor:"#02A1CD",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center"
    }




});


