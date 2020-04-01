import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, GestureHandlerRefContext } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Saved from './pages/Saved';
import Search from './pages/Search';

import News from './pages/News';

const AppStack = createStackNavigator();
function Stack() {
     return (
               <AppStack.Navigator initialRouteName="Home">
                    <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <AppStack.Screen name="News" component={News} options={{
                              headerStyle: {
                                   elevation: 0,
                                   backgroundColor: 'transparent'
                              },
                              title: ''
                         }} />
               </AppStack.Navigator>
     )
}

const AppBottom = createMaterialBottomTabNavigator();
export default function Routes() {
     return (
          <NavigationContainer>
               <AppBottom.Navigator initialRouteName="Home">
                    <AppBottom.Screen name="Home" component={Stack} />
                    <AppBottom.Screen name="Saved" component={Saved} />
                    <AppBottom.Screen name="Search" component={Search} />
               </AppBottom.Navigator>
          </NavigationContainer>
     )
}





// ({ navigation }) => ({
//      headerLeft: () => 
//           <TouchableOpacity onPress={() => navigation.openDrawer()} >
//                <Feather name="align-left" size={28} color="#000"/>
//           </TouchableOpacity>
// })