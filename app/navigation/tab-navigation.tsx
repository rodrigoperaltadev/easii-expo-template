import { CharactersStack } from '@app/features/characters/navigation/characters-stack'
import { FavoritesStack } from '@app/features/favorites/navigation/favorites-stack'
import { Icon } from '@app/shared/components/icon/icon'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTranslation } from 'react-i18next'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
  const { t } = useTranslation()

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
          tabBarLabel: t('characters.title'),
          tabBarIcon: ({ color, size }) => (
            <Icon name='person' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='favoritesStack'
        component={FavoritesStack}
        options={{
          tabBarLabel: t('favorites.title'),
          tabBarIcon: ({ color, size }) => (
            <Icon name='heart' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
