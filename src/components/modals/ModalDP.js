import React from "react";
import {Modal, StyleSheet, TouchableOpacity, View} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import {AntDesign} from "@expo/vector-icons";

const ModalDP = ({setDate,modalVisible,toggleModal}) =>{
    return(
    <View style={styles.modal} >
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <DatePicker
                style={styles.datePicker}
                onSelectedChange={date => setDate(date)}
                mode={"calendar"}/>
            <TouchableOpacity onPress={()=>toggleModal()} style={styles.btnModal}>
                <AntDesign name="checkcircle" size={70} color="#00365C" />
            </TouchableOpacity>
        </Modal>
    </View>
    )
}

const styles = StyleSheet.create({
    datePicker:{
        marginTop: "84%%"
    },
    btnModal:{
        alignItems:"center",
        marginTop:12
    }
});

export default ModalDP;