import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import Header from "./components/_Shared/Header/index";
import TopBar from "./components/nav/TopBar";
import TasksByHome from "./components/TasksEpic/homePages/TasksByHome";

 const Home = () => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bgHome.jpg')} style={styles.backgroundImage} >
            <Header/>
            <TasksByHome/>
            </ImageBackground>
            <TopBar/>
        </View>


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

export default Home;

