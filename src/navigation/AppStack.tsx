import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home/Home";
import { TAppStackParamList } from "../types";
import { Story } from "../screens/Story/Story";
import { Favorites } from "../screens/Favorites/Favorites";

const Stack = createNativeStackNavigator<TAppStackParamList>();

export const AppStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Home"}
        component={Home}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={"Story"}
        component={Story}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={"Favorites"}
        component={Favorites}
        options={() => ({
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  );
};
