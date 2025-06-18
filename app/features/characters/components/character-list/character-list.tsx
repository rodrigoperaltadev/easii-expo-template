import { ListFooterComponent } from '@app/shared/components/list-footer-component/list-footer-component'
import { List } from '@app/shared/components/list/list'
import { StyleSheet, Text, View } from 'react-native'
import type { Character } from '../../types'
import { CharacterCard } from '../character-card/character-card'

type CharacterListProps = {
  data: Character[]
  onPress: (characterId: Character['id']) => void
  onEndReached?: () => void
  isFetchingNextPage?: boolean
  error?: Error | null
  fetchNextPage?: () => void
}

const ListEmptyComponent = () => (
  <View style={styles.content}>
    <Text style={{ fontSize: 16, color: 'gray' }}>No characters found.</Text>
  </View>
)

export const CharacterList = ({
  data,
  isFetchingNextPage = false,
  error,
  fetchNextPage,
  onPress,
  onEndReached
}: CharacterListProps) => {
  return (
    <List
      testID='character-list'
      data={data}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={
        <ListFooterComponent
          isLoadingMore={isFetchingNextPage}
          error={error}
          onRetry={fetchNextPage}
        />
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => (
        <CharacterCard character={item} onPress={onPress} />
      )}
    />
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
