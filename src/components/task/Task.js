import React, {useState} from "react";
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput} from "react-native";
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';

import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {CustomLocale} from "../../datePicker/CustomLocal";

const Task = ({route, navigation}) => {
    getFormatedDate(new Date(), "YYYY/MM/DD h:m");

    const [selectedDate, setSelectedDate] = useState('');
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false)
    let task = route.params.params["task"];
    return(
            <ImageBackground source={require('../../../assets/bgHome.jpg')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <Text style={styles.txtDetail}>Détail de la tâche</Text>
                    <View style={styles.containerDetails}>
                        { open ?
                            <DatePicker onSelectedChange={date => setSelectedDate(date)} locale={CustomLocale}/>
                            :
                            <></>
                        }
                        <Text style={styles.txtNameTask}>{task.title}</Text>

                        <View style={styles.lineDetails}>
                            <TouchableOpacity onPress={()=>setOpen(!open)}>
                                <FontAwesome5 name="calendar" size={30} color="#02A1CD" />
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Ajouter heure/date pour cette tache
                            </Text>
                        </View>

                        <View style={styles.lineDetails}>
                            <TouchableOpacity onPress={()=>setOpen(!open)}>
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
            </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
       // backgroundColor: "#00365C",
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
        marginTop:"10%"
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
        borderRadius:20,
        alignItems:"center",
    },
    lineDetails:{
        margin:"5%",
        width:"80%",
        justifyContent:"space-between",
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center"
    },
    input:{
        textAlign:"center",
        color:"#00365C",
        fontSize:16,
    }
});

export default Task;