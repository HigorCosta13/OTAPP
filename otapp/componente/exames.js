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
import { Button } from 'react-native-paper';
import { navigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import results from './results';
import { Text } from 'react-native-elements';
import ListItem from './ListItem';


function exame({ navigation, route }) {
  
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(results);
  
  useEffect(() => {
    if (searchText === '') {
      setList(results);
    } else { 
      setList(
        results.filter((item) => item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...results];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setList(newList);
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Meus Exames</Text>
      <Button style={styles.voltar} 
        icon="chevron-left" mode="text" onPress={() => navigation.navigate("Home")}>
        <Text style={styles.voltarTexto}>Voltar</Text>
      </Button>
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
        renderItem={({ item }) => <ListItem data={item}/>}
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
});

export default exame;