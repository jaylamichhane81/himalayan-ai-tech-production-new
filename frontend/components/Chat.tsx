'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import { DemoBotSwitcher, BotType } from './DemoBotSwitcher'

type ChatMessage = {
  role: 'user' | 'assistant'
  text: string
  id?: string
  streaming?: boolean
}

export default function Chat() {
  const [botType, setBotType] = useState<BotType>('support')
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [streamingMessage, setStreamingMessage] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [messages, loading, streamingMessage])

  const handleStreamingResponse = async (message: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/ai/chat/stream`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          session_id: 'demo',
          bot_type: botType,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get streaming response')
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let accumulatedText = ''

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          const lines = chunk.split('\n')

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.slice(6))
                if (data.error) {
                  throw new Error(data.error)
                }
                if (data.content) {
                  accumulatedText += data.content
                  setStreamingMessage(accumulatedText)
                }
                if (data.done) {
                  setMessages((prev) => [...prev, { role: 'assistant', text: accumulatedText, id: Date.now().toString() }])
                  setStreamingMessage('')
                  setIsStreaming(false)
                  setIsTyping(false)
                  return
                }
              } catch (_) {
                // Skip invalid JSON
              }
            }
          }
        }
      }
    } catch (err) {
      console.error('Streaming error:', err)
      setError('Unable to send message. Please try again.')
      setIsStreaming(false)
      setStreamingMessage('')
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    const trimmed = input.trim()
    if (!trimmed || loading || isStreaming) return

    const userMessage: ChatMessage = { role: 'user', text: trimmed, id: Date.now().toString() }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)
    setIsStreaming(true)
    setIsTyping(true)

    try {
      await handleStreamingResponse(trimmed)
    } catch (err) {
      console.error(err)
      setError('Unable to send message. Please try again.')
      setIsStreaming(false)
      setIsTyping(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="chat" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-4xl border border-slate-800/80 bg-slate-950/90 p-4 sm:p-6 shadow-2xl shadow-slate-950/40">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.3em] text-ai-cyan/80 mb-2">AI Demo Chat</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Choose your AI assistant</h2>
              <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
                Select an industry-specific demo bot and see how AI can transform your business.
              </p>
            </div>

            <div className="mb-8">
              <DemoBotSwitcher selectedBot={botType} onBotChange={setBotType} />
            </div>

            <div
              className="space-y-3 min-h-[18rem] max-h-[36rem] overflow-y-auto rounded-3xl border border-slate-800/70 bg-slate-950/70 p-3 sm:p-4"
              aria-live="polite"
            >
              {messages.length === 0 && !isStreaming ? (
                <div className="rounded-3xl border border-dashed border-slate-700/80 bg-slate-950/50 p-8 text-center text-slate-500">
                  Start the demo by typing a question and clicking Send.
                </div>
              ) : (
                <>
                  {messages.map((message, index) => (
                    <div
                      key={message.id || index}
                      className={`rounded-3xl p-4 sm:p-5 ${
                        message.role === 'user'
                          ? 'bg-ai-cyan/10 border border-ai-cyan/20 text-white self-end'
                          : 'bg-slate-900 border border-slate-700 text-slate-200'
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.25em] mb-2 text-slate-400">
                        {message.role === 'user' ? 'You' : 'Assistant'}
                      </p>
                      <p className="whitespace-pre-line text-sm sm:text-base leading-6">{message.text}</p>
                    </div>
                  ))}

                  {isStreaming && (
                    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-4 text-slate-300">
                      <p className="text-xs uppercase tracking-[0.25em] mb-2 text-slate-500">Assistant</p>
                      <p className="whitespace-pre-line text-sm sm:text-base leading-6">
                        {streamingMessage}
                        <span className="inline-block w-2 h-4 bg-ai-cyan animate-pulse ml-1"></span>
                      </p>
                    </div>
                  )}
                </>
              )}

              {isTyping && !isStreaming && (
                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-4 text-slate-300">
                  <p className="text-xs uppercase tracking-[0.25em] mb-2 text-slate-500">Assistant</p>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-ai-cyan animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="h-2 w-2 rounded-full bg-ai-cyan animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="h-2 w-2 rounded-full bg-ai-cyan animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span>Typing a response...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {error && (
              <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={loading}
                className="flex-1 rounded-3xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-ai-cyan focus:ring-1 focus:ring-ai-cyan/20 transition min-w-0"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary whitespace-nowrap px-6 py-3 text-sm sm:text-base"
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
