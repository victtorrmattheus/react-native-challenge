import React from 'react';
import Home from './src/pages/Home'
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <>
      <Home />
      <StatusBar barStyle='light-content' backgroundColor='#2c3e50' />
    </>
  );
}


