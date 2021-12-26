import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Splash';
import LoginScreen from './LoginScreen';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  options={{ headerShown: false }} name="Splash" component={Login} />
        <Stack.Screen  options={{ headerShown: false }} name="Login" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;