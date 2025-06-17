import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Loader } from '../loader/loader'

type ListFooterComponentProps = {
  isLoadingMore: boolean
  error?: Error | null
  onRetry?: () => void
}

export const ListFooterComponent = ({
  isLoadingMore,
  error,
  onRetry
}: ListFooterComponentProps) => {
  if (isLoadingMore) {
    return (
      <View style={styles.container}>
        <Loader size='small' />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.error]}>
          Failed to load more data.
        </Text>
        {onRetry && (
          <TouchableOpacity onPress={onRetry} style={styles.retryButton}>
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }

  return null
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: 8,
    fontSize: 14
  },
  error: {
    color: 'red'
  },
  retryButton: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#e2e2e2',
    borderRadius: 4
  },
  retryText: {
    fontSize: 14,
    fontWeight: '500'
  }
})
