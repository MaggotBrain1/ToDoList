import React,{ useState } from 'react';
import {View,TextInput, StyleSheet,Image,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const TaskForm = ({onAddTask}) => {

    const [title, setTitle] = useState('')

 ///  title prend la valeur du texte saisi dans le textInput ///
    const _onChangeText = value => {
        setTitle( value )
    };

 /// Ajout d'une tâche lors d'un clique sur  l'image 'send' ou la touche dédiée sur le clavier ///
    const _onPressBtn = () =>{
        if (title.length > 0) {
            onAddTask(title);
            setTitle('');
        }
    };
    return(

        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput  textAlign={'center'}
                            value={title}
                            onChangeText={_onChangeText}
                            placeholder = "Créer une nouvelle tâche"
                            placeholderTextColor='#B9D4E5'
                            returnKeyType = {"done"}
                            style={{ color:'white' }}
                            onSubmitEditing={_onPressBtn}
                />
            </View>
            <TouchableOpacity onPress={_onPressBtn}>
                <Entypo name="add-to-list" size={30} color="#00365C"style={styles.btn} />
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width:"100%",
        padding:5

    },
    containerInput: {
        width: '75%',
        height: '100%',
        borderWidth: 2,
        borderColor: '#359BCC',
        borderRadius: "10%",
        backgroundColor: '#359BCC',
        padding: 10,
    },
    btn:{
        right:15,
    }
})

export default  TaskForm;