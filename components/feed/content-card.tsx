'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {isVideo ? (
          <div className="relative h-full w-full">
            <Image
              src={content.media_url}
              alt={content.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground">
                <Play className="h-6 w-6 ml-1" />
              </div>
            </div>
          </div>
        ) : (
          <Image
            src={content.media_url}
            alt={content.title}
            fill
            className="object-cover"
          />
        )}
        <Badge
          variant="secondary"
          className="absolute right-2 top-2 capitalize"
        >
          {content.media_type}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-2 text-lg">{content.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {content.description}
        </CardDescription>
      </CardHeader>
      {content.external_link && (
        <CardContent className="pt-0">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
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
        </CardContent>
      )}
    </Card>
  )
}
