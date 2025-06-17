import { Pressable, StyleSheet, Text, View } from 'react-native'

type ErrorLayoutProps = {
  onRetryButtonPress?: () => void
}

export const ErrorLayout = ({ onRetryButtonPress }: ErrorLayoutProps) => {
  return (
    <View style={styles.container} testID='error-layout'>
      <Text style={styles.errorMessage}>{'An error occurred'}</Text>
      <Pressable style={styles.button} onPress={onRetryButtonPress}>
        <Text style={styles.buttonText}>Retry</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8d7da',
    borderRadius: 8
  },
  errorMessage: {
    fontSize: 16,
    color: '#721c24',
    marginBottom: 16,
    textAlign: 'center'
  },
  button: {
    padding: 12,
    backgroundColor: '#f5c6cb',
    borderRadius: 4,
    borderColor: '#f5c6cb',
    borderWidth: 1,
    color: '#721c24',
    fontSize: 16
  },
  buttonText: {
    color: '#721c24',
    fontSize: 16
  }
})
