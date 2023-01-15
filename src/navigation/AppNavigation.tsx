import React from 'react';
import {
  OverviewScreen, PortfolioScreen
} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

function AppNavigation() {
  const navigationOptions = {
    headerShown: false,
    gestureEnabled: false,
    cardStyle: {},
  };

  return (
    <RootStack.Navigator
      initialRouteName="OverviewScreen"
      screenOptions={navigationOptions}>
      <RootStack.Screen name="Overview" component={OverviewScreen} />
      <RootStack.Screen name="Portfolio" component={PortfolioScreen} />
    </RootStack.Navigator>
  );
}

export default AppNavigation;
