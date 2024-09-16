import {
  type NavigatorScreenParams,
  type NavigationProp,
  type ParamListBase,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IStory } from "./stories.types";

export interface TAppStackParamList extends ParamListBase {
  Home: undefined;
  Story: { data: IStory };
}

export interface TDrawerStackParamList extends ParamListBase {
  Home: undefined;
  Favorites: undefined;
}

export type TDrawerStack = NavigationProp<TDrawerStackParamList>;

export interface TRootStack {
  AppStack: NavigatorScreenParams<TAppStackParamList>;
  App: NavigatorScreenParams<TDrawerStackParamList>;
}

export type TAppStack = NavigationProp<TRootStack>;

export type TStoryProps = NativeStackScreenProps<TAppStackParamList, "Story">;
