import { View, Text,ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';

import AdminDrawer from './AdminDrawer';


const AppNav = () => {
  const {isLoading,token,user} = useContext(AuthContext)
  
  if(isLoading){
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={'large'}/>
      </View>
  }

  return (
    <NavigationContainer>
      
      {token!==null? user?.data?.role=='admin'?<AdminDrawer/>:<AppStack/>:<AuthStack/>}
    </NavigationContainer>
  )
}

export default AppNav