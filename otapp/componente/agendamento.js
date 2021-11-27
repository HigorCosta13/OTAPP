import React, { useState } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { DatePicker } from 'react-native-neat-date-picker';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { agendaStyle } from '../styles/agenda.style';


LocaleConfig.locales['br'] = {
  monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  today: "Hoje",
  dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
  dayNamesShort: ["D", "S", "T", "Q", "Q", "S", "S"]
}

LocaleConfig.defaultLocale = "br"

function agendamentos({ navigation, route }) {

  const [especialidades] = useState(['Acupuntura', 'Alergia e imunologia', 'Anestesiologia', 'Angiologia', 'Cardiologia', 'Cirurgia cardiovascular', 'Cirurgia da mão', 'Cirurgia de cabeça e pescoço', 'Cirurgia do aparelho digestivo', 'Cirurgia geral', 'Cirurgia oncológica', 'Cirurgia pediátrica', 'Cirurgia plástica', 'Cirurgia torácica', 'Cirurgia vascular', 'Clínica médica', 'Coloproctologia', 'Dermatologia', 'Endocrinologia e metabologia', 'Endoscopia', 'Gastroenterologia', 'Genética médica', 'Geriatria', 'Ginecologia e obstetrícia', 'Hematologia e hemoterapia', 'Homeopatia', 'Infectologia', 'Mastologia', 'Medicina de emergência', 'Medicina de família e comunidade', 'Medicina do trabalho', 'Medicina de tráfego', 'Medicina esportiva', 'Medicina física e reabilitação', 'Medicina intensiva', 'Medicina legal e perícia médica', 'Medicina nuclear', 'Medicina preventiva e social', 'Nefrologia', 'Neurocirurgia', 'Neurologia', 'Nutrologia', 'Oftalmologia', 'Oncologia clínica', 'Ortopedia e traumatologia', 'Otorrinolaringologia', 'Patologia', 'Patologia clínica/medicina/laboratorial', 'Pediatria', 'Pneumologia', 'Psiquiatria', 'Radiologia e diagnóstico por imagem', 'Radioterapia', 'Reumatologia', 'Urologia'])

  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState([])

  const [hospitais] = useState(['Hospital Israelita Albert Einstein', 'Hospital Albert Sabin', 'Hospital Alvorada', 'Hospital Aviccena', 'Hospital Leforte', 'Hospital Beneficência Portuguesa', 'Hospital CEMA', 'Hospital Central de Guaianases', 'Hospital do Coração', 'Hospital Edmundo Vasconcelos', 'Hospital e Maternidade Metropolitano', 'Hospital Jardins', 'Hospital Nipo-Brasileiro', 'Hospital 9 de Julho', 'Hospital Alemão Oswaldo Cruz'])

  const [hospitalSelecionado, setHospitalSelecionado] = useState([])

  const [horarios] = useState(['08:00', '09:00', '11:30', '15:00', '16:30', '17:00'])

  const [horarioSelecionado, setHorarioSelecionado] = useState([])


  return (
    <SafeAreaView style={agendaStyle.container}>
        <Text style={agendaStyle.titulo}>Agendar Consulta</Text>

      <View >
        <Text style={agendaStyle.textomedio}>Selecione os campos</Text>
      </View>

      <View style={agendaStyle.view}>
        <Text style={agendaStyle.select}>Especialidade:</Text>
        <Picker
          selectedValue={especialidadeSelecionada}
          style={{ height: 50, width: 200, marginLeft: 100, marginTop: -40, alignSelf: 'flex-end' }}
          onValueChange={(itemValue) => setEspecialidadeSelecionada(itemValue)}>{
            especialidades.map(es => {
              return <Picker.Item label={es} value={es} key={es} />
            })}
        </Picker>
      </View>

      <View style={agendaStyle.view2}>
        <Text style={agendaStyle.select}>Hospital:</Text>
        <Picker selectedValue={hospitalSelecionado} style={{ height: 50, width: 200, marginLeft: 100, marginTop: -40, alignSelf: 'flex-end' }}
          onValueChange={(itemValue) => setHospitalSelecionado(itemValue)}>{
            hospitais.map(hos => {
              return <Picker.Item label={hos} value={hos} key={hos} />
            })}
        </Picker>
      </View>

      <View style={{width: 400, height: 300}}>
        <>
          <Calendar onDayPress={(day) => {console.log('selected day', day)}}
            theme={{
              todayTextColor: '#ff5618',
              selectedDayBackgroundColor: '#ff5618',
              selectedDayTextColor: '#00adf5',
              selectedDotColor: '#ff5618',
              textSectionTitleColor: '#ff5618',
              arrowColor: '#ff5618',
            }}
          />
        </>
      </View>

      <View style={agendaStyle.view3}>
        <Text style={agendaStyle.select}>Horários Díponiveis:</Text>
        <Picker selectedValue={horarioSelecionado} style={{ height: 50, width: 200, marginLeft: 100, marginTop: -40, alignSelf: 'flex-end', backgroundColor: 'white'}}
          onValueChange={(itemValue) => setHorarioSelecionado(itemValue)}>{
            horarios.map(ho => { return <Picker.Item label={ho} value={ho} key={ho} /> })}
        </Picker>
      </View>

      <View>
        <Text style={agendaStyle.avisos}>
          • Chegar com 15 minutos de antecedência {"\n"}
          • Portar máscara cirurgica (medidas anti Covid-19)  {"\n"}
          • Portar cartão Smart HealthPass ou Telefone Celular  {"\n"}
          • Manter o distanciamento de pelo menos 2 metros
        </Text>
      </View>

      <View style={agendaStyle.botaoarea}>
        <Button onPress={() => navigation.navigate("Home")}
          title=" Cancelar"
          buttonStyle={{
            borderRadius: 10,
            backgroundColor: "#ff5618",
            marginTop: 10,
            marginRight: 20,
            justifyContent: 'center',
            width: 150
          }}
        />

        <Button onPress={() => {Alert.alert('Agendado com sucesso!');}}
          title="Agendar"
          buttonStyle={{
            borderRadius: 10,
            backgroundColor: "#ff5618",
            marginTop: 10,
            marginLeft: 20,
            justifyContent: 'center',
            width: 150
          }}
        />
      </View>
      {/* <View style={agendaStyle.meusagenda}>
        <Button onPress={() => navigation.navigate("Agenda")}
          title="Meus Agendamentos"
          buttonStyle={{
            backgroundColor:"#ff5618"
          }}
        >
        </Button>
      </View> */}
    </SafeAreaView>

  );
};

export default agendamentos;