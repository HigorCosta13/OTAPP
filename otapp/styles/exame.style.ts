import { StyleSheet } from 'react-native';

export const exameStyle = StyleSheet.create({
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
        height: "100%",
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
        marginTop: 20,
        marginBottom: 40
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
        backgroundColor: "#F8F8FF",
        marginBottom: 10,
        height: 80,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    text3: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textButton: {
        color: 'black',
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        textAlign: 'left',
    },
    senha: {
        marginTop: 15,
        marginBottom: 20,
    },
    google: {
        marginTop: 20
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
    margin1: {
        marginBottom: 25,
        marginTop: 25,
    },
    margin2: {
        marginBottom: 10,
        marginTop: 25,
    },
    list: {
        backgroundColor: "blue",
        opacity: 50
    }
})