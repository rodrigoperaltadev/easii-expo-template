import {
  type QueryFunctionContext,
  useInfiniteQuery
} from '@tanstack/react-query'
import { charactersService } from '../services/characters.service'

export const useCharacters = () => {
  const query = useInfiniteQuery({
    queryKey: ['characters'] as const,
    queryFn: ({
      pageParam
    }: QueryFunctionContext<readonly ['characters'], number>) =>
      charactersService.fetchCharacters(pageParam ?? 1),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const next = lastPage.info.next
      if (!next) return undefined

      const url = new URL(next)
      const page = url.searchParams.get('page')
      return page ? Number.parseInt(page, 10) : undefined
    }
  })

  const characters = query.data?.pages.flatMap((page) => page.results) ?? []

  return {
    ...query,
    characters
  }
}
