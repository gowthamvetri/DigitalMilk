import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from '../context/AuthContext';
import AdminApp from './AdminApp';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomDrawer from '../components/CustomDrawer';

const AdminDrawer = () => {
     const Drawer = createDrawerNavigator();
    const {user} = useContext(AuthContext);
   
  return (
   <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>} screenOptions={{headerShown:false,drawerLabelStyle:{fontFamily:'Ubuntu-medium'},drawerActiveBackgroundColor:'#abc',drawerActiveTintColor:'#fff'}}>
        <Drawer.Screen component={AdminApp} name='Home' options={{
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

export default AdminDrawer