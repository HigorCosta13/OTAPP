import { navigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const listItemVac = ({ data, navigation }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2J291HTgdj2-PAmbIXj19w8MDbW_RX9kog&usqp=CAU' }} style={styles.itemPhoto} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.name}</Text>
        <Text style={styles.itemP2}>Dose: {data.dose}</Text>
        <Text style={styles.itemP2}>Dose Atual: {data.atual}</Text>
        <Text style={styles.itemP2}>Data da Aplicação: {data.date}</Text>
        <Text style={styles.itemP2}>Próxima Aplicação: {data.dateProx}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
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
    marginRight: 40,
  },
  itemP1: {
    fontSize: 22,
    color: '#000000',
    marginBottom: 5,
    fontWeight: 'bold'
  },
  itemP2: {
    fontSize: 18,
    color: '#000000',
  },
});

export default listItemVac;