'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { api, endpoints, ChatResponse } from '@/lib/api'

interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  text: string
}

const initialMessages: ChatMessage[] = [
  {
    id: 'intro',
    role: 'assistant',
    text: "Welcome to the Himalayan AI demo chatbot. Ask how AI can boost your business, build a website, or automate operations.",
  },
]

export function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sessionId, setSessionId] = useState<string | undefined>(undefined)

  const addMessage = (message: ChatMessage) => {
    setMessages((prev) => [...prev, message])
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError(null)

    const trimmed = input.trim()
    if (!trimmed) {
      setError('Please type a message first.')
      return
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
    }

    addMessage(userMessage)
    setLoading(true)
    setInput('')

    try {
      const data = await api.post<ChatResponse>(endpoints.chat, {
        message: trimmed,
        session_id: sessionId,
      })

      setSessionId(data.session_id)
      addMessage({
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        text: data.reply,
      })
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to reach the AI service.'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleQuickPrompt = async () => {
    setInput('How can AI improve my small business in Kathmandu?')
  }

  return (
    <section id="demo" className="section-container py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
              Demo Chatbot
            </h2>
            <p className="text-slate-400 mb-6 max-w-2xl text-sm sm:text-base md:text-lg">
              Try our live demo chatbot to see how Himalayan AI Tech can answer customer questions, guide visitors, and turn conversations into leads.
            </p>
            <button
              type="button"
              onClick={handleQuickPrompt}
              className="btn-secondary text-sm sm:text-base px-6 py-3 font-semibold"
            >
              Try prompt example
            </button>
          </div>

          <div className="lg:w-1/2 bg-slate-950/90 border border-ai-cyan/20 rounded-3xl p-5 shadow-2xl shadow-ai-cyan/10">
            <div className="max-h-[540px] overflow-y-auto space-y-4 pb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`rounded-3xl p-4 ${message.role === 'assistant' ? 'bg-slate-900 border border-ai-cyan/10 text-slate-100' : 'bg-white/5 border border-slate-700 text-white'} shadow-sm`}
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
                    {message.role === 'assistant' ? 'AI assistant' : message.role === 'user' ? 'You' : 'System'}
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">{message.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              {error && (
                <div className="rounded-2xl bg-red-500/10 border border-red-500/30 p-3 text-sm text-red-300">
                  {error}
                </div>
              )}
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                rows={3}
                placeholder="Type a question for the demo chatbot..."
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-ai-cyan focus:ring-1 focus:ring-ai-cyan/30"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary text-sm sm:text-base px-5 py-3 font-semibold"
              >
                {loading ? 'Thinking...' : 'Send to demo bot'}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
