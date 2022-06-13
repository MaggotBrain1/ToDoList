import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput,Modal} from "react-native";
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {Touchable} from "react-native-web";

const Task = ({route, navigation}) => {

    getFormatedDate(new Date(), "DD/MM/YYYY h:m");

    const [selectedDate, setSelectedDate] = useState('');
    const [text, setText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    let task = route.params.params["task"];

    console.log(task.dateHeure);

    useEffect(() => {
            task.dateHeure = selectedDate
        console.log(task.dateHeure);
        console.log(selectedDate);

    }, [selectedDate]);

    const setDateheure = (date) =>{
        console.log(date)
        task.dateHeure = date
    }
    return(
            <ImageBackground source={require('../../../assets/bgHome.jpg')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <Text style={styles.txtDetail}>Détail de la tâche</Text>
                    <View style={styles.containerDetails}>
                        <Text style={styles.txtNameTask}>{task.title}</Text>
                        <View style={styles.lineDetails}>
                            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                                <FontAwesome5 name="calendar" size={30} color="#02A1CD" />
                            </TouchableOpacity>
                            {task.dateHeure? <Text style={styles.txt}>
                                    {task.dateHeure}
                            </Text>
                            :
                                <Text style={styles.txt}>
                                    Ajouter heure/date pour cette tache
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

                <View style={styles.modal} >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <DatePicker style={styles.datePicker} onSelectedChange={date => setDateheure(date)} />
                        <TouchableOpacity onPress={()=>setModalVisible(false)} style={styles.btnModal}>
                            <AntDesign name="checkcircle" size={50} color="#00365C" />
                        </TouchableOpacity>
                    </Modal>
                </View>

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