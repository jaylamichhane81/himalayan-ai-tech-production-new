'use client'

import axios, { AxiosError } from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

function isAxiosError(error: unknown): error is AxiosError {
  return axios.isAxiosError(error)
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5, // 5 minutes
          gcTime: 1000 * 60 * 10,   // cache garbage collection

          retry: (failureCount, error: unknown) => {
            // Avoid retry on client errors (4xx)
            const axiosError = isAxiosError(error) ? error : undefined
            const status = axiosError?.response?.status ?? axiosError?.status

            if (status && status >= 400 && status < 500) {
              return false
            }

            return failureCount < 3
          },

          refetchOnWindowFocus: false,
          refetchOnReconnect: true,
        },

        mutations: {
          retry: 1,
        },
      },
    })
  })

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}