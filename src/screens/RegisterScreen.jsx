import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import Icons from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const RegisterScreen = ({navigation}) => {

  const [email,setEmail] = useState(null);
  const [name,setName] = useState(null);
  const [phone,setPhone] = useState(null);
  const [password,setPassword] = useState(null);
  const [confPassword,setConfPassword] = useState(null);
  const {register} = useContext(AuthContext);

  const handleSubmit = async()=>{
    if(email==null || name==null || phone==null || password==null || confPassword==null){
      console.log("Please provide all the fields");
      return;
    }

    if(password!=confPassword){
      console.log("Password and confirem password Should be matched");
      return;
    }

    register(email,name,phone,password)
  }

  return (
    <ScrollView style={{backgroundColor:"#fff"}}> 
    <View style={{flex:1,justifyContent:'center',paddingHorizontal:30,paddingVertical:20}}>

      <View style={{alignItems:'center'}}>
        <Image source={require('../assets/login.png')} style={{height:250,width:250}}/>
      </View>
      
      <View style={{gap:25}}>

        <Text style={{fontSize:25,fontFamily:'Ubuntu-Bold'}}>Register</Text>
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
          <Icons name='person-outline' size={20}/>
          <TextInput 
            style={{flex:1,color:'#000'}}
            placeholder='Enter your Name'
            placeholderTextColor={"#aaa"}
            onChangeText={text=>setName(text)}
          />
        </View>

        <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#aaa',alignItems:'center',gap:5}}>
          <Icons name='call-outline' size={20}/>
          <TextInput 
            style={{flex:1,color:'#000'}}
            placeholder='Enter your Phone Number'
            placeholderTextColor={"#aaa"}
            onChangeText={text=>setPhone(text)}
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

        <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#aaa',alignItems:'center',gap:5}}>
          <Icons name='lock-closed-outline' size={20}/>
          <TextInput 
            style={{flex:1,color:'#000'}}
            placeholder='Confirm your password'
            secureTextEntry
            placeholderTextColor={"#aaa"}
            onChangeText={text=>setConfPassword(text)}
          />
        </View>

        <TouchableOpacity style={{backgroundColor:'#aaa',padding:17,borderRadius:10}} onPress={handleSubmit}>
          <View style={{alignItems:'center'}}>
            <Text style={{color:'#fff',fontFamily:'Ubuntu-Medium',fontSize:16}}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop:20,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:5}}>
        <Text style={{fontFamily:'Ubuntu-Medium',fontSize:16}}>Already Have an Account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={{fontFamily:'Ubuntu-MediumItalic',color:'#aaa',fontSize:16}}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
    </ScrollView>
  )
}

export default RegisterScreen