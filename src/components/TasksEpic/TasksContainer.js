import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import TaskForm from "./TaskForm";
import {readDataObject, storeData} from "../StorageDataService/StorageDataService";
import {useFocusEffect} from "@react-navigation/native";

 const  TasksContainer = ({showForm,toggleForm}) => {

     const [tasks, setTasks] = useState([]);
     const [isReady, setIsReady] = useState(false);

         useFocusEffect(
             React.useCallback(() => {
                 console.log("oooooo")
                 readDataObject("tasks")
                     .then( r => setTasks(r) )
                     .catch(e => console.warn("err à la récuperation de la liste de tasks : ",e));
             }, [isReady])
         );



  /// crééer une nouvelle tâche ///
     const onAddTask = (title,date,heure) => {

        console.log("date non formatée", typeof date)
         const newTask = {
             id:new Date().getTime().toString(),
             title: title,
             completed: false,
             deadLine:null,
             detail:null,
             date:date?new Date(date):new Date(),
             heure:heure?heure:null,
             image:null
         }

         setTasks([newTask, ...tasks]);
         storeData('tasks', [newTask, ...tasks])
             .then(toggleForm())
             .catch(e=>console.warn(e,"err sauvegarde task"));
         setIsReady(true);
     };



     return (
         <View style={styles.container}>
             <View style={styles.taskFormContainer}>
                 {
                     showForm ?
                         <TaskForm onAddTask={onAddTask} toggleForm={toggleForm}/>
                         :
                         <></>
                 }
             </View>
         </View>

     );
}


 const styles = StyleSheet.create({
     container:{
         flex: 1,
         height:"100%"
     },
     taskFormContainer:{
         position:"absolute",
         top:"46%"
     },
     taskListContainer:{
         top:"10%",
         height:"90%"
     }

 })
 export default TasksContainer;