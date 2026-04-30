'use client'

import { motion } from 'framer-motion'

export type BotType = 'hotel' | 'school' | 'support'

interface DemoBotSwitcherProps {
  selectedBot: BotType
  onBotChange: (bot: BotType) => void
}

const BOT_CONFIG = {
  hotel: {
    label: 'Hotel Bot',
    description: 'Reservations, guest services & local info',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    accent: 'text-blue-300',
  },
  school: {
    label: 'School Bot',
    description: 'Admissions, academics & campus info',
    gradient: 'from-purple-500/10 to-pink-500/10',
    accent: 'text-purple-300',
  },
  support: {
    label: 'Support Bot',
    description: 'Customer support & troubleshooting',
    gradient: 'from-green-500/10 to-emerald-500/10',
    accent: 'text-green-300',
  },
}

export function DemoBotSwitcher({
  selectedBot,
  onBotChange,
}: DemoBotSwitcherProps) {
  const bots: BotType[] = ['hotel', 'school', 'support']

  return (
    <div className="space-y-4">

      {/* Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

        {bots.map((bot) => {
          const config = BOT_CONFIG[bot]
          const isActive = selectedBot === bot

          return (
            <motion.button
              key={bot}
              onClick={() => onBotChange(bot)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-2xl border p-4 sm:p-5 text-left transition-all duration-300
                ${
                  isActive
                    ? `border-slate-600 bg-gradient-to-br ${config.gradient}`
                    : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                }
              `}
            >
              <div
                className={`font-semibold text-sm sm:text-base ${
                  isActive ? config.accent : 'text-slate-300'
                }`}
              >
                {config.label}
              </div>

              <div className="text-xs sm:text-sm text-slate-400 mt-1">
                {config.description}
              </div>
            </motion.button>
          )
        })}

      </div>

      {/* Active Bot Info */}
      <motion.div
        key={selectedBot}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className={`rounded-xl border border-slate-800 bg-gradient-to-br ${BOT_CONFIG[selectedBot].gradient} p-4`}
      >
        <p className="text-sm text-slate-300">
          <span className={BOT_CONFIG[selectedBot].accent}>
            {BOT_CONFIG[selectedBot].label}
          </span>{' '}
          is now active and ready to respond.
        </p>
      </motion.div>

    </div>
  )
}