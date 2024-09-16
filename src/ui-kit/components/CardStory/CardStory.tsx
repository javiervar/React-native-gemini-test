import { TouchableOpacity } from "react-native";
import { IStory } from "../../../types";
import { Box, Text } from "..";
import { AspectRatio, Heading, Stack, Image } from "native-base";

export interface ICardStory {
  item: IStory;
  handlePressStory: (item: IStory) => void;
}

export const CardStory = (props: ICardStory) => {
  const { item, handlePressStory } = props;

  return (
    <TouchableOpacity onPress={() => handlePressStory(item)}>
      <Box alignItems="center" m={2}>
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          backgroundColor="orange.500"
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://picsum.photos/400/400",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {item.title}
              </Heading>
            </Stack>
            <Text fontWeight="400">{`${item?.story?.slice(0, 100)}...`}</Text>
          </Stack>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
