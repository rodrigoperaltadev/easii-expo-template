import { CharacterDetail } from "@app/feature/characters/components/character-detail/character-detail";
import { DefaultLayout } from "./default-layout";
import { useCharacter } from "@app/feature/characters/hooks/use-character";
import { ErrorLayout } from "./error-layout";

type CharacterDetailLayoutProps = {
  id: number;
}

export const CharacterDetailLayout = ({ id }: CharacterDetailLayoutProps) => {

  const { character, isLoading, error, refetch } = useCharacter(id);

  if (!character && error) return <ErrorLayout onRetryButtonPress={refetch} />;

  return (
    <DefaultLayout isLoading={isLoading}>
      {character && <CharacterDetail data={character} />}
    </DefaultLayout>
  );
};
