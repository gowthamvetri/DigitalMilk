import { View, Text, ScrollView, StyleSheet, Image, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import Config from 'react-native-config'

const ProfileScreen = ({navigation}) => {
  const PORT = Config.PORT;
  const {user} = useContext(AuthContext);
  const {logout} = useContext(AuthContext);
  const [name,setName] = useState(user.data.name);
  const [phone,setPhone] = useState(user.data.phone);
  const [display,setDisplay] = useState({
    name:user.data.name,
    phone:user.data.phone
  })

  const handleChange = ()=>{

    axios.put(`http://${PORT}:8080/api/user/updateProfile`,{
      email:user.data.email,
      name,
      phone,
    }).then(res=>{
      console.log(res);
      if(res.data.suuccess){ 
        setDisplay({
          name,
          phone
        })  
      }
    }).catch((e)=>console.log(e))
  }

  const style = StyleSheet.create({
    container:{
      padding:30
    },top:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      marginBottom:15
    },topText:{
      fontFamily:'Ubuntu-Bold',
      fontSize:20
    },memberInfo:{
      fontFamily:'Ubuntu-Bold',
      fontSize:18,
    },input:{
      borderColor: '#abc',
      borderWidth: 1,
      color: '#000',
      padding: 10,
      borderRadius: 8,
      marginBottom: 10,
    },label:{
      fontFamily:'Ubuntu-Medium',
      fontSize:16,
      marginBottom:5
    }
  })
  return (
    <ScrollView style={{margin:30}} showsVerticalScrollIndicator={false}>
      <View style={style.top}>
        <Text style={style.topText}>Profile</Text>
      </View>
      <View style={{flex:1,alignItems:'center',gap:20,marginBottom:15}}>
        <View style={{flex:1,}}>
          <Image source={require('../assets/profile1.png')} style={{width:200,height:200,borderRadius:200}}/>
        </View> 
        <View style={{flex:1,alignItems:'center'}}>
          <Text style={style.memberInfo}>{display.name}</Text>
          <Text style={style.memberInfo}>{display.phone}</Text>
          <Text style={style.memberInfo}>Member#342</Text>
        </View>
      </View>

      <View style={{flex:1,gap:15,marginBottom:20}}>
        <View>
          <Text style={style.label}>Name</Text>
          <TextInput style={style.input} placeholderTextColor={'#abc'} value={name} onChangeText={text=>setName(text)}/>
        </View>
       <View>
          <Text style={style.label}>Phone</Text>
          <TextInput style={style.input} placeholderTextColor={'#abc'} value={phone} onChangeText={text=>setPhone(text)}/>
        </View>

        <TouchableOpacity style={{alignItems:'center',padding:12,backgroundColor:'#aaa'}} onPress={handleChange}>
          <Text style={{fontFamily:'Ubuntu-Medium',color:'#fff'}}>Update</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{alignItems:'center',padding:12,backgroundColor:'#aaa'}} onPress={()=>logout()}>
        <Text style={{fontFamily:'Ubuntu-Medium',color:'#fff'}}>LogOut</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default ProfileScreen