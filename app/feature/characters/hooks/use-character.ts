import { useQuery } from '@tanstack/react-query'
import type { Character } from '../types'
import { charactersService } from '../services/characters.service'

const FIVE_MINUTES = 1000 * 60 * 5

export const useCharacter = (id: Character['id']) => {
  const { data: character, ...query } = useQuery({
    queryKey: ['character', id],
    queryFn: () => charactersService.fetchCharacterById(id),
    enabled: !!id,
    staleTime: FIVE_MINUTES
  })

  return {
    ...query,
    character
  }
}
