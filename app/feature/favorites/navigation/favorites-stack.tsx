import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FavoriteDetail, FavoritesScreen } from '../screens'

export type FavoritesStackParamList = {
  favorites: undefined
  favoriteDetail: { id: number }
}

export type FavoritesStackNavigationProp =
  NativeStackNavigationProp<FavoritesStackParamList>

const Stack = createNativeStackNavigator<FavoritesStackParamList>()

export const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='favorites' component={FavoritesScreen} />
      <Stack.Screen name='favoriteDetail' component={FavoriteDetail} />
    </Stack.Navigator>
  )
}
