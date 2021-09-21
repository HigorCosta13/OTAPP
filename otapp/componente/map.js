import React, {useState} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Alert,
  TouchableOpacity,
  PermissionsAndroid
} from 'react-native';
import { Navigation } from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-elements/dist/buttons/Button';

function Map ({Navigation}) {

  const [position, setPosition] = useState({
    latitude: -23.564231691403897,
    longitude: -46.65259474868537,
    latitudeDelta: 0.0999,
    longitudeDelta: 0.1555,
  });

  const request_location_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de localização',
          message: 'A aplicação precisa da permissão de localização',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          pos => {
            setPosition({
              ...position,
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
          },
          error => {
            console.log(error);
            Alert.alert('Houve um erro ao pegar a latitude e longitude.');
          },
        );
      } else {
        Alert.alert('Permissão de localização não concedida');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={position}
        onPress={e =>
          setPosition({
            ...position,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          })
        }>
        <Marker
          coordinate={position}
          title={'Marcador'}
          description={'Posição atual'}
        />
        <Marker
          coordinate={{
            latitude: -23.59959837351743,
            longitude: -46.7158145476759,
          }}
          image={require('../Imagens/sinal-do-hospital.png')}
          title="Hospital Albert Einstein"
          description={
            'Av. Brasil, 953 - Jardim America, São Paulo - SP, 01431-000'
          }
        />
        <Marker
          coordinate={{
            latitude: -23.525663677516224,
            longitude: -46.711652604159035,
          }}
          image={require('../Imagens/sinal-do-hospital.png')}
          title="Hospital Albert Sabin"
          description={
            'R. Brg. Gavião Peixoto, 123 - Lapa, São Paulo - SP, 05078-000'
          }
        />
        <Marker
          coordinate={{
            latitude: -23.58984762328412,
            longitude: -46.662224536865274,
          }}
          image={require('../Imagens/sinal-do-hospital.png')}
          title="Hospital Alvorada"
          description={
            'Av. Min. Gabriel de Rezende Passos, 550 - Moema, São Paulo - SP, 04521-022'
          }
        />
        <Marker
          coordinate={{
            latitude: -23.543877070599166,
            longitude: -46.58561196023863,
          }}
          image={require('../Imagens/sinal-do-hospital.png')}
          title="Hospital Aviccena"
          description={
            'R. Padre Adelino, 901 - Quarta Parada, São Paulo - SP, 03303-000'
          }
        />
        <Marker
          coordinate={{
            latitude: -23.572931172120075,
            longitude: -46.719858567098385,
          }}
          image={require('../Imagens/sinal-do-hospital.png')}
          title="Hospital Leforte Morumbi"
          description={
            'Rua dos Três Irmãos, 121 - Morumbi, São Paulo - SP, 05615-190'
          }
        />
        <Marker
          coordinate={{
            latitude: -23.553294170160296,
            longitude: -46.64089499672548,
          }}
          image={require('../Imagens/sinal-do-hospital.png')}
          title="Hospital A Beneficência Portuguesa de São Paulo"
          description={
            'R. Maestro Cardim, 769 - Bela Vista, São Paulo - SP, 01323-001'
          }
        />
          <Marker
          coordinate={{
            latitude: -23.500355335563686,
            longitude: -46.62459123636805,
          }}
          image={require('../Imagens/sinal-do-hospital.png')}
          title="CEMA Santana"
          description={
            'Av. Cruzeiro do Sul, 3.000 - 2º Andar - Santana, São Paulo - SP, 02034-030'
          }
        />
      </MapView>

      <View style={styles.positionBox}>
        <Text style={styles.positionBoxTitle}>Sua Localização</Text>
      </View>
      <TouchableOpacity
        style={styles.locationButton}
        onPress={() => {
          request_location_runtime_permission();
        }}>
          <Icon name="my-location" color={'#fff'} size={30} />
      </TouchableOpacity>
      <View style={styles.logo}>
        <Text style={styles.logoText}>HealthPass</Text>
        <Text style={styles.logoText2}>Map</Text>
      </View>
      
      <View style={styles.buttonsUp}>
        <Button
            title="Retornar - Home"
            //style={styles.botao}
            buttonStyle={{
            borderRadius: 10,
            backgroundColor: "#ff5618",
            position: 'relative',
            zIndex: 10,
            marginTop: 20,
            marginBottom: 5
        
            }}
          />

        <Button
          title="Selecionar"
          //style={styles.botao}
          buttonStyle={{
          borderRadius: 10,
          backgroundColor: "#ff5618",
          position: 'relative',
          zIndex: 10,
          marginTop: 20,
          marginBottom: 5
      
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '100%',
    width: '100%',
  },
  logo: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    elevation: 5,
    marginTop: -585,
    alignSelf: 'center',
    marginRight: 10,
    flexDirection: 'row',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  logoText2:{
    fontWeight: 'bold',
    fontSize: 22,
    color: '#e74c3c',
  },
  positionBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    opacity: 0.75,
    marginTop: -80,
    marginHorizontal: 110,
    padding: 25,
    shadowColor: '#000',
    elevation: 5,
    fontWeight: 'bold',
  },
  positionBoxTitle: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  locationButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 150,
    marginTop: -59.3,
    marginLeft: 130,
    width: 50,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 8,
  },
  buttonsUp: {
    justifyContent: 'space-between',
    margin: 10,
    flexDirection: 'row',
    marginTop: '-70%',
  },
});
  
export default Map;