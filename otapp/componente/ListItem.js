import { navigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Button } from 'react-native';
import Map from './map';

const ListItem = ({ data, navigation }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: data.avatar }} style={styles.itemPhoto} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.name}</Text>
        <Text style={styles.itemP2}>{data.exam}</Text>
        <Text style={styles.itemP2}>{data.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingTop: 15,
    paddingBottom: 15,
  },
  itemPhoto: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  itemInfo: {
    marginLeft: 20,
  },
  itemP1: {
    fontSize: 22,
    color: '#000000',
    marginBottom: 5,
    fontWeight: 'bold'
  },
  itemP2: {
    fontSize: 18,
    color: '#999999',
  },
});

export default ListItem;