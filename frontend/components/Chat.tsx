'use client'

import { useState, FormEvent } from 'react'
import { api, endpoints } from '@/lib/api'
import { DemoBotSwitcher, BotType } from './DemoBotSwitcher'

type ChatMessage = {
  role: 'user' | 'assistant'
  text: string
}

export default function Chat() {
  const [botType, setBotType] = useState<BotType>('support')
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    const trimmed = input.trim()
    if (!trimmed) return

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', text: trimmed }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await api.post(endpoints.chat, {
        message: trimmed,
        session_id: 'demo',
        bot_type: botType
      })

      setMessages(prev => [...prev, { role: 'assistant', text: response.data.reply }])
    } catch (err) {
      console.error(err)
      setError('Unable to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="chat" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-4xl border border-slate-800/80 bg-slate-950/90 p-4 sm:p-6 shadow-2xl shadow-slate-950/40">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-ai-cyan/80 mb-2">AI Demo Chat</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Choose your AI assistant</h2>
            <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
              Select an industry-specific demo bot and see how AI can transform your business.
            </p>
          </div>

          {/* Bot Switcher */}
          <div className="mb-8">
            <DemoBotSwitcher selectedBot={botType} onBotChange={setBotType} />
          </div>

          <div className="space-y-2 min-h-64 max-h-96 overflow-y-auto rounded-3xl border border-slate-800/70 bg-slate-950/70 p-3 sm:p-4">
            {messages.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-700/80 bg-slate-950/50 p-8 text-center text-slate-500">
                Start the demo by typing a question and clicking Send.
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`rounded-3xl p-4 sm:p-5 ${message.role === 'user' ? 'bg-ai-cyan/10 border border-ai-cyan/20 text-white self-end' : 'bg-slate-900 border border-slate-700 text-slate-200'}`}
                >
                  <p className="text-xs uppercase tracking-[0.25em] mb-2 text-slate-400">{message.role === 'user' ? 'You' : 'Assistant'}</p>
                  <p className="whitespace-pre-line text-sm sm:text-base leading-6">{message.text}</p>
                </div>
              ))
            )}
          </div>

          {error && (
            <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
              className="w-full rounded-3xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-ai-cyan focus:ring-1 focus:ring-ai-cyan/20 transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full sm:w-auto whitespace-nowrap px-6 py-3"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  )
}
