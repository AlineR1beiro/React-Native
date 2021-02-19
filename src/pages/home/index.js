import React from 'react';
import {Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Home (props){
    const{ navigation } = props;

    return(
        <SafeAreaView
            style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'plum'}}
        >

        <Text style = {{fontsize: '150', color:'purple', textAlign:'auto'}}>Seja Bem-vinda(o)</Text>
        <br />
        <Text style = {{fontsize: '100', color:'purple', textAlign:'center'}}> Aqui a moda é a nossa praia!</Text>
        <br/>

        <TouchableOpacity
         style={{
             backgroundColor:"#fff",
             width:70,
             height:60,
             alignItems:'center',
             justifyContent:"center",
             borderRadius:100,
            }}
            title="Lista de Roupas" onPress={()=> navigation.navigate('Sobre')}>
    
            <text style={{ color:'purple', textAlign:'center'}}>Lista de Roupas</text>

         </TouchableOpacity>
        </SafeAreaView>
    );     
}