import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CountersContainer from "../Counters.Container";
import {useNavigation} from "@react-navigation/native";
import {getStoreData} from "../../StorageDataService/StorageDataService";
import {Entypo} from "@expo/vector-icons";

 const TaskByHome =  () => {

     const [nbAllTasks, setNbAllTasks] = useState(0);
     const [addTask, setAddTask] = useState(true);
     const [data, setData] = useState([]);
     const navigation = useNavigation();

     useEffect( () => {
          readData();
         console.log( data)

     }, []);

     const readData = async () => {
         try {
             const tasks = await AsyncStorage.getItem('tasks');
             const nbTasks = await AsyncStorage.getItem('nbTasks');
             if (tasks !== null) {
                 setData(JSON.parse(tasks));
             }
             if(nbTasks != null) {
                 setNbAllTasks(JSON.parse(nbTasks))
             }

         } catch (e) {
             alert('Failed to fetch the input from storage');
         }
     };
     const showData = data.map((task)=>
         <TouchableOpacity onPress={()=>navigation.navigate("Task",{params : {task :task}})} id={task.id}>
            <Text id={task.id} style={styles.txt}>{task.title}</Text>
         </TouchableOpacity>)

     return (
      <View style={styles.container} >
          <Text style={styles.txtNbTask}><Text style={styles.NbTask}>{nbAllTasks}</Text> tâche(s) en attente</Text>
           <View>{showData}</View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        maxHeight:"40%",
        width:"50%",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        bottom:"38%",
        marginLeft:20,
    },
    txt:{
        fontSize: 22,
        color:'#3195C9',
        marginTop:22,
    },
    txtNbTask:{
        color:"#00365C"
    },
    NbTask:{
        color:'#3195C9',
        fontSize: 22,
    },
    btnadd:{
        marginTop:50
    }
});


 export default TaskByHome;
