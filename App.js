import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Nav from "./src/components/nav/Nav";

export default function App() {
  return (
    <NavigationContainer>
        <Nav/>
    </NavigationContainer>
  );
};
