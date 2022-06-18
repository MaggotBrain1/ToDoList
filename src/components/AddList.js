import React, { useState} from 'react';
import { StyleSheet,View,ImageBackground } from 'react-native';
import BottomBar from "./nav/BottomBar";
import Header from "./_Shared/Header";
import TasksContainer from "./TasksEpic/TasksContainer";

export default function AddList() {

    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };
    const btnStyle = {    marginTop:-4.6, marginLeft:0.5}

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bgHome.jpg')} style={styles.backgroundImage} >
                <Header/>
                <TasksContainer showForm={showForm} setShowForm={setShowForm}/>
                <BottomBar iconName={"add-circle"} size={95} btnStyle={btnStyle} onPressed={toggleForm}/>
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

