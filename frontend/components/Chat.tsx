'use client'

import { useState, FormEvent } from 'react'
import { api, endpoints } from '@/lib/api'

export default function Chat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const trimmed = input.trim()

    try {
      const response = await api.post(endpoints.chat, {
        message: trimmed,
        session_id: 'demo'
      })

      setMessages(prev => [...prev, trimmed, response.data.reply])
      setInput('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div>
        {messages.map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
