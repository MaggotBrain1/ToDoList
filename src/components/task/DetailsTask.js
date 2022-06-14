import React, {useCallback, useEffect, useState} from "react";
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput,Alert} from "react-native";
import { FontAwesome} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import ModalDP from "../modals/ModalDP";
import ModalTime from "../modals/ModalTime";
import {readDataObject, storeData} from "../StorageDataService/StorageDataService";
import * as SplashScreen from 'expo-splash-screen';
import ModalDeadLine from "../modals/ModalDeadLine";


const DetailsTask = ({route,navigation }) => {

    let item = route.params.params["task"];

    const [id, setId] = useState(item.id);
    const [title, setTitle] = useState(item.title);
    const [completed, setCompleted] = useState(item.completed);
    const [deadLine, setDeadLine] = useState(item.deadLine);
    const [detail, setDetail] = useState(item.detail);
    const [date, setDate] = useState(item.date);
    const [heure, setHeure] = useState(item.heure);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [data, setData] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [toDoBeEdited, setToDoBeEdited] = useState(null)



    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
                await readDataObject("tasks").then(r=>setData(r))
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (isReady) {
            await SplashScreen.hideAsync();
        }
    }, [isReady]);

    if (!isReady) {
        return null;
    }


 /*   useEffect(() => {
        if(date != null) {
            const dateFormat = getFormatedDate(date, "DD/MM/YYYY");
            item.date = dateFormat
        }
        if(heure != null){
            item.heure = heure.toString();
        }
    }, [date,heure]);

  */



    const handleTriggerEdit = (item)=>{
        setToDoBeEdited(item);
    }
    const handleEditToDo = (editTodo)=>{
        const updateTask ={
            id: id,
            title: title,
            completed: completed,
            deadLine: deadLine,
            detail: detail,
            date: date,
            heure: heure
        };
        const newData = [...data];
        const dataIndex = data.findIndex((item)=> item.id === updateTask.id);
        newData.splice(dataIndex,1,updateTask);
        setData(newData);
        setToDoBeEdited(null)
        storeData("tasks", newData).then(r =>console.log("res",r) )
        Alert.alert(
            "Attention",
            "Vous êtes sur le point de modifier cette tâche",
            [
                {
                    text: "Annuler",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Continuer", onPress: () =>navigation.navigate('Home') }
            ]
        );
    }


    const toggleModal = () =>{
        setModalVisible(!modalVisible)
    }
    const toggleModal1 = () =>{
        setModalVisible1(!modalVisible1)
    }
    const toggleModal2 = () =>{
        setModalVisible2(!modalVisible2)
    }


        console.log("data depuis sa mere", data)

    return(
            <ImageBackground source={require('../../../assets/bgHome.jpg')} style={styles.backgroundImage} >
                <View style={styles.container}>


                    <Text style={styles.txtDetail}>Détail de la tâche</Text>
                    <View style={styles.containerDetails}>
                        <Text style={styles.txtNameTask}>{title}</Text>

                        <View style={styles.lineDetails}>
                            <TouchableOpacity onPress={()=>setModalVisible1(true)}>
                                <Ionicons name="time-outline" size={32} color="#02A1CD" />
                            </TouchableOpacity>
                            {heure? <Text style={styles.txt}>
                                    {heure}
                                </Text>
                                :
                                <Text style={styles.txt}>
                                    Ajouter une heure à la tâche
                                </Text>}
                        </View>

                        <View style={styles.lineDetails}>
                            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                                <FontAwesome5 name="calendar" size={30} color="#02A1CD" />
                            </TouchableOpacity>

                            {date? <Text style={styles.txt}>
                                    {date}
                            </Text>
                            :
                                <Text style={styles.txt}>
                                    Ajouter une date à la tâche
                                </Text>}
                        </View>

                        <View style={styles.lineDetails}>
                            <TouchableOpacity onPress={()=>setModalVisible2(true)}>
                                <FontAwesome5 name="calendar-times" size={30} color="#02A1CD" />
                            </TouchableOpacity>

                            {deadLine? <Text style={styles.txt}>
                                    {deadLine}
                                </Text>
                                :
                                <Text style={styles.txt}>
                                    Ajouter une dead line
                                </Text>}
                        </View>

                        <View style={styles.lineDetails}>
                            <FontAwesome name="tasks" size={30} color="#02A1CD" />
                            <TextInput
                                style={styles.input}
                                onChangeText={setDetail}
                                value={detail}
                                placeholder="Ajouter des détails à cette tâche"
                                placeholderTextColor={ "#00365C"}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>handleEditToDo()}>
                        <Ionicons name="arrow-back-circle-sharp" size={90} color="#02A1CD" />
                    </TouchableOpacity>
                </View>

                <ModalDP  setDate={setDate}  modalVisible={modalVisible} toggleModal={toggleModal}/>
                <ModalTime  setHeure={setHeure}  modalVisible1={modalVisible1} toggleModal1={toggleModal1}/>
                <ModalDeadLine  setDeadLine={setDeadLine}  modalVisible2={modalVisible2} toggleModal2={toggleModal2}/>


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

export default DetailsTask;