import {View,Image,Text,StyleSheet,TouchableOpacity} from "react-native";
import React, {useState} from 'react';
import { EvilIcons } from '@expo/vector-icons';
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import {storeData} from "../StorageDataService/StorageDataService";


const PhotoItem =() => {
    const [image, setImage] = useState(null);

    const selectPicture = async () => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const img = await ImagePicker.launchImageLibraryAsync({
            aspect: [4, 3],
            quality: 1,
            allowsEditing: true,
        });
        setImage(img)
        console.log("image.uri ",image.uri)
        await storeData('pp', image.uri)
    }
    return(

        <View style={styles.main_container}>
            <TouchableOpacity onPress={selectPicture}
            >
                {
                    image ?
                        image && <Image source={{uri: image.uri}} style={styles.image}/>
                        :
                        <View style={styles.imageEmpty}>
                            <EvilIcons name="user" size={200} style={styles.image} />
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
        height:200,
        width:200,
        borderRadius:100,
        color:"#00365C"
    },
    imageEmpty:{
        height:200,
        width:200,
        borderRadius:100,
    },



})
export default PhotoItem

