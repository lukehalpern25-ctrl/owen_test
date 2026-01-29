import { FeedList } from '@/components/feed/feed-list'
import type { ContentItem } from '@/lib/supabase'

// Placeholder content for testing (will be replaced with Supabase data)
const placeholderContent: ContentItem[] = [
  {
    id: '1',
    title: 'Introduction to Science',
    description: 'Discover the fascinating world of science through interactive experiments and demonstrations.',
    media_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
    media_type: 'image',
    external_link: 'https://example.com/science',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Math Made Fun',
    description: 'Learn mathematics through engaging puzzles and real-world applications.',
    media_url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop',
    media_type: 'video',
    external_link: 'https://example.com/math',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Creative Writing Workshop',
    description: 'Express yourself through stories, poems, and creative narratives.',
    media_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=450&fit=crop',
    media_type: 'image',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'History Adventures',
    description: 'Travel back in time and explore important historical events and figures.',
    media_url: 'https://images.unsplash.com/photo-1461360370896-922624d12a74?w=800&h=450&fit=crop',
    media_type: 'video',
    external_link: 'https://example.com/history',
    created_at: new Date().toISOString(),
  },
]

export default function FeedPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight gradient-text">Discover</h1>
        <p className="text-muted-foreground mt-1">
          Explore educational content tailored for you
        </p>
      </header>
      <FeedList items={placeholderContent} />
    </div>
  )
}
