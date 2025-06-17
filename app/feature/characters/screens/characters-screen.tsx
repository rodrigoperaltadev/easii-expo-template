import { useCharacters } from '../hooks/use-characters'
import { DefaultLayout } from '@app/shared/layout/default-layout'
import { CharacterList } from '../components/character-list/character-list'
import { useNavigation } from '@react-navigation/native';
import type { CharactersStackNavigationProp } from '../navigation/characters-stack';

export const CharactersScreen = () => {
  const { characters, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useCharacters();
  const navigation = useNavigation<CharactersStackNavigationProp>();
  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  return (
    <DefaultLayout>
      <CharacterList
        data={characters}
        onPress={(id) => navigation.navigate('characterDetail', { id })}
        isLoading={isLoading}
        onEndReached={handleLoadMore}
      />
    </DefaultLayout>
  );
}
