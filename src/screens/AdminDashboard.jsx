import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Config from 'react-native-config'
import axios from 'axios'

const AdminDashboard = ({navigation}) => {

    const style = StyleSheet.create({
        box:{
            borderWidth:1,
            borderColor:"#aaa",
            padding:20,
            width:150,
            borderRadius:10
        },bold:{
            fontFamily:'Ubuntu-Bold',
            fontSize:20
        },text:{
            fontSize:17,
            fontFamily:'Ubuntu-MediumItalic',
            marginBottom:5
        },boxBottom:{
            marginTop:20,
            borderWidth:1,
            borderColor:"#aaa",
            padding:20,
            width:'100%',
            borderRadius:10
        }
    })
    const [milkLit,setMilkLit] = useState(0);
    const [totalPrice,setTotalPrice] =useState(0);
    const [userCount,setUserCount] = useState(0);
    const PORT  = Config.PORT;

    const fetchInfo = async()=>{
        const data = axios.get(`http://${PORT}:8080/api/admin/milkInfo`).then((res)=>{
            setMilkLit(res.data.milkQty)
            setUserCount(res.data.users)
        }).catch((e)=>console.log(e.message))
    }

    useEffect(()=>{
        fetchInfo();
    },[])

  return (
    <ScrollView style={{padding:20}}>
        <View style={{alignItems:'center',marginBottom:20,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Ubuntu-Bold',fontSize:22}}>Dashboard</Text>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Image style={{width:40,height:40,borderRadius:50}} source={require('../assets/profile.png')} imageStyle={{borderRadius:50}}/>
            </TouchableOpacity>
        </View>

        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View style={style.box}>
                <Text style={style.text}>Total Milk Collected</Text>
                <Text style={style.bold}>{milkLit}L</Text>
            </View>
            <View style={style.box}>
                <Text style={style.text}>Number of contributers</Text>
                <Text style={style.bold}>{userCount}</Text>
            </View>
        </View>

        <TouchableOpacity>
            <View style={style.boxBottom}>
                <Text style={style.text}>Average Rate</Text>
                <Text style={style.bold}>Rs.45/L</Text>
            </View>
        </TouchableOpacity>

    </ScrollView>
  )
}

export default AdminDashboard