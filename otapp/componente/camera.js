import React from "react";
import { View, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from "react-native-camera-hooks";
import { Button, Text } from "react-native-paper";
import RNFS from 'react-native-fs'

function imagem(){
    console.log(takePicture);
    return takePicture;
}
export default function camera({ navigation }) {
    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const captureHandle = async () => {
        try {

            const data = await takePicture();
            const filePath = data.uri;
            console.log(data.uri);
            const newFilePath = RNFS.ExternalCachesDirectoryPath + '/myTest.jpg'
            console.log(newFilePath)
            RNFS.moveFile(filePath,newFilePath)
                .then(() => {
                    console.log('IMAGE MOVED',file, '-- to --',newFilePath);
                }).catch(error => 
                    console.log(error))
            navigation.navigate('preview', { screen: 'preview' });    
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.front}
                style={styles.preview}
            >
                <Button style={styles.button} onPress={() => captureHandle()}>
                    <Text style={styles.textButton}>Foto</Text>
                </Button>
            </RNCamera>


        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    textButton: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        textAlignVertical: 'center'
    },
    button: {
        backgroundColor: "#ff5618",
        marginBottom: 10,
        height: 60,
        justifyContent: 'center'
    },
});

export{ imagem}