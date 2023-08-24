import React,{useState} from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { create } from 'react-test-renderer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './comp/screens/Home';
import { Details } from './comp/screens/Details'

const Stack = createStackNavigator()
const theme = {
  ...DefaultTheme.colors,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: 'transparent'
  }
}
export default function App() {

  return (
    <NavigationContainer theme={theme} >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      >
        <Stack.Screen name="Home"
          component={Home}
          options={{
            title: 'Awesome app',

            // gestureEnabled: false,

          }} />
        <Stack.Screen name="Details" component={Details} />
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={Styles.body}>
    //   <Text>Hello World</Text>
    // </View>
  )
}
const Styles = StyleSheet.create({
  body: {
    color: 'green',
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center'
  },

}

)