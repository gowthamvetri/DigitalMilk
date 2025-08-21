import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React,{createContext, useEffect, useState} from 'react'
import Config from 'react-native-config';

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [isLoading,setIsLoading] = useState(false);
    const [token,setToken] = useState(null);
    const [user,setUser] = useState({})
    const PORT = Config.PORT

    const login = async(email,password)=>{
        setIsLoading(true)
        axios.post(`http://${PORT}:8080/api/user/login`,{
            email:email,
            password:password
        }).
        then(res=>{
            console.log(res.data)
            setToken(res.token)
            setUser(res.data);
        }).
        catch(e=>{
            console.log(e)
        })
        setIsLoading(false);
    }

    const register = async(email,name,phone,password)=>{
        setIsLoading(true);
        axios.post(`http://${PORT}:8080/api/user/register`,{
            email,
            name,
            phone,
            password
        }).then(res=>{
            console.log(res.data)
            setToken(res.token)
            setUser(res.data);
        }).
        catch(e=>{
            console.log(e)
        })
        setIsLoading(false);
    }

    const logout = ()=>{
        setIsLoading(true)
        setToken(null);
        AsyncStorage.removeItem('token')    
        setIsLoading(false);
    }

    const isLoggedIn = async()=>{
        setIsLoading(true);
        
        try{
        let token = await AsyncStorage.getItem('token');
        setToken(token);
        }catch(e){
            console.log('error in fetching token');
        }
        setIsLoading(false);
    }

    useEffect(()=>{
        isLoggedIn();  
    },[])

    return(
        <AuthContext.Provider value={{isLoading,token,login,logout,user,register}}>
            {children}
        </AuthContext.Provider>
    )
}