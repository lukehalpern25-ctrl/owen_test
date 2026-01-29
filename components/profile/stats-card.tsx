'use client'

import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  icon: LucideIcon
  iconColor?: string
}

export function StatsCard({ title, value, description, icon: Icon, iconColor = 'text-primary' }: StatsCardProps) {
  return (
    <div className="glass glow-border rounded-2xl p-4 transition-all duration-300 hover:glow-subtle">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {title}
        </span>
        <div className={cn('p-1.5 rounded-lg glass-subtle', iconColor)}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      {description && (
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      )}
    </div>
  )
}
