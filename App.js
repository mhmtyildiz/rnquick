import React from 'react';
import { Navigator, StackScreen, NavigationProvider } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';

const App = () => (
  <NavigationProvider screenName="LoginScreen">
    <Navigator initialRoute={() => {
      return { screen: "LoginScreen" };
    }}/>
  </NavigationProvider>
};


export default App;