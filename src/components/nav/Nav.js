import * as React from 'react';
import Home from "../../Home";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AddList from "../AddList";

function Nav() {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login" >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="AddList" component={AddList}/>

            </Stack.Navigator>
    );
}

export default Nav;