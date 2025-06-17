import { axiosClient } from '@app/shared/http/axios-client'
import type { PaginatedResponse } from '@app/shared/types/pagination'
import type { Character } from '../types'

export const charactersService = {
  fetchCharacters: async (
    page: number
  ): Promise<PaginatedResponse<Character>> => {
    const { data } = await axiosClient.get(`/character?page=${page}`)
    return data
  },
  fetchCharacterById: async (id: number): Promise<Character> => {
    const { data } = await axiosClient.get(`/character/${id}`)
    return data
  }
}
