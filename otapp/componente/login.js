import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';
import { loginStyle } from '../styles/login.style';


function login({ navigation }) {
    return (

        <SafeAreaView style={loginStyle.content}>
           
            <View style={loginStyle.view}>
                <Card>
                    <Card.Content>
                        <View style={loginStyle.view2}>
                            <Text style={loginStyle.text1}>OTAPP</Text>
                        </View>
                        <View style={loginStyle.view3}>
                            <Text style={loginStyle.text2}>Entre com seu e-mail e senha</Text>
                        </View>

                        <TextInput label="E-mail" keyboardType="email-address" style={loginStyle.textInput1}></TextInput>
                        <TextInput label="Senha de acesso" secureTextEntry={true} style={loginStyle.textInput2}></TextInput>
                        <Button mode="contained" style={loginStyle.button} onPress={() => console.log('Pressed')}>
                            <Text style={loginStyle.textButton}>Entrar</Text>
                        </Button>
                        <Button uppercase={false} onPress={() => console.log('Pressed')} style={loginStyle.senha}>
                            <Text>Esqueceu a senha?</Text>
                        </Button>
                        <View>
                            <Text style={loginStyle.text3}>OU</Text>
                        </View>
                        <Button mode="contained" style={loginStyle.button} onPress={()=> navigation.navigate('cadastro',{name:'cadastro'})} >
                            <Text style={loginStyle.textButton}>Cadastrar</Text>
                        </Button>
                    </Card.Content>
                </Card>
            </View>

        </SafeAreaView>

    );

};

export default login;