const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const api = {
  chat: `${API_BASE_URL}/api/chat`,
  contact: `${API_BASE_URL}/api/contact`,
}

export const endpoints = {
  chat: "/api/chat",
  contact: "/api/contact",
}
