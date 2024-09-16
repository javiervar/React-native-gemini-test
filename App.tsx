import React from "react";
import { NativeBaseProvider, extendTheme, View } from "native-base";
import { Navigation } from "./src/navigation/Navigation";
import { StatusBar } from "react-native";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <View flex={1}>
        <Navigation />
      </View>
      <StatusBar />
    </NativeBaseProvider>
  );
}
