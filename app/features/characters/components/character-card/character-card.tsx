import type { Character } from '@app/features/characters/types'
import { useFavoritesStore } from '@app/features/favorites/store/use-favorites-store'
import { Icon } from '@app/shared/components/icon/icon'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export type CharacterCardProps = {
  character: Character
  onPress: (characterId: Character['id']) => void
}

export const CharacterCard = (props: CharacterCardProps) => {
  const { character, onPress } = props
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore()
  const handleFavoriteToggle = (character: Character) => {
    if (isFavorite(character.id)) {
      removeFavorite(character.id)
    } else {
      addFavorite(character)
    }
  }

  return (
    <Pressable style={styles.container} onPress={() => onPress?.(character.id)}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <View>
            <Text testID='character-name' style={styles.name}>
              {character.name}
            </Text>
            <Text style={styles.status}>Status: {character.status}</Text>
            <Text style={styles.species}>Species: {character.species}</Text>
            <Text style={styles.species}>Origin: {character.origin.name}</Text>
          </View>
        </View>
        <Pressable
          onPress={() => {
            handleFavoriteToggle(character)
          }}
          style={styles.button}
        >
          <Icon
            name={isFavorite(character.id) ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite(character.id) ? 'red' : 'gray'}
          />
        </Pressable>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    flexDirection: 'row',
    gap: 16
  },
  button: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 120,
    aspectRatio: 1,
    borderRadius: 8,
    resizeMode: 'contain'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    flexShrink: 1
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8
  },
  infoContainer: {
    flex: 1,
    gap: 2,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  status: {
    fontSize: 14,
    color: 'gray'
  },
  species: {
    fontSize: 14,
    color: 'gray'
  }
})
