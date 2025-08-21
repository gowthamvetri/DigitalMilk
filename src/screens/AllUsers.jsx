import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/Ionicons'


const AllUsers = () => {
    const [users,setUsers] = useState([]);
    const PORT  = Config.PORT;
    const fetchUsers = ()=>{
        axios.get(`http://${PORT}:8080/api/admin/getUser`).
        then(res=>{
            setUsers(res.data.data);
            console.log(users);
        }).catch(e=>console.log(e));
    }
    
    console.log(users)
    useEffect(()=>{
        fetchUsers()
    },[])

  return (
    <SafeAreaView style={{padding:20}}>
        <View style={{alignItems:'center',marginBottom:20}}>
            <Text style={{fontSize:22,fontFamily:'Ubuntu-Bold'}}>Users</Text>
        </View>

        <ScrollView>
            {users.map((user,ind)=>
            <View key={ind} style={{display:'flex',flexDirection:'row',gap:30,backgroundColor:'#ccc',paddingVertical:10,paddingHorizontal:20,alignItems:'center',borderRadius:10,marginBottom:10,justifyContent:'space-between'}}>
                <View style={{display:'flex',flexDirection:'row',gap:30,alignItems:'center'}}>
                    <View>
                        <Icon name="person-outline" size={30}/>
                    </View>
                    <View>
                        <Text style={{fontFamily:'Ubuntu-Medium'}}>{user.name}</Text>
                        <Text style={{fontFamily:'Ubuntu-Light'}}>+91 {user.phone}</Text>
                    </View>
                </View>
                    <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                        <Text style={{fontFamily:'Ubuntu-Medium'}}>{user.role}</Text>
                    </View>
            </View>
            )}
        </ScrollView>

    </SafeAreaView>
  )
}

export default AllUsers