import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from "react-native";
import TaskList from "./TasksList";
import TaskForm from "./TaskForm";
import {storeData} from "../StorageDataService/StorageDataService";
import {getFormatedDate} from "react-native-modern-datepicker";

 function  TasksContainer({showForm,toggleForm}) {

     const [tasks, setTasks] = useState([]);
     const [isTheFirstMount, setIsTheFirstMount] = useState(false);

     useEffect(()=>{
         if(isTheFirstMount){
             storeData('nbTasks',tasks.length).catch();
             storeData('tasksComplet',getTasksCompleted()).catch();
             storeData('tasks', tasks).catch();
         }

     },[tasks,showForm])


  /// crééer une nouvelle tâche ///
     const onAddTask = (title,date,heure) => {
         const dateFormat = getFormatedDate(date, "DD/MM/YYYY");

         const newTask = {
             id:new Date().getTime().toString(),
             title: title,
             completed: false,
             deadLine:null,
             detail:null,
             date:date?dateFormat:null,
             heure:heure?heure:null,

         }
         setTasks([newTask, ...tasks])
         setIsTheFirstMount(true)
         toggleForm();
     };
 /// change le statut de la tâche ///
     const onChangeStatus =(id) => {
         let newTask = []
         tasks.forEach(task => {
             if (task.id === id) {
                 newTask.push({id: id, title: task.title, completed: !task.completed})
             } else {
                 newTask.push(task);
             }
         });
         setTasks(newTask);
     }
/// supprime une tâche ///
     const onDeleteTask = id => {
         let newTasks = []

         tasks.forEach(task => {
             if ( task.id !== id ) {
                 newTasks.push(task)
             }
         });
         setTasks(newTasks);
     }
/// compteur de tâche complétée ///
     const getTasksCompleted = () => {
         let counter = 0

         tasks.forEach(task => {
             if (task.completed) {
                 counter ++
             }
         })
         return counter
     };

     return (
         <View style={styles.container}>
             <View style={styles.taskListContainer}>
                 <TaskList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
             </View>
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