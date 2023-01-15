import React, {useEffect} from 'react';
import {SplashScreen, WalkThroughScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {replace} from './rootNavigation';

const RootStack = createNativeStackNavigator();

function IntroNavigation() {
  const navigationOptions = {
    headerShown: false,
    gestureEnabled: false,
    cardStyle: {},
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     replace('WalkThrough');
  //   }, 2000);
  // }, []);

  return (
    <RootStack.Navigator
      initialRouteName="WalkThrough"
      screenOptions={navigationOptions}>
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="WalkThrough" component={WalkThroughScreen} />
    </RootStack.Navigator>
  );
}

export default IntroNavigation;
