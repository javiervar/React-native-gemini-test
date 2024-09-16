import { Container } from "../../ui-kit/layout";
import { CardStory, Text } from "../../ui-kit/components";
import { FlatList } from "native-base";
import { useFavorites } from "./useFavorites";

export const Favorites = () => {
  const { stories, isLoading, handlePressStory, getFavorites } = useFavorites();

  return (
    <Container>
      <FlatList
        mt={10}
        data={stories}
        renderItem={({ item }) => (
          <CardStory item={item} handlePressStory={handlePressStory} />
        )}
        keyExtractor={(item) => item.id}
        onRefresh={() => getFavorites()}
        refreshing={isLoading}
        ListEmptyComponent={
          <Text
            textAlign={"center"}
            fontSize={20}
            mt={20}
            fontWeight={"bold"}
            color={"black"}
          >
            {"Sin Favoritos"}
          </Text>
        }
      />
    </Container>
  );
};
