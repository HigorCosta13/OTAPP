import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

function login({ navigation }) {

    function PostLogin() {
        fetch('http://192.168.1.110:44342/Usuario/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => setToken(response));
            navigation.navigate('OTAPP', { screen: 'OTAPP' }) 
    }
    const [token, setToken] = React.useState('');

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('token', jsonValue)
        } catch (e) {
          // saving error
        }
      }
    storeData(token);

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

                        <TextInput label="E-mail" keyboardType="email-address" value={email} onChangeText={text => setEmail(text)} style={loginStyle.textInput1}></TextInput>
                        <TextInput label="Senha de acesso" secureTextEntry={true} value={senha} onChangeText={text => setSenha(text)} style={loginStyle.textInput2}></TextInput>
                        <Button mode="contained" style={loginStyle.button} onPress={() => PostLogin()}>
                            <Text style={loginStyle.textButton}>Entrar</Text>
                        </Button>
                        <View>
                            <Text style={loginStyle.text3}>OU</Text>
                        </View>
                        <Button mode="contained" style={loginStyle.button} onPress={() => navigation.navigate('cadastro', { name: 'cadastro' })} >
                            <Text style={loginStyle.textButton}>Cadastrar</Text>
                        </Button>
                    </Card.Content>
                </Card>
            </View>

        </SafeAreaView>

    );

};

const loginStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: 'white',
    },
    view: {
        width: "100%",
        height: "100%"
    },
    view2: {
        marginBottom: 10
    },
    view3: {
        marginBottom: 80
    },
    text1: {
        fontSize: 37,
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        marginTop: 20
    },
    text2: {
        fontSize: 18
    },
    textInput1: {
        marginBottom: 10
    },
    textInput2: {
        marginBottom: 20
    },
    button: {
        backgroundColor: "#ff5618",
        marginBottom: 10,
        height: 60,
        justifyContent: 'center'
    },
    text3: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textButton: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        textAlignVertical: 'center'
    },
    senha: {
        marginTop: 15,
        marginBottom: 20,
    },
    google: {
        marginTop: 20
    }
})

export default login;