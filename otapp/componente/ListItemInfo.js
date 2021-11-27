import { navigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const ListItemInfo = ({ data, navigation }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.name}</Text>
        <Text style={styles.itemP2}>{data.descr}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 10,
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
    color: '#000000',
    lineHeight: 30,
    textAlign: 'justify'
  },
});

export default ListItemInfo;