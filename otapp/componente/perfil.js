import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
import { navigation } from '@react-navigation/native';

const App = ({navigation, route}) => {

  return (
    <View style={styles.container}> 
      <View style={styles.photo}>
        <View>
        <Image source={require('../Imagens/senhor.jpeg')} style={{
          width: 250,
          height: 250,
          borderRadius: 150,
          marginTop: -30
        }}
        />
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.nameSection}>
          <Text style={styles.name}>José da Silva</Text>
        </View>
        <View style={styles.sepBar}>
        </View>
        <View style={styles.ageCate}>
          <View>
            <Text style={styles.cateItemText}>Idade</Text>
            <Text style={styles.cateItemValue}>80 Anos</Text>
          </View>
          <View>
            <Text style={styles.cateItemText}>Nascimento</Text>
            <Text style={styles.cateItemValue}>15/05/1941</Text>
          </View>
          <View>
            <Text style={styles.cateItemText}>Tipo Sanguineo:</Text>
            <Text style={styles.cateItemValue}>A+</Text>
          </View>
        </View>
        <View style= {styles.minDetails}>
          <Text style= {styles.minDetailsText}>{'\u25CF'} Contato: {"("}19{")"}99467-8542</Text>
          <Text style= {styles.minDetailsText}>{'\u25CF'} Cardiomiopatia Hipertrófica</Text>
          <Text style= {styles.minDetailsText}>{'\u25CF'} Alérgio a AAS (Ácido acetilsalicílico)</Text>
          <Text style= {styles.minDetailsText}>{'\u25CF'} Último exame realizado em 2019</Text>
          <Text style= {styles.minDetailsText}>{'\u25CF'} Altura: 1,98</Text>
          <Text style= {styles.minDetailsText}>{'\u25CF'} Peso: 80</Text>
          <Text style= {styles.minDetailsText}>{'\u25CF'} Pendência de vacinação - Covid-19</Text>
        </View>
        <View style={styles.categories}>
          <Button title='Fazer Logout' onPress={() => navigation.navigate("Login")}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: "#ff5618",
              marginTop: 10,
              marginRight: 20,
              justifyContent: 'center',
              width: 150
            }}
            //disabled
          />
        </View>
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white'
  },
  photo:{
    flex: 0,
    height: "40%",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -40,
    backgroundColor: 'white'
  },
  
  info: {
    flex:0,
    height:"90%",
    borderStartWidth:2,
    borderEndWidth:2,
    backgroundColor: 'white',
    borderColor: "white",
    borderWidth: 1,

  },

  nameSection: {
    paddingTop:15,
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor: 'transparent',
    
  },
  name:{
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black',
  },
  categories:{
    flexDirection:"row",
    marginTop:10,
    marginBottom: 10,
    justifyContent: "center",
  },
  categoryButton:{
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Poppins",
    fontSize:13,
    borderRadius: 12,
    marginLeft:15,
    marginRight: 15,
    backgroundColor: "#F5F5F5",
  },

  categoryButtonActive:{
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Poppins",
    fontSize:13,
    borderRadius: 12,
    marginLeft:15,
    marginRight: 15,
    backgroundColor: "#2B2B2B",
  },

  categoryText: {
    fontSize:16,
    fontWeight:"bold",
    color: "#B0B0B0",
    fontFamily: "poppins",
    backgroundColor: 'red',
    width: 100,
    height: 30,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },

  categoryTextActive: {
    fontSize:16,
    fontWeight:"bold",
    color: "#FCFCFC",
    fontFamily: "poppins",
  },

  ageCate: {
    marginLeft: -30,
    flexDirection: "row",
    marginTop: 10,
    marginBottom:10,
    alignContent: "center",
    backgroundColor: 'white',
    justifyContent: 'center'
  },

  cateItemText:{
    fontFamily: "Poppins",
    fontSize: 17,
    paddingLeft:30,
    color: "#B0B0B0",
  },
  cateItemValue:{
    fontFamily: "Poppins",
    fontSize: 18,
    paddingLeft: 30,
    color:"#2B2B2B",
},

minDetails:{
  paddingTop:10,
  paddingLeft:40,
  paddingRight:15,
  paddingBottom:10,
},

minDetailsText:{
  flexDirection: "row",
  paddingTop:5,
  paddingLeft:8,
  paddingRight:8,
  paddingBottom:5,
  color:"#B0B0B0",
  fontSize:16,
},
moreInfoButton: {
  width: "50%",
  marginTop:20,
  marginBottom:5,
  marginLeft:100,
  borderRadius: 12,
  paddingTop:10,
  paddingBottom:10,
  paddingRight:12,
  paddingLeft:12,
  backgroundColor: "#ff5618",
},

MoreInfoText:{
  textAlign: "center",
  fontWeight: "bold",
  fontFamily: "Poppins",
  color: "#FCFCFC",
  fontSize:16,
},

sepBar: {
  marginTop:20,
  marginRight: 20,
  marginLeft: 20,
},
margin1: {
  marginBottom: 25,
  marginTop: 20,

},
redes_sociais:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '55%',
  marginTop: 20,
},
})
;

export default App;
