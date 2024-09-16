import { FlatList, Spinner } from "native-base";
import { Container } from "../../ui-kit/layout";
import { useHome } from "./useHome";
import { CardStory } from "../../ui-kit/components";

export const Home = () => {
  const { stories, isLoading, handlePressStory, fetchData } = useHome();

  return (
    <Container>
      <FlatList
        ListEmptyComponent={
          isLoading ? (
            <Spinner mt={"1/2"} size={"lg"} color={"orange.600"} />
          ) : null
        }
        mt={10}
        data={stories}
        renderItem={({ item }) => (
          <CardStory item={item} handlePressStory={handlePressStory} />
        )}
        keyExtractor={(item) => item.id}
        onRefresh={fetchData}
        refreshing={isLoading}
      />
    </Container>
  );
};
