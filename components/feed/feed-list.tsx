'use client'

import { ContentCard } from './content-card'
import type { ContentItem } from '@/lib/supabase'

interface FeedListProps {
  items: ContentItem[]
}

export function FeedList({ items }: FeedListProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-muted-foreground">No content available yet.</p>
        <p className="text-sm text-muted-foreground">Check back soon for new educational content!</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ContentCard key={item.id} content={item} />
      ))}
    </div>
  )
}
