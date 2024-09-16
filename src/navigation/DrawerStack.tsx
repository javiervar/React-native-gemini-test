/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerScreens } from "./DrawerScreens";
import DrawerSideBar from "../ui-kit/layout/DrawerSideBar/DrawerSideBar";
import { theme } from "../../App";

const Drawer = createDrawerNavigator();

export const DrawerStack: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName={"Drawer"}
      screenOptions={({}) => {
        return {
          drawerStyle: {
            backgroundColor: "transparent",
          },
          headerTintColor: theme.colors.orange[600],
          drawerPosition: "left",
          backgroundColor: "transparent",
          title: "",
          headerTransparent: true,
          drawerType: "front",
        };
      }}
      drawerContent={(props) => <DrawerSideBar {...props} />}
    >
      <Drawer.Screen
        name={"Drawer"}
        component={DrawerScreens}
        options={() => {
          return {
            swipeEnabled: true,
          };
        }}
      />
    </Drawer.Navigator>
  );
};
