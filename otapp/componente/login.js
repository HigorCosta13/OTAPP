import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';
import { loginStyle } from '../styles/login.style';
import { Alert} from 'react-native'

function login({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
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

                        <TextInput label="E-mail" keyboardType="email-address"  value={email}  onChangeText={text => setEmail(text)} style={loginStyle.textInput1}></TextInput>
                        <TextInput label="Senha de acesso" secureTextEntry={true}  value={senha}  onChangeText={text => setSenha(text)}  style={loginStyle.textInput2}></TextInput>
                        <Button mode="contained" style={loginStyle.button} onPress={() => Alert.alert(
                                                                                        'Alert Title',
                                                                                         'Email '+ email +' , ' + 'senha ' + senha , 
                                                                                        [
                                                                                            { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                                                                                         
                                                                                        ],
                                                                                        { cancelable: false }
                                                                                    )}>
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

export default login;