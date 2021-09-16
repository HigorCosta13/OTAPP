import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

const App = () => {

  return (
    <View style={styles.container}> 
      <View style={styles.photo}>
        <View>
        <Image source={require('../Imagens/depositphotos_37819499-stock-photo-old-man-smoking.jpg')} style={{
          resizeMode: "stretch",
          width:"100%",
          height: "100%",
        }}
        />
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.nameSection}>
          <Text style={styles.name}>Porsche 911 GT2 RS</Text>
        </View>
        <View style={styles.sepBar}>
        </View>
        <View style={styles.categories}>
          <Pressable style={styles.categoryButton}>
            <Text style={styles.categoryText}>Sobre</Text>
          </Pressable>
          <Pressable style={styles.categoryButton}>
            <Text style={styles.categoryText}>Exames</Text>
          </Pressable>
          <Pressable style={styles.categoryButton}>
            <Text style={styles.categoryText}>Agendar</Text>
          </Pressable>
        </View>
        <View style={styles.ageCate}>
          <View>
            <Text style={styles.cateItemText}>Idade</Text>
            <Text style={styles.cateItemValue}>55 Anos</Text>
          </View>
          <View>
            <Text style={styles.cateItemText}>Nascimento</Text>
            <Text style={styles.cateItemValue}>10/05/1966 </Text>
          </View>
        </View>
        <View style= {styles.minDetails}> 
            <Text style= {styles.minDetailsText}>{'\u25CF'} Cardiomiopatia Hipertrófica</Text>
            <Text style= {styles.minDetailsText}>{'\u25CF'} Alérgio a AAS (Ácido acetilsalicílico)</Text>
            <Text style= {styles.minDetailsText}>{'\u25CF'} Último exame realizado em 2019</Text>
            <Text style= {styles.minDetailsText}>{'\u25CF'} Pendência de vacinação - Covid-19</Text>
        </View>
        <View>
          <Pressable  onPress={()=> Alert.alert("Za Waruuudo!")} style={styles.moreInfoButton}>
            <Text style={styles.MoreInfoText}>Mais Informações</Text>
          </Pressable>
        </View>
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
  container:  {
    flexDirection: "column",
    backgroundColor: "#FFFF",
  },
  photo:{
    flex: 0,
    height: "40%",
  },
  
  info: {
    flex:0,
    height:"60%",
    backgroundColor: "#FBFBFB",
    borderStartWidth:2,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderTopStartRadius:24,
    borderTopEndRadius:24,
    borderEndWidth:2,

  },

  nameSection: {
    marginTop:5,
    paddingTop:15,
    justifyContent:'center',
    flexDirection:'row',
  },
  name:{
    flexDirection: "row",
    justifyContent: "center",
    fontWeight: "bold",
    fontFamily: "Poppins",
    fontSize:28,
    color:"#2B2B2B",
  },
  categories:{
    flexDirection:"row",
    marginTop:10,
    marginBottom:20,
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
  },

  categoryTextActive: {
    fontSize:16,
    fontWeight:"bold",
    color: "#FCFCFC",
    fontFamily: "poppins",
  },

  ageCate: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom:10,
    alignContent: "center",
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
  paddingLeft:15,
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
  backgroundColor: "#FF9345",
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
  paddingTop: 0.1,
  borderTopColor: "#E8E8E8",
  borderBottomColor: "#E8E8E8",
  borderWidth:2,
  marginRight: 20,
  marginLeft: 20,
  borderRadius:48,
},

});

export default App;
