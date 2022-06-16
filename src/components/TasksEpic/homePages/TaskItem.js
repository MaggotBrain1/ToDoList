import React,  from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const TaskItem = ({title, item,tasks }) => {
    const navigation = useNavigation();

    return(

            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Task', {item :item, tasks:tasks}  ) } style={styles.subCont} >
                   <View style={styles.headTask}>
                       <Text style={styles.title}>{title}</Text>
                       <Image source={{ uri: item.image }} style={styles.imageTask}/>
                   </View>


                    <View style={styles.rowTask}>
                        <Text style={styles.labelRow}>heure :</Text>
                        {item.heure ?
                            <Text style={styles.HeureTask}>{item.heure}</Text>
                            :
                            <Text style={styles.descTask}> aucune heure pour cette tâche</Text>
                        }

                    </View>
                    <View style={styles.rowTask}>
                        <Text style={styles.labelRow}>date :</Text>
                        {item.date ?
                            <Text style={styles.dateTask}>{item.date}</Text>
                            :
                            <Text style={styles.descTask}> aucune date pour cette tâche</Text>
                        }

                    </View>
                    <View style={styles.rowTask}>
                        <Text style={styles.labelRow}>deadLine :</Text>
                        {item.deadLine ?
                            <Text style={styles.deadlineTask}>{item.deadLine}</Text>
                            :
                            <Text style={styles.descTask}> aucune deadline pour le moment</Text>
                        }
                    </View>
                    <View style={styles.rowTask}>
                        <Text style={styles.labelRow}>description :</Text>
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
        color:'#02A1CD'
    },
    rowTask:{
        flexDirection:"row"
    },
})

export default  TaskItem;

