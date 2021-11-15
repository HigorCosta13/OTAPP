import * as React from 'react';
import { Button, Text, TextInput, View, SafeAreaView } from 'react-native';
import {  Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import principal from './componente/principal'
import { loginStyle } from './styles/login.style';

const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}


function SignInScreen() {
  <SafeAreaView style={loginStyle.content}>
    <View style={loginStyle.view}>
      <Card>
        <Card.Content>
          <View style={loginStyle.view2}>
            <Text style={loginStyle.text1}>Vamos Começar</Text>
          </View>
          <View style={loginStyle.view3}>
            <Text style={loginStyle.text2}>Entre com seu e-mail e senha</Text>
          </View>

          <TextInput label="E-mail" keyboardType="email-address" style={loginStyle.textInput1}></TextInput>
          <TextInput label="Senha de acesso" secureTextEntry={true} style={loginStyle.textInput2}></TextInput>
          <Button mode="contained" style={loginStyle.button} onPress={() => console.log('Pressed')}>
            <Text style={loginStyle.textButton}>Entrar</Text>
          </Button>
          <Button icon="google" mode="outlined" onPress={() => console.log('Pressed')} style={loginStyle.google}>
            <Text>Iniciar sessão com o Google</Text>
          </Button>
          <Button uppercase={false} onPress={() => console.log('Pressed')} style={loginStyle.senha}>
            <Text>Esqueceu a senha?</Text>
          </Button>
          <View>
            <Text style={loginStyle.text3}>OU</Text>
          </View>
          <Button mode="contained" style={loginStyle.button} onPress={() => console.log('Pressed')}>
            <Text style={loginStyle.textButton}>Cadastrar</Text>
          </Button>
        </Card.Content>
      </Card>
    </View>

  </SafeAreaView>
}

const Stack = createStackNavigator();

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="OTAPP" component={principal} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
