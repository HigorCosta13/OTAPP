import  React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';




import home from './home';
import agendamento from './agendamento';
import exames from './exames';
import perfil from './perfil';
import vacinas from './vacinas';
import meusAgend from './meusAgend';
import info from './info';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

  
  const Tab = createMaterialBottomTabNavigator();
  

export default function principal() {
    return (

          <Tab.Navigator
            barStyle={{ backgroundColor: 'white' }}
          >
            <Tab.Screen name="Home" component={home} options={{ tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="home" color={color} size={26} /> ),}} />
            <Tab.Screen name="Exames" component={exames} options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="calendar" color={color} size={26} /> ),}} />
            <Tab.Screen name="Agendamentos" component={agendamento}options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="alarm" color={color} size={26} /> ),}}  />
            <Tab.Screen name="Vacinas" component={vacinas} options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="check" color={color} size={26} /> ),}} />
            <Tab.Screen name="Agenda" component={meusAgend} options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="note" color={color} size={26} /> ),}} />
            <Tab.Screen name="Perfil" component={perfil} options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="account" color={color} size={26} /> ),}} />
            <Tab.Screen name="Info" component={info} options={{  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="information" color={color} size={26} /> ),}} />
          </Tab.Navigator>
    );
  }
