import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import Icons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'

const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = ()=>{
    login(email,password)
    
  }

  return (
    <ScrollView style={{backgroundColor:"#fff",}}> 
        <View style={{flex:1,justifyContent:'center',paddingHorizontal:30,paddingVertical:20}}>
      <View style={{alignItems:'center'}}>
        <Image source={require('../assets/login.png')} style={{height:250,width:250}}/>
        
      </View>
      <View style={{gap:25}}>
        <Text style={{fontSize:25,fontFamily:'Ubuntu-Bold'}}>Login</Text>
        <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#aaa',alignItems:'center',gap:5}}>
          <Icons name='mail-outline' size={20}/>
          <TextInput 
            style={{flex:1,color:'#000'}}
            placeholder='Enter your email'
            placeholderTextColor={"#aaa"}
            onChangeText={text=>setEmail(text)}
          />
        </View>

        <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#aaa',alignItems:'center',gap:5}}>
          <Icons name='lock-closed-outline' size={20}/>
          <TextInput 
            style={{flex:1,color:'#000'}}
            placeholder='Enter your password'
            secureTextEntry
            placeholderTextColor={"#aaa"}
            onChangeText={text=>setPassword(text)}
          />
        </View>

        <TouchableOpacity style={{backgroundColor:'#aaa',padding:17,borderRadius:10}} onPress={handleSubmit}>
          <View style={{alignItems:'center'}}>
            <Text style={{color:'#fff',fontFamily:'Ubuntu-Medium',fontSize:16}}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:20,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:5}}>
        <Text style={{fontFamily:'Ubuntu-Medium',fontSize:16}}>New to the app?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
          <Text style={{fontFamily:'Ubuntu-MediumItalic',color:'#aaa',fontSize:16}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

export default LoginScreen