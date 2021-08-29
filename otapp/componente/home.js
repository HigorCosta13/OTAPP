import * as React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native'

import { Input } from 'react-native-elements/dist/input/Input';


function home() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lateral}>
        <Text style={styles.textomedio}>Principais atividades</Text>
        <Button
          onPress={''}
          title=" + Adicionar Card"
          color="#ff5618"
        />
      </View>
      <View>
      <Input placeholder='Pesquisar'
       leftIcon={{ type: 'font-awesome', name: 'map-marker' }}
       />
      </View>
      <View >
        <Text style={styles.titulo}>Atividades</Text>
      </View>
    </SafeAreaView>

  );
}

var styles = StyleSheet.create({
  container: {
    padding: 10
  },
  lateral: {
    fontSize: 20,
    justifyContent: 'space-between',
    margin: 10,
    flexDirection: 'row',
  },
  titulo: {
    fontSize: 30,
  },
  textomedio: {
    fontSize: 20
  }

});

export default home;