import { useTheme } from '@react-navigation/native'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import type { ActivityIndicatorProps } from 'react-native'

type LoaderProps = {
  size?: ActivityIndicatorProps['size']
  text?: string
}
export const Loader = ({
  size = 'large',
  text = 'Loading...'
}: LoaderProps) => {
  const { colors } = useTheme()
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={colors.primary} />
      <Text style={[styles.text, { color: colors.text }]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  text: {
    fontSize: 16
  }
})
