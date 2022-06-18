import React from 'react'
import {FlatList} from "react-native";
import TaskTile from "./TaskTile";

const TaskList = ({ tasks, onChangeStatus, handleDeleteTask }) => {
    console.log("render de TaskList");

    const _renderItem = ({ item }) =>
        <TaskTile
            id={item.id}
            completed={item.completed}
            title={item.title}
            onChangeStatus={onChangeStatus}
            onDeleteTask={handleDeleteTask}
            item={item}
            tasks={tasks}
        />
    return (
        <FlatList
         data={tasks}
         renderItem={_renderItem}
         keyExtactor={item => item.id}
         />
    );
}
export default TaskList;