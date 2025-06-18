import { CharacterDetailLayout } from '@app/shared/layout/character-detail-layout'
import { useRoute } from '@react-navigation/native'
import type { CharactersStackParamList } from '../navigation/characters-stack'

export const CharacterDetailScreen = () => {
  const route = useRoute()
  const { id } = route.params as CharactersStackParamList['characterDetail']

  return <CharacterDetailLayout id={id} />
}
