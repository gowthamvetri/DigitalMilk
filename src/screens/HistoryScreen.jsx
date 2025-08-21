import { View, Text, SafeAreaView, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import HistoryCard from '../components/HistoryCard'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import Config from 'react-native-config'

const HistoryScreen = ({navigation}) => {
    const PORT = Config.PORT
    const {user} = useContext(AuthContext);
    const [totalRev,setTotalRev] = useState(0);
    const [milk,setMilk] = useState(0)
    const [data,setData] = useState([]);
    const style = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#fff',
            padding:20,
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
        },milkInfoContainer:{
          flexDirection:'column',
          gap:30,
          marginBottom:20
        },milkInfo:{
          flexDirection:'row',
          justifyContent:'space-between'
        }
    })

    console.log(data)

    const calcTotalMilk = ()=>{
      let count = 0;
      data.forEach(element => {
        count+=element.quantity
      });
      return count
    }

       const calcTotRev = ()=>{
      let count = 0;
      data.forEach(element => {
        count+=element.price
      });
      return count
    }

    useEffect(()=>{
      axios.post(`http://${PORT}:8080/api/user/minkInfo`,{
      email:user.data.email
    }).then(res=>setData(res.data.data)).
    catch((e)=>console.log(e)); 
    },[])



  return (
    <SafeAreaView style={style.container}>
            <View style={style.topBar}>
                <Text style={style.profileName}>Milk History</Text>
            </View>
          <View style={style.milkInfoContainer}>
            <View style={style.milkInfo}>
              <Text style={{fontFamily:'Ubuntu-Bold',fontSize:15}}>Total Litter of Milk Produced:</Text>
              <Text style={{fontFamily:'Ubuntu-Bold',color:'#abc'}}>{calcTotalMilk()} Litters</Text>
            </View>

            <View style={style.milkInfo}>
              <Text style={{fontFamily:'Ubuntu-Bold',fontSize:15}}>Total Revenue gained:</Text>
              <Text style={{fontFamily:'Ubuntu-Bold',color:'#abc'}}>Rs {calcTotRev()}</Text>
            </View>
          </View>

          <View style={{marginVertical:15}}>
            <Text style={{fontFamily:'Ubuntu-Bold',fontSize:19}}>Entries</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {data.map((item,index)=>{
              return <HistoryCard key={index} date={item.date} quantity={item.quantity} amount={item.price} id={index}/>
            })}
          </ScrollView>

    </SafeAreaView> 
  )
}

export default HistoryScreen