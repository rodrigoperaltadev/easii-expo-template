import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import type { Character } from "../../types"

export type CharacterDetailProps = {
  data: Character
}

export const CharacterDetail = ({ data }: CharacterDetailProps) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        source={{ uri: data.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{data.name}</Text>
      </View>
      <View style={styles.rowInfo}>
        <Text style={styles.propertyLabel}>Status:</Text>
        <Text style={styles.propertyValue}>{data.status}</Text>
      </View>
      <View style={styles.rowInfo}>
        <Text style={styles.propertyLabel}>Species:</Text>
        <Text style={styles.propertyValue}>{data.species}</Text>
      </View>
      <View style={styles.rowInfo}>
        <Text style={styles.propertyLabel}>Gender:</Text>
        <Text style={styles.propertyValue}>{data.gender}</Text>
      </View>
      <View style={styles.rowInfo}>
        <Text style={styles.propertyLabel}>Species:</Text>
        <Text style={styles.propertyValue}>{data.species}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  titleContainer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderBottomColor: '#ddd',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
  },
  propertyLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  propertyValue: {
    fontSize: 16,
    color: '#333',
  },
  rowInfo: {
    flexDirection: 'row',
    gap: 16,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 8,
    borderRadius: 8,
    
  }

})