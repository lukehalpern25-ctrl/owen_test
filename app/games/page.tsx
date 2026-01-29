import { GameCard } from '@/components/games/game-card'
import type { Game } from '@/lib/supabase'

// Placeholder games for testing (will be replaced with Supabase data)
const placeholderGames: Game[] = [
  {
    id: '1',
    name: 'Math Quest',
    description: 'Solve math puzzles to unlock treasure chests and defeat monsters!',
    thumbnail_url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=450&fit=crop',
    difficulty: 'easy',
    category: 'math',
  },
  {
    id: '2',
    name: 'Word Wizard',
    description: 'Build vocabulary and spelling skills through magical word challenges.',
    thumbnail_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=450&fit=crop',
    difficulty: 'medium',
    category: 'language',
  },
  {
    id: '3',
    name: 'Science Explorer',
    description: 'Conduct virtual experiments and discover scientific principles.',
    thumbnail_url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=450&fit=crop',
    difficulty: 'medium',
    category: 'science',
  },
  {
    id: '4',
    name: 'History Challenge',
    description: 'Test your knowledge of world history in this exciting trivia game.',
    thumbnail_url: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&h=450&fit=crop',
    difficulty: 'hard',
    category: 'history',
  },
  {
    id: '5',
    name: 'Geography Adventures',
    description: 'Explore the world and learn about countries, capitals, and landmarks.',
    thumbnail_url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=450&fit=crop',
    difficulty: 'easy',
    category: 'geography',
  },
  {
    id: '6',
    name: 'Logic Puzzles',
    description: 'Sharpen your critical thinking with challenging logic puzzles.',
    thumbnail_url: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=450&fit=crop',
    difficulty: 'hard',
    category: 'logic',
  },
]

export default function GamesPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Games</h1>
        <p className="text-muted-foreground">
          Learn while having fun with educational games
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderGames.map((game) => (
          <GameCard key={game.id} game={game} isAvailable={false} />
        ))}
      </div>
    </div>
  )
}
