import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create supabase client only if credentials are available
// This allows the app to build and run in demo mode without Supabase
let _supabase: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }
  if (!_supabase) {
    _supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
  return _supabase
}

// For backwards compatibility
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Types for our database tables
export interface ContentItem {
  id: string
  title: string
  description: string
  media_url: string
  media_type: 'image' | 'video'
  external_link?: string
  created_at: string
}

export interface Game {
  id: string
  name: string
  description: string
  thumbnail_url: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
}

export interface GameSession {
  id: string
  device_id: string
  game_id: string
  score: number
  completed_at: string
}

// Helper to get or create device ID
export function getDeviceId(): string {
  if (typeof window === 'undefined') return ''

  let deviceId = localStorage.getItem('device_id')
  if (!deviceId) {
    deviceId = crypto.randomUUID()
    localStorage.setItem('device_id', deviceId)
  }
  return deviceId
}
