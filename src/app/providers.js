// app/providers.tsx
'use client'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
const queryClient = new QueryClient()

export function Providers({ 
    children 
  }) {
  return (
    <CacheProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </QueryClientProvider>
    </CacheProvider>
  )
}