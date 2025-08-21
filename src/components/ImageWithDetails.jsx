import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const ImageWithDetails = ({title,details,onPress=null}) => {

    

  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={require('../assets/bg2.png')} style={{height:250,padding:20,marginBottom:25}} imageStyle={{borderRadius:20}}>
          <Text style={{color:'#fff',fontSize:23,fontFamily:'Ubuntu-Bold'}}>{title}</Text>
          <Text style={{color:'#fff',fontFamily:'Ubuntu-Medium'}}>{details}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default ImageWithDetails