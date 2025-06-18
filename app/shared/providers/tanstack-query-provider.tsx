import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

export const queryClient = new QueryClient()
export const TanstackQueryProvider = ({
  children
}: PropsWithChildren<object>) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
