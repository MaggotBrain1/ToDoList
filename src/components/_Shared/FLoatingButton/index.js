import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const FloatingButton = ({ toggleForm, isFormOpened }) => {

    return(

        <TouchableOpacity onPress={toggleForm} style={styles.container}>
            { isFormOpened ? <Ionicons name="backspace" size={76} color="#359BCC" /> :
                <Ionicons name="add-circle" size={76} color="#359BCC" />}
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom: 16,
        right:8,
    },
    btn:{
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        fontSize: 30,
        alignItems:"center"
    }
})

export default FloatingButton