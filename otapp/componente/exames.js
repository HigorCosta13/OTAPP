import * as React from 'react';
import { View, SafeAreaView, FlatList } from 'react-native'
import { Button, Card, Text, TextInput } from 'react-native-paper';
import { fonts } from 'react-native-elements/dist/config';
import { Input } from 'react-native-elements/dist/input/Input';
import { Divider } from 'react-native-elements';
import { exameStyle } from '../styles/exame.style';


function exame() {
  
  const produtos = [
    {
      id: '001',
      desc:['Hospital São Luiz','25.00']
    },
    {
      id:'002',
      desc:['Laboratório Delboni','50.00']
    },
    {
      id:'003',
      desc:['Monitor','430.00']
    },
  ]

  return (
    <SafeAreaView style={exameStyle.content}>
      <View style={exameStyle.view}>
        <Text>Exames</Text>
        <FlatList 
          data={produtos}
          keyExtractor={item=>item.id}
          renderItem={({item})=><Text>Descrição:{item.desc[0]} - Valor:{item.desc[1]}</Text>}

        />
      </View>
    </SafeAreaView>

  );

};

export default exame;