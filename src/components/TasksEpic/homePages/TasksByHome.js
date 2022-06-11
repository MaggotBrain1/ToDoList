import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CountersContainer from "../Counters.Container";
import {useNavigation} from "@react-navigation/native";

 const TaskByHome =  ({ route, navigation }) => {

     const [nbAllTasks, setNbAllTasks] = useState(0);
     const [nbTasksComplete, setNbTasksComplete] = useState(0);

     const [state, setState] = useState([]);
     const getData = async () => {
         try {
             await AsyncStorage.getItem('tasks')
         } catch (e) {
             console.log("impossible de sauvegarder la donnée")
         }
     }
     useEffect(() => {
         getData()
             .then(data => {
                 setState(JSON.parse(data));
             })
             .catch(error => console.log(error));
     }, [state]);
console.log("state ",state)
     /*
     useEffect(()=>{
         getData();
     })
     console.log(nbAllTasks);
     console.log(nbTasksComplete);


     async function getData() {
         const nbTasks = await AsyncStorage.getItem('nbTasks');
         const tasksComplet = await AsyncStorage.getItem('tasksComplet');
         const x = JSON.parse(nbTasks);
         const y = JSON.parse(tasksComplet)
         if(x >= 0 )
         setNbAllTasks(x+1);
         if(y >= 0)
         setNbTasksComplete(y+1);
     }
*/

     return (
      <View style={styles.container} >
          <CountersContainer nbTasks={nbAllTasks} nbTasksCompleted={nbTasksComplete}/>
          <TouchableOpacity >
          </TouchableOpacity>
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
});


 export default TaskByHome;
