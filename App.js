import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/home';
import Sobre from './src/pages/Sobre';
import Login from './src/pages/Sobre/login';


 const Stack = createStackNavigator();

  function App(){
    return(
      <NavigationContainer initialRouteName = "Login" headerMode ='screen'>
        <Stack.Navigator>
          <Stack.Screen name = "Login" component ={Login}
            options={{ title:'Mistura Feminina'}} 
          />
          <Stack.Screen name= "Home" component={Home} 
            options={{title: "Vista-se de amor" }}
          />

        <Stack.Screen name = "Sobre" component ={Sobre}
          options={{ title:'Lista de Roupas'}} 
        />
        
      </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;