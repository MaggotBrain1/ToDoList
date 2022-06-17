import React, {useEffect, useState} from 'react'
import {FlatList} from "react-native";
import TaskItem from "./TaskItem";


const CarouselTasks = ({ tasks,setTaskFocus }) => {

    const _renderItem = ({ item }) =>
        <TaskItem
            id={item.id}
            completed={item.completed}
            title={item.title}
            item={item}
            tasks={tasks}
            setTaskFocus={setTaskFocus}
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