import { CharacterDetailLayout } from '@app/shared/layout/character-detail-layout'
import { useRoute } from '@react-navigation/native'
import type { FavoritesStackParamList } from '../navigation/favorites-stack'

export const FavoriteDetail = () => {
  const route = useRoute()
  const { id } = route.params as FavoritesStackParamList['favoriteDetail']

  return <CharacterDetailLayout id={id} />
}
