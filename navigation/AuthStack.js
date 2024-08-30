import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
// import SignInScreen from '../screens/login';
import Signup from '../screens/signup';
// import SignOutScreen from '../screens/signup';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
             cardStyle: {
            backgroundColor: '#0e1529'
          },
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup}/>
        {/* <Stack.Screen name="Sign In" component={SignInScreen} /> */}
        {/* <Stack.Screen name="Sign Up" component={SignOutScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}