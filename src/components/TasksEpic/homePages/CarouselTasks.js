import React, {useEffect, useState} from 'react'
import {FlatList} from "react-native";
import TaskItem from "./TaskItem";


const CarouselTasks = ({ tasks,setTaskFocus }) => {

    console.log("Render de CarouselTasks");

    const _renderItem = ({ item }) =>
        <TaskItem
            id={item.id}
            completed={item.completed}
            title={item.title}
            item={item}
            tasks={tasks}
        />
    return (
        <FlatList
            horizontal={true}
            data={tasks}
            renderItem={_renderItem}
            keyExtactor={item => item.id}
        />
    );
}

export default CarouselTasks;