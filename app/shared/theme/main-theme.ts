import { DefaultTheme } from '@react-navigation/native'
import type { Theme as NavigationTheme } from '@react-navigation/native'
import { colors } from './colors'

export const MainTheme: NavigationTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    card: colors.cardBackground,
    text: colors.textPrimary,
    border: colors.border,
    notification: colors.accent
  }
}
