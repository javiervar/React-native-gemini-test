import React from "react";
import { SafeAreaView } from "react-native";

export interface ContainerProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps): React.JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      {props.children}
    </SafeAreaView>
  );
};
