import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Box, Divider, Image, View, Text } from "native-base";
import {
  CommonActions,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { ListItem } from "../../components/ListItem/ListItem";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TAppStack, TDrawerStack } from "../../../types";
import { Container } from "../Container";
import { theme } from "../../theme/Theme";
import LottieView from "lottie-react-native";

export const DrawerSideBar = (props: any): React.JSX.Element => {
  const navigation = useNavigation<TDrawerStack>();
  const animation = useRef<LottieView>(null);

  return (
    <View
      flex={1}
      borderRightColor={"orange.600"}
      borderRightWidth={"4"}
      borderLeftWidth={0}
      backgroundColor={"white"}
      borderRightRadius={40}
    >
      <Container>
        <Box
          style={styles.avatarWrapper}
          mb={0}
          px={30}
          maxW={"70%"}
          alignSelf={"center"}
        >
          <Box style={styles.avatar}>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 200,
                height: 200,
              }}
              source={require("../../assets/book.json")}
            />
          </Box>
        </Box>
        <Divider
          w={"80%"}
          backgroundColor={"orange.600"}
          alignSelf={"center"}
          mt={0}
          mb={-5}
        />

        <DrawerContentScrollView {...props}>
          <View style={styles.sectionWrapper} mt={0}>
            <ListItem
              label={"Inicio"}
              iconElement={
                <Ionicons
                  color={theme.colors.orange[600]}
                  name={"home-outline"}
                  size={34}
                />
              }
              showGrids={false}
              onClick={() => {
                navigation.navigate("Home");
              }}
            />
            <ListItem
              label={"Favoritos"}
              iconElement={
                <Ionicons
                  color={theme.colors.orange[600]}
                  name={"heart-outline"}
                  size={34}
                />
              }
              showGrids={false}
              onClick={() => {
                navigation.navigate("Favorites");
              }}
            />
          </View>
        </DrawerContentScrollView>
        <View px={10}>
          <ListItem
            label={"Cerrar sesión"}
            iconElement={
              <Ionicons
                color={theme.colors.orange[600]}
                name={"log-out-outline"}
                size={32}
              />
            }
            showGrids={true}
            onClick={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "Auth" }],
                })
              );
            }}
          />
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarWrapper: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    padding: 25,
  },
  sectionWrapper: {
    marginLeft: 35,
    paddingRight: 15,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarHeading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  avatarSubHeading: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
  },
  avatarIcon: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default DrawerSideBar;
