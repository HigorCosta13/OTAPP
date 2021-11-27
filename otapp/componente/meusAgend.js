import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { navigation } from '@react-navigation/native';
import { Button } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import results2 from './results2'
import ListItemAgend from './ListItemAgend';
import { Text } from 'react-native-elements';
import results4 from './results4';


function meusAgend({ navigation, route }) {
  
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(results4);
  
  useEffect(() => {
    if (searchText === '') {
      setList(results4);
    } else { 
      setList(
        results4.filter((item) => item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...results4];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setList(newList);
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Minha Agenda</Text>
      <View>
        <Button style={styles.voltar} 
          icon="chevron-left" mode="text" onPress={() => navigation.navigate("Agendar")}>
          <Text style={styles.voltarTexto}>Agendar Consulta</Text>
        </Button>
        <Button style={styles.maissobre} 
          icon="chevron-right" mode="text" onPress={() => navigation.navigate("Home")}>
          <Text style={styles.voltarTexto}>Home</Text>
        </Button>
      </View>
      
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#ff5618"
          backgroundColor="#F8F8FF"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={32}
            color="#ff5618"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        style={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItemAgend data={item}/>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  input: {
    flex: 1,
    height: 50,
    margin: 30,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },
  list: {
    flex: 1,
  },
  titulo: {
    margin: 10,
    fontSize: 40,
    marginBottom: 10,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
  },
  textomedio: {
    margin: 10,
    fontSize: 20,
    color: 'gray',
  },
  voltar: {
    alignItems: 'flex-start',
  },
  voltarTexto: {
    textDecorationLine: 'underline',
  },
  maissobre: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute'
  },
});

export default meusAgend;