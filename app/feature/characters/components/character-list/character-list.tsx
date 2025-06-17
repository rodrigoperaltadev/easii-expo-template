import { List } from "@app/shared/components/list/list"
import { CharacterCard } from "../character-card/character-card"
import type { Character } from "../../types"
import { StyleSheet, Text, View } from "react-native";
import { Loader } from "@app/shared/components/loader/loader";

type CharacterListProps = {
  data: Character[];
  isLoading?: boolean;
  onPress: (characterId: Character["id"]) => void;
  onEndReached?: () => void;
};

const ListEmptyComponent = () => (
  <View style={styles.content}>
    <Text style={{ fontSize: 16, color: 'gray' }}>
      No characters found.
    </Text>
  </View>
);


export const CharacterList = ({ data, isLoading, onPress, onEndReached }: CharacterListProps) => {

  return (
    <List
      data={data}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={isLoading ? <Loader /> : null}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => (
        <CharacterCard character={item} onPress={onPress} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})