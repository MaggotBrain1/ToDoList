import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";

import TaskList from "../TasksList";
import {storeData} from "../../StorageDataService/StorageDataService";

const  CarouselListView = ({tasks}) => {

    const [ tsks, setTasks] = useState(tasks);

    const onChangeStatus =(id) => {
        let newTask = []
        tasks.forEach(task => {
            if (task.id === id) {
                newTask.push({id: id, title: task.title, completed: !task.completed})
            } else {
                newTask.push(task);
            }
        })
        setTasks(newTask);
        storeData('tasks', tasks)
            .catch(e => console.warn("err update task après delete : ",e));
    }
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

    return (
            <View style={styles.taskListContainer}>
                <TaskList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
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