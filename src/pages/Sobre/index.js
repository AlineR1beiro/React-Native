import React from 'react';
import {Text, SafeAreaView, FlatList, StyleSheet, View} from 'react-native';

    const dados = [
        {
            id: Math.random(),
            title:'T-shirt',
        },
        {
            id: Math.random(),
            title:'Vestido',
        },
        {
            id: Math.random(),
            title:'Shorts',
            
        },
        {
            id: Math.random(),
            title:'Blusão Feminino',

        },
        {
            id: Math.random(),
            title:'Bermuda',
            
        },
        {
            id: Math.random(),
            title: 'Calça-Jeans',

        },                 
    ]


    export default function Sobre (){

        return(
        <SafeAreaView
            style={{flex:2, alignItems:'center',justifyContent:'center',backgroundColor:'plum'}}
        >
            <Text style = {{fontSize: 30, color:'black'}}>Coleção 2021</Text>
            <br/>

            <FlatList
                data={dados}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({item}) => (

                <View key={item.id}>
                    <Text style={styles.textoitem}>{item.title}</Text>
                    
                </View>                
                )}
            />

        </SafeAreaView>
    );     
}

const styles = StyleSheet.create({
    textoitem: {
        backgroundColor: "pink",
        padding: 20,
        marginVertical: 8,
        fontSize: 20,
        borderBottomWidth:1,

    }
});      