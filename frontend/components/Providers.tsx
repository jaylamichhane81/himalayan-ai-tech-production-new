'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5, // 5 minutes
          gcTime: 1000 * 60 * 10,   // cache garbage collection

          retry: (failureCount, error: any) => {
            // Avoid retry on client errors (4xx)
            const status = error?.response?.status || error?.status

            if (status >= 400 && status < 500) {
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