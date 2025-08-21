import { View, Text, Image, useWindowDimensions } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons"
import CustomDrawer from '../components/CustomDrawer';
import TabNavigation from './TabNavigation';
import { AuthContext } from '../context/AuthContext';

const AppStack = () => {
    const Drawer = createDrawerNavigator();
    const {user} = useContext(AuthContext);
  return (
   <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>} screenOptions={{headerShown:false,drawerLabelStyle:{fontFamily:'Ubuntu-medium'},drawerActiveBackgroundColor:'#abc',drawerActiveTintColor:'#fff'}}>
        <Drawer.Screen component={TabNavigation} name='Home' options={{
          drawerIcon:({color})=>(
          <Ionicons name='home-outline' size={20} color={color}/>
        )
        }}/>

        <Drawer.Screen component={ProfileScreen} name='Profile' options={{
          drawerIcon:({color})=>(
          <Ionicons name='person-outline' size={20} color={color}/>
        )
        }}/>

    </Drawer.Navigator>
  )
}



export default AppStack