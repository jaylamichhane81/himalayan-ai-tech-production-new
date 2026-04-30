'use client'

import { useEffect } from 'react'

export function ServiceWorker() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js')

          // Optional: handle updates
          registration.onupdatefound = () => {
            const newWorker = registration.installing

            if (!newWorker) return

            newWorker.onstatechange = () => {
              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {
                // New update available
                console.log('New content available, refresh recommended')
              }
            }
          }

          console.log('Service Worker registered successfully')
        } catch (error) {
          // Silent fail in production (don’t break UI)
          console.error('Service Worker registration failed:', error)
        }
      }

      registerSW()
    }
  }, [])

  return null
}