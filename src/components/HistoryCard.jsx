import { View, Text } from 'react-native'
import React from 'react'

const HistoryCard = ({date,quantity,amount,id}) => {

  return (
    <View id={id} style={{height:80,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <View>
        <Text style={{fontFamily:'Ubuntu-Bold',fontSize:17}}>{date.split("T")[0]}</Text>
        <Text style={{fontFamily:'Ubuntu-Bold',fontSize:13,color:'#abc'}}>Quantity:{quantity} Liters</Text>
      </View>
      <View>
        <Text style={{fontFamily:'Ubuntu-Bold',fontSize:15}}>Rs {amount}</Text>
      </View>
    </View>
  )
}

export default HistoryCard