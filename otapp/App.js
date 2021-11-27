import * as React  from 'react';
import {  View,  } from 'react-native';
import { Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import login  from './componente/login';
import principal from './componente/principal';
import cadastro from './componente/cadastro';
import camera from './componente/camera';
import preview from './componente/preview';
import ListItem from './componente/ListItem'


const AuthContext = React.createContext();

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


  
function SplashScreen() 
{
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
export default function App({ navigation   }) {
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
    const bootstrapAsync = async () => {
      let userToken;

      try {
      } catch (e) {
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
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
              component={login}
              options={{
                title: '',
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="OTAPP" component={principal} />
          )}
          <Stack.Screen name="OTAPP" component={principal} />
          <Stack.Screen name='cadastro' component={cadastro} />
          <Stack.Screen name='camera' component={camera} />
          <Stack.Screen name='preview' component={preview} />
          <Stack.Screen name='ListItem' component={ListItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
