import { extendTheme } from "native-base";
import { Colors } from "./Colors";

export const theme = extendTheme({
  colors: Colors,
  config: {
    initialColorMode: "dark",
  },
});
