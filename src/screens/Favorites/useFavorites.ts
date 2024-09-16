import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_KEY } from "../../constants";
import { useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { IStory, TAppStack } from "../../types";
import React from "react";

export interface IUseFavorites {
  stories: IStory[];
  isLoading: boolean;
  handlePressStory: (story: IStory) => void;
  getFavorites: () => Promise<void>;
}

export const useFavorites = (): IUseFavorites => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation<TAppStack>();

  useFocusEffect(
    React.useCallback(() => {
      getFavorites();
    }, [])
  );

  const getFavorites = async () => {
    setIsLoading(true);
    try {
      const prev = await AsyncStorage.getItem(LOCAL_KEY);
      const items = prev ? JSON.parse(prev) : [];
      setStories(items);
    } catch (e) {
      console.error("Saving error: ", e);
    } finally {
      setIsLoading(false);
    }
  };
  const handlePressStory = (story: IStory) => {
    navigation.navigate("AppStack", {
      screen: "Story",
      params: { data: story },
    });
  };
  return {
    stories,
    isLoading,
    handlePressStory,
    getFavorites,
  };
};
