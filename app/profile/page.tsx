'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { StatsCard } from '@/components/profile/stats-card'
import { Badge } from '@/components/ui/badge'
import { Gamepad2, Trophy, Clock, Star, Calendar } from 'lucide-react'
import { getDeviceId } from '@/lib/supabase'

// Placeholder stats
const stats = {
  gamesCompleted: 0,
  totalScore: 0,
  timeSpent: '0h 0m',
  streak: 0,
}

// Placeholder game history
const gameHistory: {
  id: string
  gameName: string
  score: number
  completedAt: string
}[] = []

export default function ProfilePage() {
  const [deviceId, setDeviceId] = useState<string>('')

  useEffect(() => {
    setDeviceId(getDeviceId())
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight gradient-text">Profile</h1>
        <p className="text-muted-foreground mt-1">
          Track your learning progress
        </p>
      </header>

      {/* Profile Header */}
      <div className="glass glow-border mb-6 rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 ring-2 ring-primary/50 ring-offset-2 ring-offset-background">
            <AvatarImage src="" alt="Profile" />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
              O
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Learner</h2>
            <p className="text-sm text-muted-foreground">
              Device ID: {deviceId.slice(0, 8)}...
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mb-6 grid gap-4 grid-cols-2">
        <StatsCard
          title="Games Completed"
          value={stats.gamesCompleted}
          icon={Gamepad2}
          iconColor="text-primary"
        />
        <StatsCard
          title="Total Score"
          value={stats.totalScore}
          icon={Trophy}
          iconColor="text-amber-400"
        />
        <StatsCard
          title="Time Spent"
          value={stats.timeSpent}
          icon={Clock}
          iconColor="text-emerald-400"
        />
        <StatsCard
          title="Day Streak"
          value={stats.streak}
          icon={Star}
          iconColor="text-primary"
        />
      </div>

      {/* Game History */}
      <div className="glass glow-border rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border/50">
          <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
          <p className="text-sm text-muted-foreground">Your game history and achievements</p>
        </div>
        <div className="p-4">
          {gameHistory.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="glass-subtle rounded-full p-4 mb-3">
                <Calendar className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-foreground font-medium">No games played yet</p>
              <p className="text-sm text-muted-foreground">
                Start playing to track your progress!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {gameHistory.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between rounded-xl glass-subtle p-4"
                >
                  <div>
                    <p className="font-medium text-foreground">{entry.gameName}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(entry.completedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {entry.score} pts
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
