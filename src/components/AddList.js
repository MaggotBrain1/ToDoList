import React, {useRef, useState} from 'react';
import { StyleSheet, SafeAreaView,View,ImageBackground } from 'react-native';
import TopBar from "./nav/TopBar";
import Header from "./_Shared/Header";
import TasksContainer from "./TasksEpic/TasksContainer";

export default function AddList() {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bgHome.jpg')} style={styles.backgroundImage} >
                <Header/>
                <TasksContainer showForm={showForm} toggleForm={()=>toggleForm()}/>
                <TopBar toggleForm={()=>toggleForm()}/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"space-between",

    },
    backgroundImage: {
        flex: 1,
        resizeMode:"cover",
        justifyContent:"space-between",
    },


});

