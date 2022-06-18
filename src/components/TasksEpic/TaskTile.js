import React from 'react';
import {Image, Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import icon_check  from '../../../assets/icon_check.png';
import icon_circle from '../../../assets/icon_circle.png';
import icon_bin from '../../../assets/icon_bin.png';
import {useNavigation} from "@react-navigation/native";

const TaskTile = ({id, title, completed, onChangeStatus, onDeleteTask, item,tasks}) => {
    const navigation = useNavigation();

    return(

        <View style={styles.container}>
           < View style={styles.subContainer}>
             <TouchableOpacity onPress={() => onChangeStatus(id)}>
                <Image
                style={styles.iconCircle}
                source={completed ? icon_check : icon_circle }/>
             </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Task',{item :item ,tasks: tasks} )}>
               <Text style={[styles.title, {color: completed ? '#02A1CD' : '#00365C'}]}>{title}</Text>
               </TouchableOpacity>
           </View>
           <TouchableOpacity onPress={() => onDeleteTask(id)}>
                 <Image style={styles.iconBin}
                       source={ icon_bin }
                />
           </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius:"22%",
        alignContent:"center",
        padding:16,
        margin:12,

    },

    subContainer:{
        flexDirection: 'row',
        alignItems: 'center',


    },
    iconCircle:{
        width: 40,
        height: 40,
        tintColor:'#359BCC'
    },

    iconBin: {
        width: 40,
        height: 40,
        tintColor:'#ffadad'

    },
    title: {
        marginLeft: 30,
        fontSize:18,
        width:200

    }
})

export default  TaskTile;

//color background :'#40C4FF'