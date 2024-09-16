import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { LOCAL_KEY } from "../../constants";
import { IStory } from "../../types";
import * as Speech from "expo-speech";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface IUseStory {
  like: boolean;
  isPlaying: boolean;
  isPaused: boolean;
  handleBack: () => void;
  handleSave: () => Promise<void>;
  handleSpeech: () => void;
}

export const useStory = (data: IStory) => {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [like, setLike] = useState<boolean>();

  useEffect(() => {
    checkLike();
  }, []);

  const checkLike = async () => {
    try {
      const newItem = JSON.stringify(data);
      const newItemParsed = JSON.parse(newItem);
      const prev = await AsyncStorage.getItem(LOCAL_KEY);
      let itemsArray = prev ? JSON.parse(prev) : [];
      const itemIndex = itemsArray.findIndex(
        (item: IStory) => item.id === newItemParsed.id
      );
      if (itemIndex !== -1) {
        setLike(true);
      } else {
        setLike(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSpeech = () => {
    if (isPlaying) {
      if (isPaused) {
        Speech.resume();
        setIsPaused(false);
      } else {
        Speech.pause();
        setIsPaused(true);
      }
    } else {
      Speech.speak(data.story, {
        language: "es",
        rate: 0.8,
        onDone: () => setIsPlaying(false),
      });
      setIsPlaying(true);
    }
  };
  const handleSave = async () => {
    try {
      const newItem = JSON.stringify(data);
      const newItemParsed = JSON.parse(newItem);
      const prev = await AsyncStorage.getItem(LOCAL_KEY);
      let itemsArray = prev ? JSON.parse(prev) : [];
      const itemIndex = itemsArray.findIndex(
        (item: IStory) => item.id === newItemParsed.id
      );

      if (itemIndex !== -1) {
        itemsArray.splice(itemIndex, 1);
        setLike(false);
      } else {
        itemsArray.push(newItemParsed);
        setLike(true);
      }

      await AsyncStorage.setItem(LOCAL_KEY, JSON.stringify(itemsArray));
    } catch (e) {
      console.error("Saving error: ", e);
    }
  };

  const handleBack = () => {
    Speech.stop();
    navigation.goBack();
  };

  return {
    like,
    isPlaying,
    isPaused,
    handleSpeech,
    handleBack,
    handleSave,
  };
};
