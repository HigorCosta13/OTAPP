import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import home from './componente/home'
import agendamento from './componente/agendamento'
import exames from './componente/exames'
import perfil from './componente/perfil'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  
  const Tab = createBottomTabNavigator();
  

export default function app() {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={home} options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="home" color={color} size={26} /> ),}} />
            <Tab.Screen name="Exames" component={exames} options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="calendar" color={color} size={26} /> ),}} />
            <Tab.Screen name="Agendamentos" component={agendamento}options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="alarm" color={color} size={26} /> ),}}  />
            <Tab.Screen name="Perfil" component={perfil} options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="account" color={color} size={26} /> ),}} />
          </Tab.Navigator>
        </NavigationContainer>
    );
  }