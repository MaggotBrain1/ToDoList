import React, {useEffect, useRef, useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { FontAwesome5, Ionicons} from '@expo/vector-icons';
import ModalDP from "../modals/ModalDP";
import ModalTime from "../modals/ModalTime";

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

                <View style={styles.lineDetails}>
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

                <View style={styles.lineDetails}>
                    <TouchableOpacity onPress={()=>setModalVisible1(true)}>
                        <Ionicons name="time-outline" size={32} color="white" />
                    </TouchableOpacity>
                    {heure?
                        <Text style={styles.txt}>
                            {heure.toString()}
                        </Text>
                        :
                        <Text style={styles.txt}>
                            Ajouter une heure à tâche
                        </Text>
                    }
                </View>

                <View style={styles.lineDetails}>
                    <TouchableOpacity onPress={()=>setModalVisible(true)}>
                        <FontAwesome5 name="calendar" size={30} color="white" />
                    </TouchableOpacity>

                    {date? <Text style={styles.txt}>
                            {date}
                        </Text>
                        :
                        <Text style={styles.txt}>
                            Ajouter une date pour à la tâche
                        </Text>
                    }
                </View>

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
        height: 230,
        borderWidth: 2,
        borderColor: '#359BCC',
        backgroundColor: '#359BCC',
        padding: 10,
    },
    btn:{
        right:15,
    },
    lineDetails:{
        margin:"5%",
        width:"90%",
        justifyContent:"space-between",
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",
    },
    txt:{
        color:"#B9D4E5",
    }
})

export default  TaskForm;