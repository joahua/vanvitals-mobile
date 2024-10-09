import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./HomeScreen";
import { TripDetailsScreen } from "./TripDetailsScreen";
import { MaintenanceLogScreen } from "./MaintenanceLogScreen";
import { ProfileScreen } from "./ProfileScreen";
import { LoginScreen } from "./LoginScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => {
  const { user } = useAppContext();

  return (
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        initialRouteName={user ? "Home" : "Login"}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#65adf1",
          },
          headerTintColor: "white",
          headerShown: true,
        }}
      >
        <StackNavigator.Screen name="Login" component={LoginScreen} />
        <StackNavigator.Screen name="Home" component={HomeScreen} />
        <StackNavigator.Screen name="TripDetails" component={TripDetailsScreen} />
        <StackNavigator.Screen name="MaintenanceLog" component={MaintenanceLogScreen} />
        <StackNavigator.Screen name="Profile" component={ProfileScreen} />
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  );
};