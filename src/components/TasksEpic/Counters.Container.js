import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Counter from "../_Shared/Counter";

const CountersContainer = ({ nbTasks, nbTasksCompleted }) => {
    return(

        <View style={styles.container}>
            <View style={styles.taskContainer}>
                <Counter nb={nbTasks} title={'Tâches créées'}/>
            </View>
            <View style={styles.taskContainer}>
                <Counter nb={nbTasksCompleted} title={'Tâches complétées'}/>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 25,
        padding:10,
    },
    taskContainer:{

    }
})

export default CountersContainer;