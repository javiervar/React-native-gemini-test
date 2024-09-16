import React from "react";
import { Flex, Box, Text } from "../";
import { TouchableOpacity } from "react-native";

interface IListItem {
  label: string;
  iconElement?: React.ReactNode;
  onClick: () => void;
}

export const ListItem = ({
  label,
  onClick,
  iconElement: IconElement,
}: IListItem): React.JSX.Element => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Flex flexDirection={"row"} mb={7} alignItems={"center"}>
        <Box width={30} alignItems={"center"}>
          {IconElement}
        </Box>
        <Text marginLeft={5} color={"gray.600"} fontSize={20} flex={1} bold>
          {label}
        </Text>
      </Flex>
    </TouchableOpacity>
  );
};
