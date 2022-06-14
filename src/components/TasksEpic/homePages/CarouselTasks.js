import React from 'react'
import {FlatList} from "react-native";
import TaskItem from "./TaskItem";


const CarouselTasks = ({ data }) => {

    const _renderItem = ({ item }) =>
        <TaskItem
            id={item.id}
            completed={item.completed}
            title={item.title}
            item={item}
        />
    return (
        <FlatList
            horizontal={true}
            data={data}
            renderItem={_renderItem}
            keyExtactor={item => item.id}
        />
    );
}

export default CarouselTasks;