import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';

LocaleConfig.locales['br'] = {
  monthNames: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
  monthNamesShort: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
  today: "Hoje",
  dayNames: ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta"],
  dayNamesShort: ["D","S","T","Q","Q","S","S"]
}

LocaleConfig.defaultLocale = "br"

function agendamento({ navigation }) {


  
  const [especialidades] = useState(['Acupuntura', 'Alergia e imunologia', 'Anestesiologia', 'Angiologia', 'Cardiologia', 'Cirurgia cardiovascular','Cirurgia da mão', 'Cirurgia de cabeça e pescoço', 'Cirurgia do aparelho digestivo', 'Cirurgia geral', 'Cirurgia oncológica', 'Cirurgia pediátrica', 'Cirurgia plástica', 'Cirurgia torácica', 'Cirurgia vascular', 'Clínica médica', 'Coloproctologia', 'Dermatologia', 'Endocrinologia e metabologia', 'Endoscopia', 'Gastroenterologia', 'Genética médica', 'Geriatria', 'Ginecologia e obstetrícia', 'Hematologia e hemoterapia', 'Homeopatia', 'Infectologia', 'Mastologia', 'Medicina de emergência', 'Medicina de família e comunidade', 'Medicina do trabalho', 'Medicina de tráfego', 'Medicina esportiva', 'Medicina física e reabilitação', 'Medicina intensiva', 'Medicina legal e perícia médica', 'Medicina nuclear', 'Medicina preventiva e social', 'Nefrologia', 'Neurocirurgia', 'Neurologia', 'Nutrologia', 'Oftalmologia', 'Oncologia clínica', 'Ortopedia e traumatologia', 'Otorrinolaringologia', 'Patologia', 'Patologia clínica/medicina/laboratorial', 'Pediatria', 'Pneumologia', 'Psiquiatria', 'Radiologia e diagnóstico por imagem', 'Radioterapia', 'Reumatologia', 'Urologia'])
  
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState([])
  
  const [hospitais] = useState(['Hospital Israelita Albert Einstein', 'Hospital Albert Sabin', 'Hospital Alvorada', 'Hospital Aviccena', 'Hospital Leforte', 'Hospital Beneficência Portuguesa', 'Hospital CEMA', 'Hospital Central de Guaianases', 'Hospital do Coração', 'Hospital Edmundo Vasconcelos', 'Hospital e Maternidade Metropolitano', 'Hospital Jardins', 'Hospital Nipo-Brasileiro', 'Hospital 9 de Julho', 'Hospital Alemão Oswaldo Cruz'])
  
  const [hospitalSelecionado, setHospitalSelecionado] = useState([])
  
  const [horarios] = useState(['08:00', '09:00', '11:30', '15:00', '16:30', '17:00'])
  
  const [horarioSelecionado, setHorarioSelecionado] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.lateral}>
        <Text style={styles.titulo}>Agendamento</Text>
      </View>
        
      <View style={styles.subtitulo}>
        <Text style={styles.textomedio}>Confira os dias disponíveis</Text>
      </View>
        
      <View style={styles.subtitulo2}>
        <Text style={styles.textomedio2}>Selecione o dia</Text>
      </View>
        
      <View style={{marginTop: 80}}>
        <>
          <Calendar minDate={"2021-09-01"} onDayPress={(e) => {
            console.log('e', e)
            }}
            theme={{
              todayTextColor: '#ff5618',
              selectedDayBackgroundColor: '#00adf5',
              textSectionTitleColor: '#ff5618',
              arrowColor: '#ff5618',
            }}
          />
        </>
      </View>



      <View>
        <Text style={styles.select}>Especialidade:</Text>
          <Picker
            selectedValue={especialidadeSelecionada}
            style={{height: 50, width: 200, marginLeft: 100, marginTop: -40, alignSelf: 'flex-end'}}
            onValueChange={(itemValue) => setEspecialidadeSelecionada(itemValue)}>{ 
              especialidades.map(es => {
              return <Picker.Item label={es} value={es} key={es} />})}
          </Picker>
      </View>
        
      <View>
        <Text style={styles.select2}>Hospital:</Text>
          <Picker selectedValue={hospitalSelecionado} style={{height: 50, width: 200, marginLeft: 100, marginTop: -40, alignSelf: 'flex-end'}} 
            onValueChange={(itemValue) => setHospitalSelecionado(itemValue)}>{ 
            hospitais.map(hos => {
            return <Picker.Item label={hos} value={hos} key={hos} />})}
          </Picker>
      </View>


      <View>
        <Text style={styles.select2}>Horários Díponiveis:</Text>
          <Picker selectedValue={horarioSelecionado} style={{height: 50, width: 200, marginLeft: 100, marginTop: -40, alignSelf: 'flex-end'}} 
            onValueChange={(itemValue) => setHorarioSelecionado(itemValue)}>{
            horarios.map(ho => {return <Picker.Item label={ho} value={ho} key={ho}  />})}
          </Picker>
      </View>
        
      <View style={styles.avisos}>
        <Text style={styles.aviso1}>
          • Chegar com 15 minutos de antecedência
        </Text>
        <Text style={styles.aviso2}>
          • Portar máscara cirurgica (medidas anti Covid-19)
        </Text>
        <Text style={styles.aviso2}>
          • Portar cartão Smart HealthPass ou Telefone Celular
        </Text>
        <Text style={styles.aviso2}>
          • Manter o distanciamento de pelo menos 2 metros
        </Text>
      </View>
      
      <View style={styles.botaoarea}>
        <TouchableOpacity
          style={styles.btncancelar} >
          <Text style={styles.btntext}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnagendar} >
          <Text style={styles.btntext}>Agendar</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>

  );
}

var styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    height: '100%',
  },
  lateral: {
    justifyContent: 'space-between',
    margin: 10,
    flexDirection: 'row',
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
    justifyContent: 'space-between',
    marginTop: 150,
    margin: 10,
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: 175,
  },
  select: {
    fontSize: 25,
    marginLeft: 20,
    marginTop: 40,
    color: '#000000',
    fontWeight: 'bold',
  },
  select2: {
    fontSize: 25,
    marginLeft: 20,
    marginTop: 10,
    color: '#000000',
    fontWeight: 'bold',
  },
  avisos: {
    marginTop: 35,
  },
  aviso1: {
    fontSize: 19,
    color: 'gray',
    marginLeft: 0,
  },
  aviso2: {
    fontSize: 19,
    color: 'gray',
    marginLeft: 0,
    marginTop: 2,
  },
  textomedio: {
    fontSize: 20,
    color: 'gray',
  },
  textomedio2: {
    fontSize: 20,
    color: 'black',
  },
  botaoarea: {
    fontSize: 25,
    marginLeft: 20,
    marginTop: 40,
    color: '#000000',
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  btnagendar: {
    alignItems: 'center',
    backgroundColor: '#ff5618',
    padding: 20,
    borderRadius: 10,
    zIndex: 10,
    width: 200,
    marginLeft: 10,
  },
  btncancelar: {
    alignItems: 'center',
    backgroundColor: '#ff5618',
    padding: 20,
    borderRadius: 10,
    zIndex: 10,
    width: 200,
    marginRight: 10,
  },
  btntext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }

});

export default agendamento;