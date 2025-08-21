import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'; 
import AppNav from './src/navigation/AppNav';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
  )
}

export default App