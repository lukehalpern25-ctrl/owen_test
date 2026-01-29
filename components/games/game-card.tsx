'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
  easy: 'bg-emerald-100 text-emerald-700',
  medium: 'bg-amber-100 text-amber-700',
  hard: 'bg-rose-100 text-rose-700',
}

export function GameCard({ game, isAvailable = false }: GameCardProps) {
  return (
    <Card className={cn(
      'overflow-hidden transition-all',
      isAvailable ? 'hover:shadow-lg cursor-pointer' : 'opacity-75'
    )}>
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={game.thumbnail_url}
          alt={game.name}
          fill
          className={cn('object-cover', !isAvailable && 'grayscale')}
        />
        {!isAvailable && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="flex flex-col items-center gap-2 text-white">
              <Lock className="h-8 w-8" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-1 text-lg">{game.name}</CardTitle>
          <Badge
            variant="secondary"
            className={cn('capitalize shrink-0', difficultyColors[game.difficulty])}
          >
            {game.difficulty}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">
          {game.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="capitalize">
            {game.category}
          </Badge>
          <Button
            size="sm"
            disabled={!isAvailable}
            className={cn(!isAvailable && 'opacity-50')}
          >
            <Play className="mr-1 h-4 w-4" />
            Play
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
