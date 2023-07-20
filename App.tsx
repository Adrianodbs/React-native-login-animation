import React from 'react';

import {SafeAreaView, StatusBar, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#30a69d'} barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
