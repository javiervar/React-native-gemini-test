import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home/Home";
import { TAppStackParamList } from "../types";
import { Favorites } from "../screens/Favorites/Favorites";

const Stack = createNativeStackNavigator<TAppStackParamList>();

export const DrawerScreens: React.FC = () => {
  const defaultOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name={"Home"} component={Home} options={defaultOptions} />
      <Stack.Screen
        name={"Favorites"}
        component={Favorites}
        options={defaultOptions}
      />
    </Stack.Navigator>
  );
};
