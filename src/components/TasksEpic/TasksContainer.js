import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from "react-native";
import TaskList from "./TasksList";
import TaskForm from "./TaskForm";
import {readDataObject, storeData} from "../StorageDataService/StorageDataService";
import {getFormatedDate} from "react-native-modern-datepicker";

 function  TasksContainer({showForm,toggleForm}) {

     const [tasks, setTasks] = useState([]);
     const [isReady, setIsReady] = useState(false);


     useEffect(()=>{
             readDataObject("tasks")
                 .then(r => setTasks(r))
                 .then(()=>console.log("tasks dans useEffect",tasks))
                 .then()
                 .catch(e => console.log("err à la récuperation de la liste de tasks : ",e));
     },[isReady])



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
             image:null
         }

         setTasks([newTask, ...tasks]);
         storeData('tasks', [newTask, ...tasks])
             .then(toggleForm())
             .catch(e=>console.warn(e,"err sauvegarde task"));
         setIsReady(true);
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
         storeData('tasks', newTasks)
             .catch(e => console.warn("err update task après delete : ",e));
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