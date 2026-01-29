'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Play } from 'lucide-react'
import type { ContentItem } from '@/lib/supabase'

interface ContentCardProps {
  content: ContentItem
}

export function ContentCard({ content }: ContentCardProps) {
  const isVideo = content.media_type === 'video'

  return (
    <div className="glass glow-border group overflow-hidden rounded-2xl transition-all duration-300 hover:glow-subtle">
      <div className="relative aspect-video w-full overflow-hidden">
        {isVideo ? (
          <div className="relative h-full w-full">
            <Image
              src={content.media_url}
              alt={content.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary glow-orange text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                <Play className="h-6 w-6 ml-1" />
              </div>
            </div>
          </div>
        ) : (
          <Image
            src={content.media_url}
            alt={content.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <Badge
          variant="secondary"
          className="absolute right-3 top-3 capitalize glass-subtle border-0"
        >
          {content.media_type}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="mb-1 line-clamp-2 text-lg font-semibold text-foreground">
          {content.title}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {content.description}
        </p>
        {content.external_link && (
          <Button
            variant="outline"
            size="sm"
            className="w-full border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all"
            asChild
          >
            <a
              href={content.external_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}
