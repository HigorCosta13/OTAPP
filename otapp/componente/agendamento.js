import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-elements';

LocaleConfig.locales['br'] = {
  monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  today: "Hoje",
  dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
  dayNamesShort: ["D", "S", "T", "Q", "Q", "S", "S"]
}

LocaleConfig.defaultLocale = "br"

function agendamento({ navigation }) {



  const [especialidades] = useState(['Acupuntura', 'Alergia e imunologia', 'Anestesiologia', 'Angiologia', 'Cardiologia', 'Cirurgia cardiovascular', 'Cirurgia da mão', 'Cirurgia de cabeça e pescoço', 'Cirurgia do aparelho digestivo', 'Cirurgia geral', 'Cirurgia oncológica', 'Cirurgia pediátrica', 'Cirurgia plástica', 'Cirurgia torácica', 'Cirurgia vascular', 'Clínica médica', 'Coloproctologia', 'Dermatologia', 'Endocrinologia e metabologia', 'Endoscopia', 'Gastroenterologia', 'Genética médica', 'Geriatria', 'Ginecologia e obstetrícia', 'Hematologia e hemoterapia', 'Homeopatia', 'Infectologia', 'Mastologia', 'Medicina de emergência', 'Medicina de família e comunidade', 'Medicina do trabalho', 'Medicina de tráfego', 'Medicina esportiva', 'Medicina física e reabilitação', 'Medicina intensiva', 'Medicina legal e perícia médica', 'Medicina nuclear', 'Medicina preventiva e social', 'Nefrologia', 'Neurocirurgia', 'Neurologia', 'Nutrologia', 'Oftalmologia', 'Oncologia clínica', 'Ortopedia e traumatologia', 'Otorrinolaringologia', 'Patologia', 'Patologia clínica/medicina/laboratorial', 'Pediatria', 'Pneumologia', 'Psiquiatria', 'Radiologia e diagnóstico por imagem', 'Radioterapia', 'Reumatologia', 'Urologia'])

  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState([])

  const [hospitais] = useState(['Hospital Israelita Albert Einstein', 'Hospital Albert Sabin', 'Hospital Alvorada', 'Hospital Aviccena', 'Hospital Leforte', 'Hospital Beneficência Portuguesa', 'Hospital CEMA', 'Hospital Central de Guaianases', 'Hospital do Coração', 'Hospital Edmundo Vasconcelos', 'Hospital e Maternidade Metropolitano', 'Hospital Jardins', 'Hospital Nipo-Brasileiro', 'Hospital 9 de Julho', 'Hospital Alemão Oswaldo Cruz'])

  const [hospitalSelecionado, setHospitalSelecionado] = useState([])

  const [horarios] = useState(['08:00', '09:00', '11:30', '15:00', '16:30', '17:00'])

  const [horarioSelecionado, setHorarioSelecionado] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View >
          <Text style={styles.titulo}>Agendamento</Text>
        </View>

        <View >
          <Text style={styles.textomedio}>Confira os dias disponíveis</Text>
        </View>

        <View style={styles.lateral, { marginTop: 10, marginBottom: 20 }}>
          <>
            <Text style={styles.textomedio2}>Selecione o dia</Text>
            <Calendar onDayPress={(e) => {
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
            style={{ height: 50, width: 200, marginLeft: 100, marginTop: -40, alignSelf: 'flex-end' }}
            onValueChange={(itemValue) => setEspecialidadeSelecionada(itemValue)}>{
              especialidades.map(es => {
                return <Picker.Item label={es} value={es} key={es} />
              })}
          </Picker>
        </View>
        <View>
          <Text style={styles.select}>Hospital:</Text>
          <Picker selectedValue={hospitalSelecionado} style={{ height: 50, width: 200, marginLeft: 100, marginTop: -40, alignSelf: 'flex-end' }}
            onValueChange={(itemValue) => setHospitalSelecionado(itemValue)}>{
              hospitais.map(hos => {
                return <Picker.Item label={hos} value={hos} key={hos} />
              })}
          </Picker>
        </View>


        <View>
          <Text style={styles.select}>Horários Díponiveis:</Text>
          <Picker selectedValue={horarioSelecionado} style={{ height: 50, width: 200, marginLeft: 100, marginTop: -40, alignSelf: 'flex-end' }}
            onValueChange={(itemValue) => setHorarioSelecionado(itemValue)}>{
              horarios.map(ho => { return <Picker.Item label={ho} value={ho} key={ho} /> })}
          </Picker>
        </View>

        <View >
          <Text style={styles.avisos}>
            • Chegar com 15 minutos de antecedência {"\n"}
            • Portar máscara cirurgica (medidas anti Covid-19)  {"\n"}
            • Portar cartão Smart HealthPass ou Telefone Celular  {"\n"}
            • Manter o distanciamento de pelo menos 2 metros    {"\n"}
          </Text>
        </View>
        <View style={styles.botaoarea}>
          <Button
            title=" Cancelar"
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: "#ff5618",
              margin : 10,
              justifyContent: 'center',
              width: 100
            }}
          />
            <Button
            title="Agenda"
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: "#ff5618",
              margin : 10,
              justifyContent: 'center',
              width: 100
            }}
          />
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
  select: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  avisos: {
    marginTop: 10,
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
    margin : 10,
    justifyContent: 'center',
  },
  btntext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default agendamento;