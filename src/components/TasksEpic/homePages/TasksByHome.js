import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CarouselTasks from "./CarouselTasks";
import * as SplashScreen from "expo-splash-screen";
import {readDataObject} from "../../StorageDataService/StorageDataService";
import DatePicker from "react-native-modern-datepicker";



 const TaskByHome =  () => {

     const [nbAllTasks, setNbAllTasks] = useState(0);
     const [data, setData] = useState([]);
     const [isReady, setIsReady] = useState(false);

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


     return (

      <View style={styles.container} >
          <Text style={styles.txtNbTask}><Text style={styles.NbTask}>{data.length}</Text> tâche(s) en attente</Text>
          <View>
             <CarouselTasks data={data}/>
          </View>
          <View style={styles.calandar}>
              <DatePicker
                  options={{
                      backgroundColor: 'rgba(0, 44, 62, 0.5)',
                      textHeaderColor: '#00A2D2',
                      textDefaultColor: '#fff',
                      selectedTextColor: '#fff',
                      mainColor: '#5AC1E3',
                      textSecondaryColor: '#5AC1E3',
                  }}
                  current="2020-07-13"
                  selected="2020-07-23"
                  mode="calendar"
                  minuteInterval={30}
                  style={{ borderRadius: 10 }}
              />
          </View>
      </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight:"36%",
        width:"100%",
        borderRadius:20,
        alignItems:"center",
        top:120,

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
    calandar:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"

    }

});


 export default TaskByHome;
