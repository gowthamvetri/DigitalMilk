import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios';
import Config from 'react-native-config';


const MilkUpdateScreen = () => {
    const PORT = Config.PORT;
    
    const [users,setUsers] = useState([]);
    const [perLit,setPerLit] = useState(0);
    const [litter,setLitter] = useState(0);



    const fetchUsers = ()=>{
        axios.get(`http://${PORT}:8080/api/admin/getUser`).
        then(res=>{
            setUsers(res.data.data)
        }).catch(e=>console.log(e));
    }
    const [selectedValue, setSelectedValue] = useState(users[0]?.email);
    const handleSubmit = ()=>{
        axios.put(`http://${PORT}:8080/api/admin/milkinfo`,{
            email:selectedValue,
            quantity:litter,
            price:(perLit*litter)
        }).then(res=>{
            console.log(res);
            setLitter(0)
            setPerLit(0)
        }).catch(e=>console.log(e));
    }
    
    const styles = StyleSheet.create({
        picker: { color:'#000',borderRadius:10,paddingHorizontal:15,borderWidth:1,borderColor:'#aaa',marginBottom: 25  },
        input:{ borderWidth:1,borderColor:'#aaa',marginBottom: 25,paddingHorizontal:20,paddingVertical:15,fontFamily:'Ubunto-Medium',fontSize:16,borderRadius:10,color:'#aaa' }
    });

    useEffect(()=>{
        fetchUsers();
    },[])

  return (
    <ScrollView style={{padding:20,gap:20}}>
        <View style={{alignItems:'center',marginBottom:20}}>
            <Text style={{fontFamily:'Ubuntu-Bold',fontSize:20}}>Add Milk Entry</Text>
        </View>

        <View style={styles.picker}>
        <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={{color:"#aaa"}}
            >
            {users.map((user)=>(
                <Picker.Item label={`${user.email}`} value={user.email} />
            ))}
            
        </Picker>
        </View>

        <View>
            <TextInput style={styles.input} placeholder='Enter Litters' placeholderTextColor={"#aaa"} onChangeText={text=>setLitter(text)} value={litter}/>
        </View>

        <View>
            <TextInput style={styles.input} placeholder='Enter Rate pre Litter' placeholderTextColor={"#aaa"} onChangeText={text=>setPerLit(text)} value={perLit}/>
        </View>

        <View style={{alignItems:'center'}}>
            <Text style={{fontFamily:'Ubuntu-Bold',fontSize:18}}>Total Amount:{litter*perLit}</Text>
        </View>

        <TouchableOpacity style={{alignItems:'center',marginTop:25,backgroundColor:'#aaa',borderRadius:10}} onPress={handleSubmit}>
            <View style={{padding:15}}>
                <Text style={{color:'#fff',fontFamily:'Ubuntu-Bold',fontSize:16}}>
                    Add Entry
                </Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default MilkUpdateScreen