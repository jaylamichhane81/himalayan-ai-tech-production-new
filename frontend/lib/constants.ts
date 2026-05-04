/**
 * Frontend Constants
 * Shared constants for the Next.js frontend application
 */

// WhatsApp contact number
export const WHATSAPP_NUMBER = '9779849745629'

// API base URL (fallback for when env var is not set)
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

// Environment check
export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'

// App configuration
export const APP_CONFIG = {
  name: 'Himalayan AI Tech Pro',
  description: 'AI Chatbots & Automation for Businesses',
  version: '1.0.0',
}

// Contact information
export const CONTACT_INFO = {
  whatsapp: WHATSAPP_NUMBER,
  email: 'himalayanaitech@gmail.com',
  address: 'Gokarneshwor-5, Kathmandu, Nepal',
}

// Social links (if needed)
export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
}