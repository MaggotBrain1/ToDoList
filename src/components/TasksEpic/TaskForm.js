import React, {useEffect, useRef, useState} from 'react';
import {View,TextInput, StyleSheet,Image,TouchableOpacity} from 'react-native';
import {Entypo, FontAwesome5} from '@expo/vector-icons';
import ModalDP from "../modals/ModalDP";
import ModalTime from "../modals/ModalTime";
import {getFormatedDate} from "react-native-modern-datepicker";

const TaskForm = ({onAddTask}) => {

    const [title, setTitle] = useState('');
    const refsFocus = useRef(null);
    const [heure, setHeure] = useState('');
    const [date, setDate] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);

    useEffect(() => {
        refsFocus.current.focus();
    });

    const toggleModal = () =>{
        setModalVisible(!modalVisible)
    }
    const toggleModal1 = () =>{
        setModalVisible1(!modalVisible1)

    }
    const _onChangeText = value => {
        setTitle( value )
    };

    const _onPressBtn = () =>{
        if (title.length > 0) {
            onAddTask(title,date,heure);
            setTitle('');
        }
    };
    return(

         <View style={styles.container}>
            <View style={styles.containerInput}>
                <FontAwesome5 name="calendar" size={30} color="white" />

                <TextInput  textAlign={'center'}
                            value={title}
                            onChangeText={_onChangeText}
                            placeholder = "Créer une nouvelle tâche"
                            placeholderTextColor='#B9D4E5'
                            returnKeyType = {"done"}
                            style={{ color:'white' }}
                            onSubmitEditing={_onPressBtn}
                            ref={refsFocus}
                />

            </View>
             <ModalDP  setDate={setDate}  modalVisible={modalVisible} toggleModal={toggleModal}/>
             <ModalTime  setHeure={setHeure}  modalVisible1={modalVisible1} toggleModal1={toggleModal1}/>
        </View>


    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width:"100%",
        zIndex:2,

    },
    containerInput: {
        width: '100%',
        height: 200,
        borderWidth: 2,
        borderColor: '#359BCC',
        backgroundColor: '#359BCC',
        padding: 10,
    },
    btn:{
        right:15,
    }
})

export default  TaskForm;