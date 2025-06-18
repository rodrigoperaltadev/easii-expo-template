import type { Character } from '@app/features/characters/types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type FavoriteStore = {
  characters: Character[]
  addFavorite: (character: Character) => void
  removeFavorite: (characterId: Character['id']) => void
  isFavorite: (characterId: Character['id']) => boolean
}

export const useFavoritesStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      characters: [],
      addFavorite: (character: Character) =>
        set((state: FavoriteStore) => ({
          characters: [...state.characters, character]
        })),
      removeFavorite: (characterId: Character['id']) =>
        set((state: FavoriteStore) => ({
          characters: state.characters.filter((c) => c.id !== characterId)
        })),
      isFavorite: (characterId: Character['id']) =>
        get().characters.some((c: { id: number }) => c.id === characterId)
    }),
    {
      name: 'favorites-store',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)
