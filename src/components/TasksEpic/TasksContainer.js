import React, {useState} from 'react';
import {View, StyleSheet,Vibration} from "react-native";
import TaskForm from "./TaskForm";
import {readDataObject, storeData} from "../StorageDataService/StorageDataService";
import {useFocusEffect} from "@react-navigation/native";

 const  TasksContainer = ({showForm,setShowForm}) => {

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
         console.log("title",title)
         if (title.length > 0) {
             const newTask = {
                 id:new Date().getTime().toString(),
                 title: title?title:null,
                 completed: false,
                 deadLine:null,
                 detail:null,
                 date:date?new Date(date):new Date(),
                 heure:heure?heure:null,
                 image:null
             }
             if(tasks === undefined){
                 setTasks([newTask])
                 storeData('tasks',tasks )
                     .catch(e=>console.warn(e,"err sauvegarde task"));
             }else {
                 setTasks([newTask, ...tasks]);
                 storeData('tasks', [newTask, ...tasks])
                     .catch(e=>console.warn(e,"err sauvegarde task"));
             }
             setShowForm(false)
             setIsReady(true);
             Vibration.vibrate(100);
         }else {
             setShowForm(false)
         }
     };



     return (
         <View style={styles.container}>
             <View style={styles.taskFormContainer}>
                 {
                     showForm ?
                         <TaskForm onAddTask={onAddTask}/>
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
         top:"50%"
     },
     taskListContainer:{
         top:"10%",
         height:"90%"
     }

 })
 export default TasksContainer;