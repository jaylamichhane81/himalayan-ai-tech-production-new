'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCcw } from 'lucide-react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{
    error?: Error
    resetError: () => void
  }>
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // In production, you can send this to Sentry / logging service
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: undefined,
    })
  }

  render() {
    if (this.state.hasError) {
      const Fallback = this.props.fallback

      if (Fallback) {
        return (
          <Fallback
            error={this.state.error}
            resetError={this.resetError}
          />
        )
      }

      return (
        <ErrorFallback
          error={this.state.error}
          resetError={this.resetError}
        />
      )
    }

    return this.props.children
  }
}

/* ---------------- FALLBACK UI ---------------- */

function ErrorFallback({
  error,
  resetError,
}: {
  error?: Error
  resetError: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-ai px-4"
    >
      <div className="max-w-md w-full text-center">

        {/* Icon */}
        <motion.div
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center"
        >
          <AlertTriangle className="w-7 h-7 text-red-400" />
        </motion.div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-white mb-2">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="text-slate-400 mb-6">
          We encountered an unexpected error. Please try again.
        </p>

        {/* Dev Error Details */}
        {process.env.NODE_ENV === 'development' && error && (
          <details className="mb-6 text-left">
            <summary className="text-sm text-slate-500 cursor-pointer hover:text-slate-400">
              Error details (dev only)
            </summary>

            <pre className="mt-2 p-3 bg-slate-900/60 rounded-lg text-xs text-red-300 overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}

        {/* Actions */}
        <div className="flex gap-3 justify-center">

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetError}
            className="inline-flex items-center gap-2 px-4 py-2 bg-ai-cyan text-black font-medium rounded-lg hover:opacity-90 transition"
          >
            <RefreshCcw className="w-4 h-4" />
            Try again
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition"
          >
            Refresh
          </motion.button>

        </div>
      </div>
    </motion.div>
  )
}

export { ErrorBoundary, ErrorFallback }