import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';
import { cadastroStyle } from '../styles/cadastro.style';

function cadastro() {

    return (
        <SafeAreaView style={cadastroStyle.content}>
            <View style={cadastroStyle.view}>
                <Card>
                    <Card.Content>
                        <View style={cadastroStyle.view2}>
                            <Text style={cadastroStyle.text1}>Seja bem vindo</Text>
                        </View>
                        <View style={cadastroStyle.view3}>
                            <Text style={cadastroStyle.text2}>Preencha todos os campos</Text>
                        </View>

                        <TextInput label="Nome Completo" keyboardType="name-phone-pad" style={cadastroStyle.textInput1}></TextInput>
                        <TextInput label="E-mail" keyboardType="email-address" style={cadastroStyle.textInput1}></TextInput>
                        <TextInput label="Senha de acesso" secureTextEntry={true} style={cadastroStyle.textInput1}></TextInput>
                        <TextInput label="Confirme a senha de acesso" secureTextEntry={true} style={cadastroStyle.textInput2}></TextInput>
                        <Button mode="contained" style={cadastroStyle.button} onPress={() => console.log('Pressed')}>
                            <Text style={cadastroStyle.textButton}>Cadastrar</Text>
                        </Button>
                        
                    </Card.Content> 
                </Card>
            </View>

        </SafeAreaView>

  );

};

export default cadastro;