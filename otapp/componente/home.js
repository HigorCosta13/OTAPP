import * as React from 'react';
import { View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { Card, Text } from 'react-native-paper';
import { Divider } from 'react-native-elements';
import { homeStyle } from '../styles/home.style';
import { navigation } from '@react-navigation/native';


function home({navigation}) {

  return (
    <SafeAreaView style={homeStyle.content}>
        <View style={homeStyle.view}>
          <Card>
            <Card.Content>
              <View style={homeStyle.view2}>
                  <Text style={homeStyle.text1}>Home</Text>
              </View>
              <View style={homeStyle.logo}>
                <Image style={{width: 80, height: 70, resizeMode: "cover"}} source={require('../Imagens/Logo_HPass.png')}/>
              </View>

              <View style={homeStyle.view3}>
                  <Text style={homeStyle.text2}>Principais atividades</Text>
              </View>

              <View style={homeStyle.margin1} >
                <Divider/>
              </View>
              
              <View style={homeStyle.diviçãoDeItens}>
              <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
                  <Image style={homeStyle.image} source={require('../Imagens/age.jpeg')} />
                  <Text style={homeStyle.textomenu}>Perfil</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate("Agendar")}>
                  <Image style={homeStyle.image2} source={require('../Imagens/agendamento.jpg')} />
                  <Text style={homeStyle.textomenu3}>Agendar Consulta</Text>
                </TouchableOpacity>
              </View>
              
              <View style={homeStyle.margin1} >
                <Divider/>
              </View>
              
              <View style={homeStyle.diviçãoDeItens}>
                <TouchableOpacity onPress={() => navigation.navigate("Agenda")}>
                  <Image style={homeStyle.image} source={require('../Imagens/minhaagenda.jpg')} />
                  <Text style={homeStyle.textomenu}>Minha Agenda</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate("Exames")}>
                  <Image style={homeStyle.image2} source={require('../Imagens/exame.jpg')} />
                  <Text style={homeStyle.textomenu2}>Meus Exames</Text>
                </TouchableOpacity>
              </View>

              <View style={homeStyle.margin1} >
                <Divider/>
              </View>

              <View style={homeStyle.diviçãoDeItens}>
                <TouchableOpacity onPress={() => navigation.navigate("Vacinas")}>
                  <Image style={homeStyle.image} source={require('../Imagens/unnamed.jpg')} />
                  <Text style={homeStyle.textomenu}>Minhas Vacinas</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate("Info")}>
                  <Image style={homeStyle.image2} source={require('../Imagens/info.jpg')} />
                  <Text style={homeStyle.textomenu2}>Info Vacinas</Text>
                </TouchableOpacity>
              </View>

            </Card.Content> 
          </Card>
        </View>

    </SafeAreaView>

  );

};

export default home;