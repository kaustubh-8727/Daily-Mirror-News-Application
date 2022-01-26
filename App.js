import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,DefaultTheme, DarkTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import Constant from 'expo-constants';
import Search from './Search';
import Login from './Login';
import Home from './Home';
import Categories from './Categories';
import Businesscate from './Businesscate';
import Othercategory from './Othercategory';
import NewsDetail from './NewsDetail';
import Cards from './Cards';
import Settings from './Settings';
import Loading from './Loading';
import Signup from './Signup';
import Channels from './Channels';
import TermsandConditions from './TermsandConditions';
import * as firebase from 'firebase';
import {firebaseConfig} from './Config';

if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:"white"
  }
}

const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"red"
  }
}

const Roothome=()=>{
  return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Search') {
            iconName = 'search'
          } else if (route.name === 'Categories') {
            iconName = 'border-all'
          } else if (route.name === 'Channels') {
            iconName = 'library-books'
          }
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }} style={{flex:1}}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Categories" component={Categories} />
          <Tab.Screen name="Channels" component={Channels} />
        </Tab.Navigator>
  );
}

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator headerMode='none'>
            <Stack.Screen name="rootHome" component={Roothome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Businesscate" component={Businesscate} />
            <Stack.Screen name="Othercategory" component={Othercategory} />
            <Stack.Screen name="NewsDetail" component={NewsDetail} />
            <Stack.Screen name="Cards" component={Cards} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="TermsandConditions" component={TermsandConditions} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}
