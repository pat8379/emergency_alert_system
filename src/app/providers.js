// app/providers.tsx
'use client'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
const queryClient = new QueryClient()
import AppContextProvider from './context/AppContextProvider'

export function Providers({ 
    children 
  }) {
  return (
    <CacheProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </CacheProvider>
  )
}