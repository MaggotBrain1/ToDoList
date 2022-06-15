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
            <View style={styles.container} >

            <DatePicker
                style={styles.datePicker}
                onSelectedChange={date => setDate(date)}
                mode={"calendar"}/>
            <TouchableOpacity onPress={()=>toggleModal()} style={styles.btnModal}>
                <AntDesign name="checkcircle" size={70} color="#00365C" />
            </TouchableOpacity>
            </View>
        </Modal>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    datePicker:{
        width:"90%",
        borderRadius:20,
        marginTop:"50%",
    },
    btnModal:{
        alignItems:"center",
        top:66,
        left:2
    }
});

export default ModalDP;