import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';

import Home from './pages/Home';
import Saved from './pages/Saved';
import Search from './pages/Search';

import News from './pages/News';

const AppStack = createStackNavigator();
function Stack() {
     return (
               <AppStack.Navigator initialRouteName="Home">
                    <AppStack.Screen name="Home" component={Home} options={{
                         headerStyle: {
                              elevation: 0,
                              backgroundColor: 'transparent',
                              height: 100
                         },
                         title: <Text>Carrier Piegon</Text>,
                         headerTitleAlign: 'center',
                         headerTitleStyle: {
                              fontSize: 27,
                         }
                    }} />
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

const AppBottom = createBottomTabNavigator();
export default function Routes() {
     return (
          <NavigationContainer>
               <AppBottom.Navigator initialRouteName="Home" tabBarOptions={{
                    // showLabel: false,
                    labelStyle: {
                         color: '#fff'
                    },
                    style: {
                         backgroundColor: '#770C0C'
                    },
                    activeBackgroundColor: '#6E0606',
                    // activeBackgroundColor: '#EFEFEF',
               }}>
                    <AppBottom.Screen 
                         name="Home" 
                         component={Stack} 
                         options={{
                              tabBarIcon: ()  => <Feather name="home" size={26} color="#fff" />
                         }}
                    />
                    <AppBottom.Screen 
                         name="Search" 
                         component={Search} 
                         options={{
                              tabBarIcon: ()  => <Feather name="search" size={26} color="#fff" />
                         }}
                    />
                    <AppBottom.Screen 
                         name="Saved" 
                         component={Saved} 
                         options={{
                              tabBarIcon: ()  => <Feather name="bookmark" size={26} color="#fff" />
                         }}
                    />
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