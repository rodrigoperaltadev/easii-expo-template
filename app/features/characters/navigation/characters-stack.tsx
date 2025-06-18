import {
  createNativeStackNavigator,
  type NativeStackNavigationProp
} from '@react-navigation/native-stack'
import { CharacterDetailScreen, CharactersScreen } from '../screens'

export type CharactersStackParamList = {
  characters: undefined
  characterDetail: { id: number }
}

const Stack = createNativeStackNavigator<CharactersStackParamList>()
export type CharactersStackNavigationProp =
  NativeStackNavigationProp<CharactersStackParamList>

export const CharactersStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='characters' component={CharactersScreen} />
      <Stack.Screen name='characterDetail' component={CharacterDetailScreen} />
    </Stack.Navigator>
  )
}
