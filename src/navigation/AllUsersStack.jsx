import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllUsers from '../screens/AllUsers';
import ParticularUser from '../screens/ParticularUser';

const AllUsersStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={AllUsers} name='AllUsers'/>
        <Stack.Screen component={ParticularUser} name='ParticularUser'/>
    </Stack.Navigator>
  )
}

export default AllUsersStack