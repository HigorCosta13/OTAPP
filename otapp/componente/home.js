import * as React from 'react';
import { View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { Button, Card, Text, TextInput } from 'react-native-paper';
import { fonts } from 'react-native-elements/dist/config';
import { Input } from 'react-native-elements/dist/input/Input';
import { Divider } from 'react-native-elements';
import { homeStyle } from '../styles/home.style';


function home() {

  return (
    <SafeAreaView style={homeStyle.content}>
        <View style={homeStyle.view}>
          <Card>
            <Card.Content>
              <View style={homeStyle.view2}>
                  <Text style={homeStyle.text1}>Home</Text>
              </View>

              <View style={homeStyle.view3}>
                  <Text style={homeStyle.text2}>Principais atividades</Text>
              </View>

              <View style={homeStyle.margin1} >
                <Divider/>
              </View>
              
              <View style={homeStyle.diviçãoDeItens}>
                <TouchableOpacity>
                  <Image style={homeStyle.image} source={require('../Imagens/exame.jpg')} />
                  <Text style={homeStyle.textomenu}>Exames</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <Image style={homeStyle.image} source={require('../Imagens/agendamento.jpg')} />
                  <Text style={homeStyle.textomenu}>Agendamento</Text>
                </TouchableOpacity>
              </View>
              
              <View style={homeStyle.margin1} >
                <Divider/>
              </View>
              
              <View style={homeStyle.diviçãoDeItens}>
                <TouchableOpacity>
                  <Image style={homeStyle.image} source={require('../Imagens/unnamed.jpg')} />
                  <Text style={homeStyle.textomenu}>Vacinas</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <Image style={homeStyle.image} source={require('../Imagens/age.jpeg')} />
                  <Text style={homeStyle.textomenu}>Perfil</Text>
                </TouchableOpacity>  
              </View>
            </Card.Content> 
          </Card>
        </View>

    </SafeAreaView>

  );

};

export default home;