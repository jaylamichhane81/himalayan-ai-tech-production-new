import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const endpoints = {
  health: "/health",
  chat: "/chat",
  contact: "/contact",
}

export interface ChatResponse {
  reply: string
  session_id: string
}

export interface ContactResponse {
  message: string
  status: string
}

export { api }
export default api