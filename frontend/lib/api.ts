import axios from "axios"

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.trim() || "http://localhost:8000"

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
})

export const endpoints = {
  health: "/health",
  chat: "/ai/chat",
  contact: "/contact/",
}

export interface ChatResponse {
  reply: string
  session_id: string
  message_id: string
  timestamp: string
}

export interface ContactResponse {
  message: string
  status: string
}

export { api }
export default api