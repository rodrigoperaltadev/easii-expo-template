import type { PropsWithChildren } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ReactNavigationThemeProvider } from './react-navigation-theme-provider'
import { TanstackQueryProvider } from './tanstack-query-provider'
import { ThemeProvider } from './theme-provider'

const ProvidersList = [
  SafeAreaProvider,
  ReactNavigationThemeProvider,
  TanstackQueryProvider,
  ThemeProvider
]

export const Providers: React.FC<PropsWithChildren> = ({ children }) =>
  ProvidersList.reduce(
    (acc, Provider) => <Provider key={Provider.name}>{acc}</Provider>,
    children
  )
