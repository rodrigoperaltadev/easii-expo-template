import { useTheme } from '@app/shared/hooks/use-theme'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Loader } from '../components/loader/loader'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '../components/icon/icon'

export const DefaultLayout = ({
  children,
  isLoading
}: { children: React.ReactNode; isLoading?: boolean }) => {
  const { colors } = useTheme()
  if (isLoading)
    return (
      <View style={styles.loadingContainer}>
        <Loader />
      </View>
    )
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {children}
    </SafeAreaView>
  )
}

const Header = ({ title }: { title: string }) => {
  const { colors } = useTheme()
  const navigation = useNavigation()


  return (
    <View style={styles.headerContainer}>
      {navigation.canGoBack() && (<Pressable onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back"
          size={24}
          color={colors.black}
        />
      </Pressable>)}
      <Text style={{ color: colors.textPrimary }}>{title}</Text>
    </View>
  )
}

DefaultLayout.Header = Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8
  }
})
