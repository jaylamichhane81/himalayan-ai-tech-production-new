'use client'

import { motion } from 'framer-motion'

export type BotType = 'hotel' | 'school' | 'support'

interface DemoBotSwitcherProps {
  selectedBot: BotType
  onBotChange: (bot: BotType) => void
}

const BOT_CONFIG = {
  hotel: {
    label: '🏨 Hotel Bot',
    description: 'Reservations, guest services & local info',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-400/30',
    textColor: 'text-blue-300'
  },
  school: {
    label: '🎓 School Bot',
    description: 'Admissions, academics & campus info',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-400/30',
    textColor: 'text-purple-300'
  },
  support: {
    label: '💬 Support Bot',
    description: 'Customer support & troubleshooting',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-400/30',
    textColor: 'text-green-300'
  }
}

export function DemoBotSwitcher({ selectedBot, onBotChange }: DemoBotSwitcherProps) {
  const bots: BotType[] = ['hotel', 'school', 'support']

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        {bots.map((bot) => {
          const config = BOT_CONFIG[bot]
          const isSelected = selectedBot === bot

          return (
            <motion.button
              key={bot}
              onClick={() => onBotChange(bot)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex-1 rounded-2xl border-2 p-4 sm:p-5 transition-all duration-300 ${
                isSelected
                  ? `${config.borderColor} bg-linear-to-br ${config.color} ring-2 ring-offset-2 ring-offset-slate-950 ring-slate-700`
                  : 'border-slate-700/50 bg-slate-900/50 hover:border-slate-600/80'
              }`}
            >
              <div className="text-left">
                <div className={`font-semibold text-sm sm:text-base ${isSelected ? config.textColor : 'text-slate-300'}`}>
                  {config.label}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {config.description}
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Selected Bot Info */}
      <motion.div
        key={selectedBot}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={`rounded-xl border ${BOT_CONFIG[selectedBot].borderColor} bg-linear-to-br ${BOT_CONFIG[selectedBot].color} p-3 sm:p-4`}
      >
        <p className="text-xs sm:text-sm text-slate-300">
          <span className={`font-semibold ${BOT_CONFIG[selectedBot].textColor}`}>
            {BOT_CONFIG[selectedBot].label}
          </span>
          {' '}is ready to help you.
        </p>
      </motion.div>
    </div>
  )
}
