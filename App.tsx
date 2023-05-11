import React, { useState } from 'react';
import { useColorScheme } from 'react-native';

import SplashScreen from './screen/splash/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Expenses from './screen/home/Expenses/Expenses';
import Dashboard from './screen/home/Dashboard';
import Signup from './screen/auth/Signup';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name="Expenses" component={Expenses} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Dashboard} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
