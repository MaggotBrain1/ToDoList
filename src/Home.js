import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import Header from "./components/_Shared/Header/index";
import BottomBar from "./components/nav/BottomBar";
import TasksByHome from "./components/TasksEpic/homePages/TasksByHome";

 const Home = () => {
     const btnStyle = {  marginTop:-7, marginLeft:-4.5}
     return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bgHome.jpg')} style={styles.backgroundImage} >
                <Header/>
                <TasksByHome/>
                <BottomBar iconName={"ios-search-circle"} size={100} onPressed={()=>console.log("coucou")} btnStyle={btnStyle} />
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

export default Home;

