'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Track your learning progress
        </p>
      </header>

      {/* Profile Header */}
      <Card className="mb-6">
        <CardContent className="flex items-center gap-4 pt-6">
          <Avatar className="h-16 w-16">
            <AvatarImage src="" alt="Profile" />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl">
              O
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">Learner</h2>
            <p className="text-sm text-muted-foreground">
              Device ID: {deviceId.slice(0, 8)}...
            </p>
          </div>
        </CardContent>
      </Card>

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
          iconColor="text-amber-500"
        />
        <StatsCard
          title="Time Spent"
          value={stats.timeSpent}
          icon={Clock}
          iconColor="text-emerald-500"
        />
        <StatsCard
          title="Day Streak"
          value={stats.streak}
          icon={Star}
          iconColor="text-orange-500"
        />
      </div>

      {/* Game History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Activity</CardTitle>
          <CardDescription>Your game history and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          {gameHistory.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Calendar className="mb-2 h-12 w-12 text-muted-foreground/50" />
              <p className="text-muted-foreground">No games played yet</p>
              <p className="text-sm text-muted-foreground">
                Start playing to track your progress!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {gameHistory.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <p className="font-medium">{entry.gameName}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(entry.completedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge variant="secondary">
                    {entry.score} pts
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
