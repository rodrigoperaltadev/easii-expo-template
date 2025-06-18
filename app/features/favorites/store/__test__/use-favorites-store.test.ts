import { act } from '@testing-library/react-native'
import type { Character } from '@app/features/characters/types'
import { useFavoritesStore as originalStore } from '../use-favorites-store'

const mockCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth', url: '' },
  location: { name: 'Earth', url: '' },
  image: ''
}

describe('useFavoritesStore', () => {
  beforeEach(() => {
    const { characters } = originalStore.getState()
    // biome-ignore lint/complexity/noForEach: <explanation>
    characters.forEach((c) => originalStore.getState().removeFavorite(c.id))
  })

  it('adds a character to favorites', () => {
    act(() => {
      originalStore.getState().addFavorite(mockCharacter)
    })

    const state = originalStore.getState()
    expect(state.characters).toContainEqual(mockCharacter)
  })

  it('removes a character from favorites', () => {
    act(() => {
      originalStore.getState().addFavorite(mockCharacter)
      originalStore.getState().removeFavorite(mockCharacter.id)
    })

    const state = originalStore.getState()
    expect(state.characters).not.toContainEqual(mockCharacter)
  })

  it('checks if a character is favorite', () => {
    act(() => {
      originalStore.getState().addFavorite(mockCharacter)
    })

    const result = originalStore.getState().isFavorite(mockCharacter.id)
    expect(result).toBe(true)
  })

  it('returns false if a character is not favorite', () => {
    const result = originalStore.getState().isFavorite(999)
    expect(result).toBe(false)
  })
})
