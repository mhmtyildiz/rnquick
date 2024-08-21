import React from 'react';
import { NavigationContariner } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRoute={ () => <LoginScreen /> } />
  </NavigationContainer>
);

export default App;
