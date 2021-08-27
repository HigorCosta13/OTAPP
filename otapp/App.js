import * as React from 'react';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import home from './componente/home'
import agendamento from './componente/agendamento'
import exames from './componente/exames'
import perfil from './componente/perfil'
  
  const Tab = createBottomTabNavigator();
  

export default function app() {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={home} />
            <Tab.Screen name="Exames" component={exames} />
            <Tab.Screen name="Agendamentos" component={agendamento} />
            <Tab.Screen name="Perfil" component={perfil} />
          </Tab.Navigator>
        </NavigationContainer>
    );
  }