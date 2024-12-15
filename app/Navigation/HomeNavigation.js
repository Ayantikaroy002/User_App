import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home.jsx'
import UserDetail from '../pages/UserDetail.jsx'

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='user-detail' component={UserDetail} />
       
    </Stack.Navigator>
  )
}