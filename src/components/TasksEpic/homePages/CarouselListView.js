import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert} from "react-native";

import TaskList from "../TasksList";
import {readAllDatas, readDataObject, storeData, updateStoreData} from "../../StorageDataService/StorageDataService";

const  CarouselListView = ({tasks,setTasks}) => {
        console.log("render de CarouselListView");
    const onChangeStatus = (id) => {
        console.log("on update le statut")
        let newTask = []
        tasks.forEach(task => {
            if (task.id === id) {
                task.completed = !task.completed
                newTask.push(task)
            } else {
                newTask.push(task);
            }
        })
        setTasks(newTask);
        storeData('tasksComplet', tasks)
            .catch(e => console.warn("err update task après delete : ",e));
    }
    const onDeleteTask = (id) => {
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

    const handleDeleteTask = (id) =>{
        Alert.alert(
            "Attention",
            "Vous êtes sur le point de Supprimer cette tâche",
            [
                {
                    text: "Annuler",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Modifier",
                    onPress: () => onDeleteTask(id) }
            ]
        );
    }

    return (
            <View style={styles.taskListContainer}>
                <TaskList tasks={tasks} onChangeStatus={onChangeStatus} handleDeleteTask={handleDeleteTask} />
            </View>

    );
}


const styles = StyleSheet.create({
    taskListContainer:{
        top:"10%",
        height:"90%"
    }

})
export default CarouselListView;
