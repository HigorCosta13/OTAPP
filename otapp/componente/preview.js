import React from "react";
import { View, Image } from 'react-native';
import { Button,Text } from "react-native-paper";
import RNFS from 'react-native-fs'


export default function preview({ navigation }) {
    const [file, setFile] = React.useState('file:'+ RNFS.ExternalCachesDirectoryPath + '/myTest.jpg')
    const captureHandle = async () => 
    {
    console.log(file)
    }

    return (
        <View>
            <Image
                source={{
                    uri: 'file:///storage/emulated/0/Android/data/com.otapp/cache/myTest.jpg'
                }}
                style={{ width: 400, height: 400 }}
            />
                 <Button  onPress={() => navigation.navigate('camera')}>
                    <Text >Voltar</Text>
                </Button>
                <Button  onPress={() => navigation.navigate('cadastro')}>
                    <Text >OK</Text>
                </Button>
        </View>
    )

}