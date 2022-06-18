import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {FontAwesome5, Ionicons} from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
const TaskItem = ({title, item,tasks,setTaskFocus }) => {

    const navigation = useNavigation();
    let dateNoFormatSTR = new Date(item.date);
    let trueMonth =dateNoFormatSTR.getMonth() + 1;
    let strDate = dateNoFormatSTR.getFullYear()+"-"+0+trueMonth+"-"+dateNoFormatSTR.getDate();
    let dateItem = item.date;
    let deadLineItem = item.deadLine;//TODO formater deadLine date ET heures

    console.log("Render de TaskItem")
    dateItem = convertDateToFullString(dateItem);
    deadLineItem = convertDateToFullString(deadLineItem)




    return(

            <View style={styles.container}>
                <TouchableOpacity onLongPress={()=>navigation.navigate('Task', {item :item, tasks:tasks}  )} onPress={()=>console.log("On recupere la date d'un item")
                } style={styles.subCont} >
                   <View style={styles.headTask}>
                       <Text style={styles.title}>{title}</Text>
                       <Image source={{ uri: item.image }} style={styles.imageTask}/>
                   </View>


                    <View style={styles.rowTask}>
                        <Ionicons style={styles.labelRow} name="time-outline" size={22} color="#02A1CD" />
                        {item.heure ?
                            <Text style={styles.HeureTask}>{item.heure}</Text>
                            :
                            <Text style={styles.descTask}> aucune heure pour cette tâche</Text>
                        }

                    </View>
                    <View style={styles.rowTask}>
                        <FontAwesome5 style={styles.labelRow} name="calendar" size={20} color="#02A1CD" />
                        {item.date ?
                            <Text style={styles.dateTask}>{dateItem}</Text>
                            :
                            <Text style={styles.descTask}> aucune date pour cette tâche</Text>
                        }

                    </View>
                    <View style={styles.rowTask}>
                        <FontAwesome5 style={styles.labelRow} name="calendar-times" size={20} color="#02A1CD" />
                        {item.deadLine ?
                            <Text style={styles.deadlineTask}>{deadLineItem}</Text>
                            :
                            <Text style={styles.descTask}> aucune deadline pour le moment</Text>
                        }
                    </View>
                    <View style={styles.rowTask}>
                        <AntDesign style={styles.labelRow} name="edit" size={20} color="#02A1CD" />
                        {item.detail ?
                            <Text style={styles.descTask}>{item.detail}</Text>
                             :
                            <Text style={styles.descTask}> aucun détail pour cette tâche</Text>
                        }
                    </View>
                </TouchableOpacity>
            </View>

    );
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius:"22%",
        padding:16,
        margin:12,
        width:350,
        textAlign:"center",
    },
    headTask:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    imageTask:{
        height:80,
        width:80,
        borderRadius:100,
    },

    subCont:{
        justifyContent:"space-evenly",
        height:"100%"
    },

    title: {
        fontSize:22,
        color:'#02A1CD',
        textAlign:"center"
    },
    dateTask:{
        color:'#00365C'
    },
    HeureTask:{
        color:'#00365C'
    },
    deadlineTask :{
        color:'#00365C'
    },
    descTask:{
        color:'#00365C'
    },
    labelRow:{
        marginRight:16
    },
    rowTask:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start"
    },
})

export default  TaskItem;

export const convertDateToFullString = (dateTask)=>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateTask = new Date(dateTask);
        dateTask = dateTask.toLocaleDateString('fr-FR',options);
    return dateTask;
}
