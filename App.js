import React from "react";
import useUffect from './pages/useUffect'
import useState from './pages/useState'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="useState" component={useState} />
        <Tab.Screen name="useUffect" component={useUffect} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

