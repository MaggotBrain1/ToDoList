import React, {useState} from "react";
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Alert, Vibration} from "react-native";
import {AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import ModalDP from "../modals/ModalDP";
import ModalTime from "../modals/ModalTime";
import {storeData} from "../StorageDataService/StorageDataService";
import ModalDeadLine from "../modals/ModalDeadLine";
import PhotoItem from "../photo/PhotoItem";
import BottomBar from "../nav/BottomBar";
import {convertDateToFullString} from "../TasksEpic/homePages/TaskItem";

const DetailsTask = ({route,navigation }) => {

    const btnStyle = {    marginTop:-4.6, marginLeft:0.5}

    let item = route.params["item"];
    let idItem = item.id;
    let tasks = route.params["tasks"];

    const [title, setTitle] = useState(item.title);
    const [completed, setCompleted] = useState(item.completed);
    const [deadLine, setDeadLine] = useState(item.deadLine);
    const [timeDeadLine, setTimeDeadLine] = useState(null);
    const [detail, setDetail] = useState(item.detail);
    const [date, setDate] = useState(item.date);
    const [heure, setHeure] = useState(item.heure);
    const [image, setImage] = useState(item.image);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [data, setData] = useState([]);

    const dateStr =convertDateToFullString(date);
    const DeadLineStr = convertDateToFullString(date);

    const handlePress = ()=>{
        let newTasks = [...tasks]
        const updateTask = {
            id: idItem,
            title: title,
            completed: completed,
            deadLine: deadLine,
            detail: detail,
            date: date,
            heure: heure,
            image: image
        }

        const dataIndex = tasks.findIndex((item)=> item.id === updateTask.id);
        newTasks.splice(dataIndex,1,updateTask);
        setData(...newTasks);

        storeData("tasks", newTasks)
            .then(() => console.log("on update : ", newTasks))
            .then(()=> navigation.navigate('Home'))
            .catch(e => console.warn("err update storage : ",e))

        Vibration.vibrate(100);
    }

    const handleEditToDo = () =>{
        Alert.alert(
            "Attention",
            "Vous êtes sur le point de modifier cette tâche",
            [
                {
                    text: "Annuler",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Modifier",
                    onPress: () => handlePress() }
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

    return(
            <ImageBackground source={require('../../../assets/bgHome.jpg')} style={styles.backgroundImage} >
                <View style={styles.container}>


                    <Text style={styles.txtDetail}>Détail de la tâche</Text>
                    <View  style={styles.taskImg}>

                            <PhotoItem image={image} setImage={setImage}/>


                    </View>
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
                                    {dateStr}
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

                            <View style={styles.deadLineContainer}>
                                {deadLine?
                                    <Text style={styles.txt}>
                                             {DeadLineStr} à
                                          </Text>
                                    :
                                    <Text style={styles.txt}>
                                        Ajouter une dead line
                                    </Text>
                                }
                                {
                                    timeDeadLine ?
                                    <Text style={styles.txtHour}>
                                       {timeDeadLine}
                                    </Text>
                                    :
                                    <></>
                                }
                            </View>
                        </View>

                        <View style={styles.lineDetails}>
                            <AntDesign name="edit" size={30} color="#02A1CD" />
                            <TextInput
                                style={styles.input}
                                onChangeText={setDetail}
                                value={detail}
                                placeholder="Ajouter des détails à cette tâche"
                                placeholderTextColor={ "#00365C"}
                            />
                        </View>
                    </View>
                </View>
                <ModalDP  setDate={setDate}  modalVisible={modalVisible} toggleModal={toggleModal}/>
                <ModalTime  setHeure={setHeure}  modalVisible1={modalVisible1} toggleModal1={toggleModal1}/>
                <ModalDeadLine  setDeadLine={setDeadLine} setTimeDeadLine={setTimeDeadLine}  modalVisible2={modalVisible2} toggleModal2={toggleModal2}/>
                <BottomBar iconName={"save-outline"} size={60} btnStyle={btnStyle} onPressed={()=>handleEditToDo()}/>
            </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        alignItems:"center",

    },
    backgroundImage: {
        flex: 1,
        resizeMode:"cover",
    },
    txtDetail:{
        textAlign:"center",
        color:"#00365C",
        fontSize:25,
        marginTop:"20%",
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
    txtHour:{
        marginLeft:6,
        color:"red"
    },
    containerDetails:{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        height:"50%",
        width:"90%",
        borderRadius:20,
        alignItems:"center",
        marginBottom:"16%",

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
    },
    taskImg:{
        flex:1,
        borderRadius:100,
        marginTop:"6%",
    },
    deadLineContainer:{
         flexDirection:"row",
        alignItems:"center",

    }
});

export default DetailsTask;