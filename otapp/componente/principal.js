import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';



import home from './home'
import agendamento from './agendamento'
import exames from './exames'
import perfil from './perfil'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  
  const Tab = createMaterialBottomTabNavigator();
  

export default function app() {
    return (

          <Tab.Navigator
            barStyle={{ backgroundColor: 'white' }}

          >
            <Tab.Screen name="Home" component={home} options={{ tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="home" color={color} size={26} /> ),}} />
            <Tab.Screen name="Exames" component={exames} options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="calendar" color={color} size={26} /> ),}} />
            <Tab.Screen name="Agendamentos" component={agendamento}options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="alarm" color={color} size={26} /> ),}}  />
            <Tab.Screen name="Perfil" component={perfil} options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="account" color={color} size={26} /> ),}} />
          </Tab.Navigator>
    );
  }
