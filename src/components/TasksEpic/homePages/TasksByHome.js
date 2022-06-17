import React, {useState} from 'react';
import {StyleSheet, View,TouchableOpacity, Text} from 'react-native';
import CarouselTasks from "./CarouselTasks";
import {readDataObject} from "../../StorageDataService/StorageDataService";
import DatePicker from "react-native-modern-datepicker";
import {useFocusEffect} from "@react-navigation/native";
import CarouselListView from "./CarouselListView";



 const TaskByHome =  () => {

     const [tasks, setTasks] = useState([]);
     const [listView, setListView] = useState(false);
     let dateNoFormatSTR = new Date();
     let trueMonth =dateNoFormatSTR.getMonth() + 1;
     let defaultSelectedDate =dateNoFormatSTR.getFullYear()+"-"+0+trueMonth+"-"+dateNoFormatSTR.getDate();
     const [taskFocus, setTaskFocus] = useState();


     useFocusEffect(
         React.useCallback(() => {
             readDataObject("tasks")
                 .then( r => setTasks(r) )
                 .catch(e => console.warn("err à la récuperation de la liste de tasks : ",e));
             console.log("taskFocus   "+taskFocus)
         }, [taskFocus])
     );


     return (

      <View style={styles.container} >
          <View style={styles.calendarContainer}>
          <View style={styles.calendar}>
              <DatePicker
                  options={{
                      backgroundColor: 'rgba(0, 44, 62, 0.5)',
                      textHeaderColor: '#00A2D2',
                      textDefaultColor: '#fff',
                      selectedTextColor: '#fff',
                      mainColor: '#5AC1E3',
                      textSecondaryColor: '#5AC1E3',
                  }}
                  current={taskFocus}
                  selected={taskFocus}
                  mode="calendar"
                  minuteInterval={30}
                  style={{ borderRadius: 10 }}
              />
          </View>
              <View style={styles.btnContainer}>
                      <TouchableOpacity onPress={()=>setListView(false)}>
                          <Text style={styles.twtBtn} >Cards</Text>
                      </TouchableOpacity>
                  <View style={styles.hairline} />
                  <TouchableOpacity onPress={()=>setListView(true)}>
                          <Text  style={styles.twtBtn}>Liste</Text>
                      </TouchableOpacity>
                  </View>

              <View style={styles.countTask}>
                  <Text style={styles.txtNbTask}><Text style={styles.NbTask}>{tasks.length}</Text> tâche(s)</Text>
              </View>

          </View>
          {listView ?
              <View style={styles.listCar}>
                  <CarouselListView tasks={tasks} />
              </View>
              :
              <View style={styles.cardCar}>
                  <CarouselTasks tasks={tasks} setTaskFocus={setTaskFocus}/>
              </View>
          }
      </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        borderRadius:20,
        alignItems:"center",
        top:90,


    },
    txt:{
        fontSize: 22,
        color:'#3195C9',
        marginTop:22,
    },
    txtNbTask:{
        color:"#00365C"
    },
    NbTask:{
        color:'#3195C9',
        fontSize: 22,
    },
    btnadd:{
        marginTop:50
    },
    calendarContainer:{
        top:20,
        flex:1,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly",
        flexWrap:"wrap"

    },
    calendar:{
        width:"60%",
    },
    btnContainer:{
        backgroundColor: 'rgba(0, 42, 78, 0.6)',
        flexDirection:"column",
        height:150,
        width:120,
        borderRadius:8,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"space-evenly",
    },
    twtBtn:{
        color:"#D3EAF0",
        fontSize: 16
    },

    hairline: {
        backgroundColor: '#00365C',
        height: 1,
        width: 80,
        opacity:0.4
    },
    cardCar:{
        alignSelf:"flex-end",
        maxHeight:"33%",
        bottom:240,

    },
    listCar:{
        maxHeight:"64%",
        bottom:120,
        justifyContent:"center",
    },
    countTask:{
        marginTop: -80,
        marginLeft:260
    }


});


 export default TaskByHome;
