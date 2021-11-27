import { StyleSheet } from 'react-native';

export const homeStyle = StyleSheet.create({
    content: {
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
        marginBottom: 20
    },
    text1: {
        fontSize: 40,
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        marginTop: 10
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
    },
    image: {
        height: 120,
        width: 150,
        borderRadius: 25,
        marginLeft: 15
    },
    image2: {
        height: 120,
        width: 150,
        borderRadius: 25,
        marginRight: 15
    },
    diviçãoDeItens: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    margin1: {
        marginBottom: 25,
        marginTop: 20,
    },
    margin2: {
        marginBottom: 10,
        marginTop: 25,
    },
    textomenu: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold',
        marginLeft: 15
    },
    textomenu2: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold',
        marginRight: 15,
    },
    textomenu3: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 5,
        fontWeight: 'bold',
        marginRight: 17,
    },
    logo:{
        flex: 0,
        marginLeft: "80%",
        marginTop: "10%",
        position: 'absolute',
    }
})