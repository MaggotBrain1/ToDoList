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
        <View  >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
            >
                <View style={styles.container}>
                <DatePicker style={styles.datePicker}
                            mode="time"
                            minuteInterval={1}
                            onTimeChange={selectedTime => handleTime(selectedTime)}

                            />
                    <TouchableOpacity onPress={()=>toggleModal1()} style={styles.btnModal}>
                        <AntDesign name="checkcircle" size={70} color="#00365C" />
                    </TouchableOpacity>
                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    datePicker:{
        width:"80%",
        borderRadius:20,
        marginTop:"50%",
    },
    btnModal:{
        alignItems:"center",
        top:84,
        left:2
    }
});

export default ModalTime;