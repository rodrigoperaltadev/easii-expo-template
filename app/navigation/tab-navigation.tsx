import { CharactersStack } from '@app/feature/characters/navigation/characters-stack'
import { FavoritesStack } from '@app/feature/favorites/navigation/favorites-stack'
import { Icon } from '@app/shared/components/icon/icon'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name='charactersStack'
        component={CharactersStack}
        options={{
          tabBarLabel: 'Characters',
          tabBarIcon: ({ color, size }) => (
            <Icon name='person' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='favoritesStack'
        component={FavoritesStack}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Icon name='heart' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
