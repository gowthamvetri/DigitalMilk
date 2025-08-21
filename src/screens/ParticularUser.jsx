import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import HistoryCard from '../components/HistoryCard';

const ParticularUser = ({route}) => {
    const { user } = route.params;
    console.log(user)

    const style = StyleSheet.create({
        info:{
            fontFamily:'Ubuntu-Medium',
            fontSize:16
        }
    })
  return (
    <SafeAreaView style={{padding:20,gap:20}}>
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:20,fontFamily:'Ubuntu-Bold'}}>{user.name}</Text>
        </View>
        <View style={{gap:20}}>
            <Text style={style.info}>Email : {user.email}</Text>
            <Text style={style.info}>Phone No : {user.phone}</Text>
            <Text style={style.info}>Role : {user.role}</Text>
        </View>
        {
            user.role!='admin' ? (
                <View style={{padding:20,gap:20}}>
                    <View style={{gap:20}}>
                        <Text style={style.info}>Total Litters : {user.totalMilk}</Text>
                        <Text style={style.info}>Total Earnings : {user.totalProfit}</Text>
                    </View>
                <Text  style={style.info}>List of Earnings</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            {user.milkInfo.map((item,index)=>{
              return <HistoryCard key={index} date={item.date} quantity={item.quantity} amount={item.price} id={index}/>
            })}
          </ScrollView>
                </View>
            ):(
                <View></View>
            )
        }
    </SafeAreaView>
  )
}

export default ParticularUser