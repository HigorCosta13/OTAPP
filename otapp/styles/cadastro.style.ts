import { StyleSheet } from 'react-native';

export const cadastroStyle = StyleSheet.create({
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
        marginBottom: 40
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
    logo:{
        flex: 0,
        marginLeft: "90%",
        marginTop: "15%",
        position: 'absolute',
        alignItems: 'center'
        
    }
})