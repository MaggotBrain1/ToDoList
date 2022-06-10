import React from 'react';
import { StyleSheet, SafeAreaView,View,ImageBackground } from 'react-native';
import TopBar from "./nav/TopBar";
import Header from "./_Shared/Header";
import TasksContainer from "./TasksEpic/TasksContainer";

export default function AddList() {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/bgHome.jpg')} style={styles.backgroundImage} >
                <TopBar/>
                <Header/>
                <TasksContainer/>
            </ImageBackground>
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        backgroundColor: "#00365C",

    },
    backgroundImage: {
        flex: 1,
        resizeMode:"cover",
    },
});

