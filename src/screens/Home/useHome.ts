import { useEffect, useState } from "react";
import { PROMP } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { IStory, TAppStack } from "../../types";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY!);

export interface IUseHome {
  stories: IStory[];
  isLoading: boolean;
  handlePressStory: (val: IStory) => void;
  fetchData: () => Promise<void>;
}

const schema = {
  description: "Stories",
  type: SchemaType.ARRAY,
  items: {
    type: SchemaType.OBJECT,
    properties: {
      id: {
        type: SchemaType.STRING,
        description: "uuid",
        nullable: false,
      },
      title: {
        type: SchemaType.STRING,
        description: "Title of the story",
        nullable: false,
      },
      story: {
        type: SchemaType.STRING,
        description: "Story",
        nullable: false,
      },
    },
  },
};

export const useHome = (): IUseHome => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation<TAppStack>();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: schema,
        },
      });
      const prompt = PROMP;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const json = JSON.parse(response.text());
      setStories(json);
    } catch (err) {
      console.error("ERROR", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePressStory = (story: IStory) => {
    navigation.navigate("AppStack", {
      screen: "Story",
      params: { data: story },
    });
  };
  return {
    isLoading,
    stories,
    handlePressStory,
    fetchData,
  };
};
