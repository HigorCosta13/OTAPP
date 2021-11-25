import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Platform } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import MaskInput from 'react-native-mask-input';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'react-native-fetch-blob';

function cadastro({ navigation }) {
    function PostCadastro() {
        fetch('http://192.168.1.110:44342/Usuario/Cadastro', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                sobrenome: sobrenome,
                cpf: cpf,
                dataDeNascimento: date,
                email: email,
                senha: senha,
                imagem:foto
            })
        }).then(res => res.json(), console.log(foto))
            .catch(error => console.error('Error:', error))
            .then(response => console.log('success', response));
    }


    const [nome, setNome] = React.useState('');
    const [sobrenome, setSobrenome] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [confimarSenha, setConfimarSenha] = React.useState('');

    const [hasPermission, setHasPermission] = useState(null);
    const [date, setDate] = useState();
    const foto =  RNFetchBlob.foto
    path = 'file:///storage/emulated/0/Android/data/com.otapp/cache/myTest.jpg'
    foto.readFile(path,'base64').then();



    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.view}>
                <Card>
                    <Card.Content>
                        <View style={styles.view2}>
                            <Text style={styles.text1}>Cadastro</Text>
                        </View>
                        <ScrollView contentContainerStyle={{ paddingHorizontal: 2 }}>
                            <TextInput label="Nome" keyboardType="name-phone-pad" value={nome} onChangeText={text => setNome(text)} style={styles.textInput1} />
                            <TextInput label="Sobrenome" keyboardType="name-phone-pad" value={sobrenome} onChangeText={text => setSobrenome(text)} style={styles.textInput1} />
                            <TextInput label="data" keyboardType="name-phone-pad" value={date} onChangeText={text => setDate(text)} style={styles.textInput1} />
                            <TextInput label="cpf" keyboardType="name-phone-pad" value={cpf} onChangeText={text => setCpf(text)} style={styles.textInput1} />
                            {/* <MaskInput
                                style={styles.textInput1}
                                value={cpf}
                                onChangeText={(masked) => {
                                    setCpf(masked);
                                }}
                                mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                            />
                            <MaskInput
                                style={styles.textInput1}
                                value={date}
                                onChangeText={(masked) => {
                                    setDate(masked);
                                }}
                                mask={[/\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/,'-', /\d/, /\d/]}
                            /> */}
                            {/* <DatePicker
                                value={date}
                                style={styles.datePickerStyle}
                                date={date} // Initial date from state
                                mode="date" // The enum of date, datetime and time
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        //display: 'none',
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0,
                                    },
                                    dateInput: {
                                        marginLeft: 36,
                                    },
                                }}
                                onDateChange={(date) => {
                                    setDate(date);
                                }}
                            /> */}
                            <TextInput label="E-mail" keyboardType="email-address" style={styles.textInput1} value={email} onChangeText={text => setEmail(text)} />
                            <TextInput label="Senha" secureTextEntry={true} value={senha} onChangeText={text => setSenha(text)} style={styles.textInput1} />
                            <TextInput label="Confirmar senha" secureTextEntry={true} value={confimarSenha} onChangeText={text => setConfimarSenha(text)} style={styles.textInput1} />
                            <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('camera')}>
                                <Text style={styles.textButton}>Camera</Text>
                            </Button>
                            <View>
                                <Button mode="contained" style={styles.button} onPress={() => PostCadastro()}>
                                    <Text style={styles.textButton}>Cadastrar</Text>
                                </Button>
                            </View>
                        </ScrollView>
                    </Card.Content>
                </Card>
            </View>

        </SafeAreaView>

    );

};

const styles = StyleSheet.create({
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

    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
})

export default cadastro;