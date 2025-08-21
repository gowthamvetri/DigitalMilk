import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminDashboard from '../screens/AdminDashboard';
import MilkUpdateScreen from '../screens/MilkUpdateScreen';
import AllUsers from '../screens/AllUsers';
import IonIcon from 'react-native-vector-icons/Ionicons'
import ProfileScreen from '../screens/ProfileScreen';
import AllUsersStack from './AllUsersStack';

const AdminApp = () => {
    const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator initialRouteName='Dashboard' screenOptions={{tabBarShowLabel:false,headerShown:false}}>
        <Tabs.Screen component={AdminDashboard} name='Dashboard' options={{tabBarIcon:({size,color})=>(
        <IonIcon name='home-outline' size={size} color={color}/>
      )}}/>
      <Tabs.Screen component={MilkUpdateScreen} name='MilkUpdate' options={{tabBarIcon:({size,color})=>(
        <IonIcon name='add-circle-outline' size={size} color={color}/>
      )}}/>
      <Tabs.Screen component={AllUsersStack} name='AllUsers' options={{tabBarIcon:({size,color})=>(
        <IonIcon name='people-outline' size={size} color={color}/>
      )}}/>
    </Tabs.Navigator>
  )
}

export default AdminApp