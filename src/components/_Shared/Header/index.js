import React from 'react';
import {View,Text ,StyleSheet} from 'react-native';

 const days = ['Dimanch','Lundi','Mardi','Mercredi','Jeudi','Vendredi', 'Samedi'];
 const months =['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'];

export default function  Header () {
    const  date = new Date()

    return(

    <View style={styles.container}>
        <Text style={styles.day}> {days[date.getDay()]+','}</Text>
        <Text style={styles.title}> { date.getDate() + ' ' + months[date.getMonth()] + ' '}</Text>
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        position:"absolute",
        top:"14%",
    },
    day: {
        fontSize: 28,
        fontWeight:'bold',
        color:"#00365C"
    },
    title:{
        fontSize: 24,
        top:4,
        color:'#3195C9',
    }
})