import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/Routes'
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor='#2c3e50' />
    </>
  );
}


