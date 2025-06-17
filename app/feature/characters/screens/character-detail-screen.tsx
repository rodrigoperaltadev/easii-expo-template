import { useRoute } from '@react-navigation/native'
import type { CharactersStackParamList } from '../navigation/characters-stack'
import { CharacterDetailLayout } from '@app/shared/layout/character-detail-layout'

export const CharacterDetailScreen = () => {
  const route = useRoute()
  const { id } = route.params as CharactersStackParamList['characterDetail']

  return <CharacterDetailLayout id={id} />
}
