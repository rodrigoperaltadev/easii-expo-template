import { useTheme } from '@app/shared/hooks/use-theme'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Loader } from '../components/loader/loader'

export const DefaultLayout = ({ children, isLoading }: { children: React.ReactNode, isLoading?: boolean }) => {
  const { colors } = useTheme()
  if (isLoading) return <View style={styles.loadingContainer}><Loader /></View>
  return <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
