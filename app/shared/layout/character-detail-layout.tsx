import { CharacterDetail } from '@app/features/characters/components/character-detail/character-detail'
import { DefaultLayout } from './default-layout'
import { useCharacter } from '@app/features/characters/hooks/use-character'
import { ErrorLayout } from './error-layout'

type CharacterDetailLayoutProps = {
  id: number
}

export const CharacterDetailLayout = ({ id }: CharacterDetailLayoutProps) => {
  const { character, isLoading, error, refetch } = useCharacter(id)

  if (!character && error) return <ErrorLayout onRetryButtonPress={refetch} />

  return (
    <DefaultLayout isLoading={isLoading}>
      <DefaultLayout.Header title={'Character Detail'} />
      {/* write a header */}

      {character && <CharacterDetail data={character} />}
    </DefaultLayout>
  )
}
