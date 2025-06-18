import { CharacterList } from '@app/features/characters/components/character-list/character-list'
import { DefaultLayout } from '@app/shared/layout/default-layout'
import { useFavoritesStore } from '../store/use-favorites-store'
import { useNavigation } from '@react-navigation/native'
import type { FavoritesStackNavigationProp } from '../navigation/favorites-stack'

export const FavoritesScreen = () => {
  const { characters } = useFavoritesStore()
  const navigation = useNavigation<FavoritesStackNavigationProp>()
  return (
    <DefaultLayout>
      <CharacterList
        data={characters}
        onPress={(id) => navigation.navigate('favoriteDetail', { id })}
      />
    </DefaultLayout>
  )
}
