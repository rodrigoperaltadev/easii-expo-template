import './shared/i18n'
import { StatusBar } from 'expo-status-bar'
import { AppNavigation } from './navigation/app-navigation'
import { Providers } from './shared/providers'

export default function App() {
  return (
    <Providers>
      <AppNavigation />
      <StatusBar style='auto' />
    </Providers>
  )
}
