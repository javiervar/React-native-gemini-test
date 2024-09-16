/* eslint-disable @typescript-eslint/no-misused-promises */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerStack } from "./DrawerStack";
import { AppStack } from "./AppStack";

const Stack = createNativeStackNavigator();

export const Navigation: React.FC = () => {
  const defaultOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Splash"}>
        <Stack.Screen
          name={"App"}
          component={DrawerStack}
          options={defaultOptions}
        />
        <Stack.Screen
          name={"AppStack"}
          component={AppStack}
          options={defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
