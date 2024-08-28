import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Account from './pages/Account';
import Home from './pages/Home';

const stack =createNativeStackNavigator() 
function App() {

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName ="Home">
        <stack.Screen name="Account" component={Account}/>
        <stack.Screen name="Home" component={Home}/>
      </stack.Navigator>
    </NavigationContainer>

  );
}
export default App;