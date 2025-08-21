import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'

const CustomDrawer = (props) => {

    const {logout} = useContext(AuthContext)
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView>
            <ImageBackground source={require('../assets/bg-menu.png') } style={{padding:20,flex:1,flexDirection:'row',alignItems:"center",gap:20}}>
                <Image source={require('../assets/profile1.png')} style={{height:80,width:80}}/>
                <Text style={{fontSize:20,backgroundColor:"#fff",padding:4,borderRadius:20}}>Gowtham</Text>
            </ImageBackground>
            <View style={{paddingTop:20}}>
                <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>

        <View style={{padding:20,borderTopWidth:1,borderTopColor:'#aaa'}}>
            <TouchableOpacity style={{paddingVertical:20}} onPress={()=>logout()}>
                <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                    <Ionicon name='exit-outline' size={20}/>
                    <Text>LogOut</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomDrawer