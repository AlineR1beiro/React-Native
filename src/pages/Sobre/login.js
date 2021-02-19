import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
 
export default function Login(props) {
    const{ navigation } = props;

    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');

    const cadastro =() =>{
        Alert(nome);
        Alert(email);
        Alert(senha);
    }

    return (
        <View style={styles.container}>
          
        <Image source={require('../Sobre/logo.jpg')} style={styles.icon}/>

        <StatusBar hidden/>


            <TextInput style={styles.input} placeholder="Digite seu nome" onChangeText={text=>setNome(text)}/>
            
            <TextInput style={styles.input} placeholder="Digite o email" onChangeText={text=>setEmail(text)}/>

            <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={text=>setSenha(text)}
            secureTextEntry={true}/>
        
            <br/>

            <TouchableOpacity style={styles.btncadastro} onPress={()=> navigation.navigate('Home')}>
            <Text>Entrar</Text> </TouchableOpacity>
            <br/>
            <TouchableOpacity style={styles.limparTexto} onPress="limpar()">
            <Text>Limpar</Text> </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    width:150,
    height:150,
    borderRadius:100
  },
  input:{
    marginTop: 15,
    padding:10,
    width: 350,
    backgroundColor: 'light gray',
    fontSize: '20',
    borderRadius: 5,
  },
  btncadastro:{
    width: 100,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 50,
    justifyContent:'center',
    textAlign:'center'
  },
    limparTexto:{
    width: 100,
    height: 40,
    backgroundColor: 'grey',
    borderRadius: 50,
    justifyContent:'center',
    textAlign:'center'

  }
});