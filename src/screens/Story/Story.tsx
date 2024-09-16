import { Fab, Icon, ScrollView } from "native-base";
import { Text } from "../../ui-kit/components";
import { Container } from "../../ui-kit/layout";
import { Flex } from "../../ui-kit/components";
import { TStoryProps } from "../../types";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../App";
import { useStory } from "./useStory";

export const Story = ({ route }: TStoryProps) => {
  const { data } = route.params;

  const { like, isPlaying, isPaused, handleBack, handleSave, handleSpeech } =
    useStory(data);

  return (
    <Container>
      <Flex
        ml={"6"}
        mr={"6"}
        direction={"row"}
        pb={6}
        justify={"space-between"}
      >
        <TouchableOpacity onPress={handleBack}>
          <MaterialIcons
            name="arrow-left"
            size={30}
            color={theme.colors.orange[500]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSave()}>
          <MaterialIcons
            name={like ? "heart" : "heart-outline"}
            size={30}
            color={theme.colors.orange[500]}
          />
        </TouchableOpacity>
      </Flex>
      <ScrollView>
        <Flex px={"8"} mt={"26"}>
          <Text
            color={"dark.100"}
            marginBottom={"30"}
            textAlign={"center"}
            fontSize={20}
            fontWeight={"bold"}
          >
            {data?.title}
          </Text>
          <Text
            color={"dark.100"}
            lineHeight={"lg"}
            fontSize={16}
            textAlign={"justify"}
          >
            {data?.story}
          </Text>
        </Flex>
      </ScrollView>
      <Fab
        placement="bottom-right"
        colorScheme="orange"
        size="lg"
        icon={
          <Icon
            name={
              (!isPlaying && !isPaused) || (isPlaying && isPaused)
                ? "play"
                : "pause"
            }
            as={Ionicons}
          />
        }
        onPress={handleSpeech}
      />
    </Container>
  );
};
