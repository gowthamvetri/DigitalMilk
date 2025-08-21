import { View, Text,TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import img1 from '../assets/title.png';

const OnboardingScreen = ({navigation}) => {
  const style = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#fff'
    },text:{
      fontSize:30,
      fontFamily:'Ubuntu-Bold',
      
      color:'#9ab',
      marginTop:20
    },startBtn:{
      backgroundColor:'#aaa',
      padding:20,
      flexDirection:'row',
      justifyContent:'space-between',
      width:'85%',
      alignItems:'center',
      borderRadius:5,
      marginBottom:30
    },stText:{
      fontSize:18,
      // fontWeight:'bold',
      fontFamily:'Ubuntu-Medium',
      color:'#fff'
    },img:{
      width:300,
      height:300,
      transform:'rotate(-5deg)'
    },imgContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }

  })

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.text}>
          Digitl Milk
        </Text>
      </View>

      <View style={style.imgContainer}>
        <Image style={style.img} source={img1}/>
      </View>

      <TouchableOpacity style={style.startBtn} onPress={()=>navigation.navigate('Login')}>
        <Text style={style.stText}>Let's Start</Text>
        <Icon name="arrow-forward-ios" size={20} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OnboardingScreen