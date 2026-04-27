const CACHE_NAME = 'himalayan-ai-v1'
const STATIC_CACHE = 'himalayan-ai-static-v1'
const API_CACHE = 'himalayan-ai-api-v1'

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/images/logo.png',
  '/favicon.ico'
]

// API endpoints to cache
const API_ENDPOINTS = [
  '/health',
  '/contact'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_FILES)
      })
      .then(() => {
        return self.skipWaiting()
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== API_CACHE) {
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      return self.clients.claim()
    })
  )
})

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Handle API requests
  if (url.origin === self.location.origin && API_ENDPOINTS.some(endpoint => url.pathname.includes(endpoint))) {
    event.respondWith(
      caches.open(API_CACHE).then((cache) => {
        return fetch(request)
          .then((response) => {
            // Cache successful GET responses
            if (request.method === 'GET' && response.status === 200) {
              cache.put(request, response.clone())
            }
            return response
          })
          .catch(() => {
            // Return cached version if network fails
            return cache.match(request)
          })
      })
    )
    return
  }

  // Handle static assets
  if (STATIC_FILES.includes(url.pathname) || request.destination === 'image' || request.destination === 'style' || request.destination === 'script') {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          return response || fetch(request).then((response) => {
            if (response.status === 200) {
              const responseClone = response.clone()
              caches.open(STATIC_CACHE).then((cache) => {
                cache.put(request, responseClone)
              })
            }
            return response
          })
        })
    )
    return
  }

  // Default network-first for other requests
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request)
    })
  )
})