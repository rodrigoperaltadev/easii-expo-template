import { useCharacters } from '@app/feature/characters/hooks/use-characters'
import { DefaultLayout } from '@app/shared/layout/default-layout'
import { CharacterList } from '../components/character-list/character-list'
import { useNavigation } from '@react-navigation/native'
import type { CharactersStackNavigationProp } from '../navigation/characters-stack'
import { ErrorLayout } from '@app/shared/layout/error-layout'

export const CharactersScreen = () => {
  const {
    characters,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    error
  } = useCharacters()
  const navigation = useNavigation<CharactersStackNavigationProp>()
  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }

  if (error && !isLoading)
    return <ErrorLayout onRetryButtonPress={() => fetchNextPage()} />

  return (
    <DefaultLayout isLoading={isLoading}>
      <CharacterList
        data={characters}
        onPress={(id) => navigation.navigate('characterDetail', { id })}
        isFetchingNextPage={isFetchingNextPage}
        error={error}
        fetchNextPage={fetchNextPage}
        onEndReached={handleLoadMore}
      />
    </DefaultLayout>
  )
}
