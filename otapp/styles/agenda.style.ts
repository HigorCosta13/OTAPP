import { StyleSheet } from 'react-native';

export const agendaStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flex:1,
        padding: 10,
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
        marginBottom: 10,
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
        marginBottom: 10
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
    },
    textomedio: {
        margin: 10,
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
    }
})