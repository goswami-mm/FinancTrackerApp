import React, { useState } from 'react';

import SplashScreen from './screen/splash/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Expenses from './screen/home/Expenses/Expenses';
import Dashboard from './screen/home/Dashboard';
import Signup from './screen/auth/Signup';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screen/auth/Login';


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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

function App() {
  const [splashTimeOver, setSplashTimeOver] = useState(false);
  setTimeout(() => {
    setSplashTimeOver(true);
  }, 2000);

  const loadScreen = () => {
    if (splashTimeOver) {
      return <AuthStack />
    } else {
      return <SplashScreen />
    }
  }

  return (
    <NavigationContainer>
      {loadScreen()}
    </NavigationContainer>
  );
}

export default App;
