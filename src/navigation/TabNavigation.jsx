import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreen from '../screens/HomeScreen';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Image } from 'react-native';

const TabNavigation =()=>{
  const Tabs = createBottomTabNavigator();

  return(
    <Tabs.Navigator initialRouteName='Home2' screenOptions={{tabBarShowLabel:false,headerShown:false}}>
      <Tabs.Screen component={HomeScreen} name='Home2' options={{tabBarIcon:({size,color})=>(
        <IonIcon name='home-outline' size={size} color={color}/>
      )}}/>
      <Tabs.Screen component={HistoryScreen} name='History' options={{tabBarIcon:({size,color})=>(
        <IonIcon name='time-outline' size={size} color={color}/>
      )}}/>
    </Tabs.Navigator>
  )
}

export default TabNavigation