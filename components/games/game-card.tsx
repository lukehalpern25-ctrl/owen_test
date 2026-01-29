'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Lock, Play } from 'lucide-react'
import type { Game } from '@/lib/supabase'
import { cn } from '@/lib/utils'

interface GameCardProps {
  game: Game
  isAvailable?: boolean
}

const difficultyColors = {
  easy: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  medium: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  hard: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
}

export function GameCard({ game, isAvailable = false }: GameCardProps) {
  return (
    <div className={cn(
      'glass glow-border group overflow-hidden rounded-2xl transition-all duration-300',
      isAvailable ? 'hover:glow-subtle cursor-pointer' : 'opacity-80'
    )}>
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={game.thumbnail_url}
          alt={game.name}
          fill
          className={cn(
            'object-cover transition-transform duration-500',
            isAvailable && 'group-hover:scale-105',
            !isAvailable && 'grayscale brightness-75'
          )}
        />
        {!isAvailable && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <div className="glass-subtle flex flex-col items-center gap-2 rounded-xl px-6 py-4 text-foreground">
              <Lock className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-lg font-semibold text-foreground">{game.name}</h3>
          <Badge
            variant="outline"
            className={cn('capitalize shrink-0 border', difficultyColors[game.difficulty])}
          >
            {game.difficulty}
          </Badge>
        </div>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {game.description}
        </p>
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="capitalize border-border/50 text-muted-foreground">
            {game.category}
          </Badge>
          <Button
            size="sm"
            disabled={!isAvailable}
            className={cn(
              'bg-primary text-primary-foreground hover:bg-primary/90 transition-all',
              isAvailable && 'glow-subtle hover:glow-orange',
              !isAvailable && 'opacity-50'
            )}
          >
            <Play className="mr-1 h-4 w-4" />
            Play
          </Button>
        </div>
      </div>
    </div>
  )
}
