import { StyleSheet } from 'react-native';

export const agendaStyle = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    lateral: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
    },
    titulo: {
        margin: 10,
        fontSize: 40,
        marginBottom: 5,
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
    },
    subtitulo: {
        justifyContent: 'space-between',
        marginTop: 90,
        margin: 10,
        flexDirection: 'row',
        position: 'absolute',
        marginLeft: 30,
    },
    subtitulo2: {
        marginTop: 10,
        margin: 10,
    },
    view: {
        marginTop: 20
    },
    view2: {
        marginTop: 10
    },
    view3: {
        marginTop: 15,
        marginBottom: 2
    },
    select: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    data1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avisos: {
        marginTop: 0,
        color: 'gray',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: 14,
        marginStart: 10
    },
    textomedio: {
        marginLeft: 10,
        marginTop: 5,
        fontSize: 20,
        color: 'gray',
    },
    textomedio2: {
        fontSize: 20,
        color: 'black',
        textAlign: "center",
    },
    botaoarea: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',
    },
    btntext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    meusagenda: {
        marginTop: 20,
    },
    voltar: {
        alignItems: 'flex-start',
        position: 'absolute'
    },
    voltarTexto: {
        textDecorationLine: 'underline',
        position: 'absolute'
    },
})