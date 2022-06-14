import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput,Modal} from "react-native";
import {getFormatedDate} from 'react-native-modern-datepicker';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ModalDP from "../modals/ModalDP";
import ModalTime from "../modals/ModalTime";

const Task = ({route }) => {

    const [heure, setHeure] = useState('');
    const [date, setDate] = useState(null);
    const [text, setText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);

    let task = route.params.params["task"];

    useEffect(() => {
        if(date != null) {
            const dateFormat = getFormatedDate(date, "DD/MM/YYYY");
            task.date = dateFormat
        }
        if(heure != null){
            task.heure = heure.toString();
        }
    }, [date,heure]);

    const toggleModal = () =>{
        setModalVisible(!modalVisible)
    }
    const toggleModal1 = () =>{
        setModalVisible1(!modalVisible1)
    }
    return(
            <ImageBackground source={require('../../../assets/bgHome.jpg')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <Text style={styles.txtDetail}>Détail de la tâche</Text>
                    <View style={styles.containerDetails}>
                        <Text style={styles.txtNameTask}>{task.title}</Text>

                        <View style={styles.lineDetails}>
                            <TouchableOpacity onPress={()=>setModalVisible1(true)}>
                                <Ionicons name="time-outline" size={32} color="#02A1CD" />
                            </TouchableOpacity>
                            {task.heure? <Text style={styles.txt}>
                                    {task.heure}
                                </Text>
                                :
                                <Text style={styles.txt}>
                                    Modifier l'heure  de la tâche
                                </Text>}
                        </View>

                        <View style={styles.lineDetails}>
                            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                                <FontAwesome5 name="calendar" size={30} color="#02A1CD" />
                            </TouchableOpacity>

                            {task.date? <Text style={styles.txt}>
                                    {task.date}
                            </Text>
                            :
                                <Text style={styles.txt}>
                                    Modifier la date pour cette tâche
                                </Text>}
                        </View>

                        <View style={styles.lineDetails}>
                            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                                <FontAwesome5 name="calendar-times" size={30} color="#02A1CD" />
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Ajouter une dead line
                            </Text>
                        </View>

                        <View style={styles.lineDetails}>
                            <FontAwesome name="tasks" size={30} color="#02A1CD" />
                            <TextInput
                                style={styles.input}
                                onChangeText={setText}
                                value={text}
                                placeholder="Ajouter des détails à cette tâche"
                                placeholderTextColor={ "#00365C"}
                            />
                        </View>
                    </View>
                </View>

                <ModalDP  setDate={setDate}  modalVisible={modalVisible} toggleModal={toggleModal}/>
                <ModalTime  setHeure={setHeure}  modalVisible1={modalVisible1} toggleModal1={toggleModal1}/>

            </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        alignItems:"center"
    },
    backgroundImage: {
        flex: 1,
        resizeMode:"cover",
    },
    txtDetail:{
        textAlign:"center",
        color:"#00365C",
        fontSize:25,
        marginTop:"40%",
        marginBottom:"10%"
    },
    txtNameTask:{
        color:"#02A1CD",
        fontSize:18,
        margin:"10%"
    },
    txt:{
        textAlign:"center",
        color:"#00365C",
        fontSize:16,
        alignSelf:"flex-start",
    },
    containerDetails:{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        height:"60%",
        width:"90%",
        borderRadius:20,
        alignItems:"center",

    },
    lineDetails:{
        margin:"5%",
        width:"90%",
        justifyContent:"space-between",
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center"
    },
    input:{
        textAlign:"center",
        color:"#00365C",
        fontSize:16,
    },
    datePicker:{
        marginTop: "65%"
    },
    btnModal:{
        alignItems:"center",
        marginTop:12
    }
});

export default Task;