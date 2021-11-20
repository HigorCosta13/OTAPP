import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, styles, StyleSheet } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';
import { Asset, Constants, FileSystem } from 'react-native-unimodules';

function cadastro() {
    const [nome, setNome] = React.useState('');
    const [sobrenome, setSobrenome] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [dataDeNascimento, setDataDeNascimento] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [confimarSenha, setConfimarSenha] = React.useState('');
    const [foto, setFoto] = React.useState('');
    const [type, setType] = useState(Camera.Constants.Type.front)
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted')
        })();
    }, [])

    if (hasPermission === null) {
        return <View />
    }

    if (hasPermission === false) {
        return <Text> Acesso Negado!</Text>
    }

    return (
        <SafeAreaView style={cadastroStyle.content}>
            <View style={cadastroStyle.view}>
                <Card>
                    <Card.Content>
                        <View style={cadastroStyle.view2}>
                            <Text style={cadastroStyle.text1}>Cadastro</Text>
                        </View>
                        <ScrollView contentContainerStyle={{ paddingHorizontal: 2 }}>
                            <TextInput label="Nome" keyboardType="name-phone-pad" style={cadastroStyle.textInput1}></TextInput>
                            <TextInput label="Sobrenome" keyboardType="name-phone-pad" style={cadastroStyle.textInput1}></TextInput>
                            <TextInput label="cpf" keyboardType="name-phone-pad" style={cadastroStyle.textInput1}></TextInput>
                            <TextInput label="Data de Nascimento" keyboardType="name-phone-pad" style={cadastroStyle.textInput1}></TextInput>
                            <TextInput label="E-mail" keyboardType="email-address" style={cadastroStyle.textInput1}></TextInput>
                            <TextInput label="Senha" secureTextEntry={true} style={cadastroStyle.textInput1}></TextInput>
                            <TextInput label="Confirmar senha" secureTextEntry={true} style={cadastroStyle.textInput1}></TextInput>
                            <View>
                                <Camera style={cadastroStyle.camera} type={type}>
                                    <View style={cadastroStyle.buttonContainer}>
                                        <TouchableOpacity
                                            style={cadastroStyle.button}
                                            onPress={() => {
                                                setType(
                                                    type === Camera.Constants.Type.back
                                                        ? Camera.Constants.Type.front
                                                        : Camera.Constants.Type.back
                                                );
                                            }}>
                                            <Text style={styles.text}> Flip </Text>
                                        </TouchableOpacity>
                                    </View>
                                </Camera>
                            </View>
                        </ScrollView>
                        <Button mode="contained" style={cadastroStyle.button} onPress={() => console.log('Pressed')}>
                            <Text style={cadastroStyle.textButton}>Cadastrar</Text>
                        </Button>

                    </Card.Content>
                </Card>
            </View>

        </SafeAreaView>

    );

};

const cadastroStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: 'white'
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
    google: {
        marginTop: 20,
        marginBottom: 20
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
})

export default cadastro;