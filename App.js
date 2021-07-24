/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import AppNavigation from './src/navigations';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return <GlobalProvider>
    <AppNavigation/>
  </GlobalProvider>
};

export default App;
