import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './rootNavigation';

import {StatusBar, useColorScheme} from 'react-native';
import AppNavigation from './AppNavigation';
import IntroNavigation from './IntroNavigation';

const Root = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const navigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

  return (
    <NavigationContainer initialRouteName="Intro" ref={navigationRef}>
      <StatusBar
        StatusBarStyle={'default'}
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        translucent={false}
        backgroundColor={'#7F18D0'}
      />
      <Root.Navigator screenOptions={navigationOptions}>
        <Root.Screen name="Intro" component={IntroNavigation} />
        <Root.Screen name="App" component={AppNavigation} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

export default App;
