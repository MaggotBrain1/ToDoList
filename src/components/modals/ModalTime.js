import React from "react";
import {Modal, StyleSheet, TouchableOpacity, View} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import {AntDesign} from "@expo/vector-icons";

const ModalTime = ({setHeure,modalVisible1,toggleModal1}) =>{

    const handleTime =(selectedTime)=>{
        console.log("selectedTime",selectedTime)
        setHeure(selectedTime)
    }
    return(
        <View style={styles.modal} >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
            >
                <DatePicker style={styles.datePicker}
                            mode="time"
                            minuteInterval={1}
                            onTimeChange={selectedTime => handleTime(selectedTime)}
                            />
                <TouchableOpacity onPress={()=>toggleModal1()} style={styles.btnModal}>
                    <AntDesign name="checkcircle" size={70} color="#00365C" />
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    datePicker:{
        marginTop: "81.5%",
        width:"80%",
        borderRadius:20,


    },
    btnModal:{
        alignItems:"center",
        marginTop:12
    }
});

export default ModalTime;