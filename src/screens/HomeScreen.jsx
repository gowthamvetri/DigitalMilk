import { View, Text, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import ImageWithDetails from '../components/ImageWithDetails'
import { AuthContext } from '../context/AuthContext'

const HomeScreen = ({navigation}) => {
    const {user} = useContext(AuthContext);
    console.log(user)
    const style = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#fff'
        },
        childContainer:{
            padding:20
        },
        topBar:{
            flexDirection:"row",
            alignItems:'center',
            justifyContent:'space-between',
            marginBottom:20
        },
        profileImg:{
            width:40,
            height:40,
            borderRadius:50,
            
        },profileName:{
            fontFamily:'Ubuntu-Bold',
            fontSize:19,
        }
    })

    const handleAvgMilk = ()=>{
        let lit = 0,len = user.data.milkInfo.length||1;
        user.data.milkInfo.forEach((data)=>{
            lit+=data.quantity;
        })

        return (lit/len);
    }

    const totEarning = ()=>{
        let tot = 0;
        user.data.milkInfo.forEach((data)=>{
            tot+=data.price;
        })

        return tot
    }

  return (
    <SafeAreaView style={style.container}>
        <ScrollView style={style.childContainer}>
            <View style={style.topBar}>
                <Text style={style.profileName}>Hello {user.data.name}!!</Text>
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Image style={style.profileImg} source={require('../assets/profile.png')} imageStyle={{borderRadius:50}}/>
                </TouchableOpacity>
            </View>

            <ImageWithDetails title={"Average Milk Per Day"} details={`${handleAvgMilk().toFixed(2)} Litters`}/>
            <ImageWithDetails title={"Rate Per Litter"} details={"45 Rs/Litter"}/>
            <ImageWithDetails title={"Total Earnings"} details={`${totEarning()} Rs`} onPress={()=>navigation.navigate('History')}/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen