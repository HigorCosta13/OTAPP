import * as React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView,TouchableOpacity,Image } from 'react-native'
import { fonts } from 'react-native-elements/dist/config';
import { Input } from 'react-native-elements/dist/input/Input';
import {Divider} from 'react-native-elements'


function home() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lateral}>
        <Text style={styles.textomedio}>Principais atividades</Text>
        <Button
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
      <View style={styles.diviçãoDeItens}>
      <TouchableOpacity>
        <Image style={styles.image} source={require('../Imagens/exame.jpg')}/>
        <Text style={styles.textomenu}>Ultimos exames</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.image} source={require('../Imagens/agendamento.jpg')}/>
        <Text style={styles.textomenu}>Agendar exame</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.margin} >
      <Divider/>
      </View><View >
        <Text style={styles.titulo}>vacinação</Text>
      </View>
      <View style={styles.diviçãoDeItens}>
      <TouchableOpacity>
        <Image style={styles.image} source={require('../Imagens/unnamed.jpg')}/>
        <Text style={styles.textomenu}>Agendamento</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.image} source={require('../Imagens/age.jpeg')}/>
        <Text style={styles.textomenu}>Proxima Dose</Text>
      </TouchableOpacity>
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
    marginBottom : 10,
  },
  textomedio: {
   
  },
  textomenu:{
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'ZCOOLKuaiLe-Regular',
    
  },
  image:{
    height: 125,
    width: 179,
    borderRadius:25
  },
  diviçãoDeItens:{
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  margin:{
    marginBottom : 10,
    marginTop : 25
  }
  


});

export default home;