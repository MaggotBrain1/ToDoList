import React from "react";
import {Modal, StyleSheet, TouchableOpacity, View} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import {AntDesign} from "@expo/vector-icons";

const ModalDeadLine = ({setDeadLine,setTimeDeadLine,modalVisible2,toggleModal2}) =>{
    return(
        <View style={styles.modal} >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
            >
                <DatePicker
                    style={styles.datePicker}
                    onSelectedChange={date => setDeadLine(date)}
                    onTimeChange={time => setTimeDeadLine(time)}
                   />
                <TouchableOpacity onPress={()=>toggleModal2()} style={styles.btnModal}>
                    <AntDesign name="checkcircle" size={70} color="#00365C" />
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    datePicker:{
        marginTop: "82%"
    },
    btnModal:{
        alignItems:"center",
        marginTop:11,
        marginLeft:5.5
    }
});

export default ModalDeadLine;