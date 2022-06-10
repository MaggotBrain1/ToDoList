import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import TaskList from "./TasksList";
import TaskForm from "./TaskForm";
import CountersContainer from "./Counters.Container";
import FloatingButton from "../_Shared/FLoatingButton";
import UserContext from '../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

 function  TasksContainer(props) {
     const [tasks, setTasks] = useState([]);

     const [isFormOpened, setIsFormOpened] = useState(false)

  /// crééer une nouvelle tâche ///
     const onAddTask = (title) => {
         const newTask = {id:new Date().getTime().toString(), title: title, completed: false }
         setTasks([newTask, ...tasks])
         storeData(tasks).then(r =>console.log("on stock les task") );
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

 ///  Affiche le formulaire de saisi de tâche au clique sur du floatingButton ///
     const toggleForm = () => {
         setIsFormOpened(!isFormOpened)
     }

  /*   const userContextValue = {
        tasks : tasks
     }*/
     const storeData = async (value) => {
         try {
             const jsonValue = JSON.stringify(value)
             await AsyncStorage.setItem('@tasks', jsonValue)
             console.log("On save la data")

         } catch (e) {
             console.log("impossible de sauvegarder la donnée")
         }
     }



     return (
         <View style={styles.container}>
         <View style={styles.countTask}>
             {isFormOpened && <TaskForm onAddTask={onAddTask}/>}
             <CountersContainer nbTasks={tasks.length} nbTasksCompleted={() => getTasksCompleted()}/>
         </View>
             <TaskList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
             <View style={styles.container}>
                <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened}/>
             </View>
         </View>

     );
}


 const styles = StyleSheet.create({
     container:{
         flex: 1,
         height:"100%",


     },
     countTask:{
         marginTop:-250


     }
 })
 export default TasksContainer;