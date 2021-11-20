import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { fonts } from 'react-native-elements/dist/config';
import { Input } from 'react-native-elements/dist/input/Input';
import { Divider, Button } from 'react-native-elements';


function home() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lateral}>
        <Text style={styles.titulo}>HOME</Text>
        <Button
          title=" + Adicionar Card"
          style={styles.botao}
          buttonStyle={{
          borderRadius: 10,
          backgroundColor: "#ff5618",
          position: 'relative',
          zIndex: 10,
           marginTop: 20,
           marginBottom: 30
      
          }}
        />
      </View>
      <View style={styles.atividades}>
        <Text style={styles.textomedio}>Principais atividades</Text>
      </View>
      <View>
        <Input placeholder='Pesquisar'
          leftIcon={{ type: 'font-awesome', name: 'search' }}
          style={styles.input}
          color='black'
          backgroundColor='white'
          inputContainerStyle={{ borderBottomWidth: 0 }}

        />
      </View>
      <View >
        <Text style={styles.titulo}>Atividades</Text>
      </View>
      <View style={styles.diviçãoDeItens}>
        <TouchableOpacity>
          <Image style={styles.image} source={require('../Imagens/exame.jpg')} />
          <Text style={styles.textomenu}>Ultimos exames</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.image} source={require('../Imagens/agendamento.jpg')} />
          <Text style={styles.textomenu}>Agendar exame</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.margin} >
        <Divider />
      </View><View >
        <Text style={styles.titulo}>Vacinação</Text>
      </View>
      <View style={styles.diviçãoDeItens}>
        <TouchableOpacity>
          <Image style={styles.image} source={require('../Imagens/unnamed.jpg')} />
          <Text style={styles.textomenu}>Agendamento</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.image} source={require('../Imagens/age.jpeg')} />
          <Text style={styles.textomenu}>Proxima Dose</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );


  
}

var styles = StyleSheet.create({container: {
  padding: 10
},
lateral: {
  justifyContent: 'space-between',
  margin: 10,
  flexDirection: 'row',
},
atividades: {
  justifyContent: 'space-between',
  marginTop: 80,
  margin: 10,
  flexDirection: 'row',
  position: 'absolute',
  marginLeft: 30
},
titulo: {
  margin: 10,
  fontSize: 25,
  marginBottom: 10,
  fontFamily: 'Poppins-SemiBold',

},
textomedio: {
  fontSize: 15,
  color: 'gray',
},
textomenu: {
  fontSize: 20,
  textAlign: 'center',
  fontFamily: 'Poppins-Medium',
},
image: {
  height: 150,
  width: 180,
  borderRadius: 25
},
diviçãoDeItens: {
  justifyContent: 'space-between',
  flexDirection: 'row',
},
margin: {
  marginBottom: 10,
  marginTop: 25,
 
},
input: {
  borderRadius: 17,
},
});

export default home;