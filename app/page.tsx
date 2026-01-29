import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Gamepad2, BookOpen, Sparkles } from 'lucide-react'

export default function CoverPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Hero Section */}
      <div className="relative mb-8">
        {/* Glow effect behind pumpkin */}
        <div className="absolute inset-0 blur-3xl bg-primary/30 rounded-full scale-75" />

        {/* Pumpkin Image */}
        <div className="relative glow-orange rounded-full">
          <Image
            src="/pumpkin.jpeg"
            alt="Welcome Pumpkin"
            width={280}
            height={280}
            className="relative z-10 drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 gradient-text">
        Owen Test
      </h1>

      <p className="text-muted-foreground text-center text-lg mb-8 max-w-md">
        Learn, play, and grow with fun educational content and games
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <Button
          asChild
          size="lg"
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 glow-subtle hover:glow-orange transition-all"
        >
          <Link href="/feed">
            <BookOpen className="mr-2 h-5 w-5" />
            Explore Feed
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="flex-1 border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all"
        >
          <Link href="/games">
            <Gamepad2 className="mr-2 h-5 w-5" />
            Play Games
          </Link>
        </Button>
      </div>

      {/* Feature highlights */}
      <div className="mt-12 grid grid-cols-3 gap-6 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <div className="glass-subtle rounded-full p-3 mb-2">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xs text-muted-foreground">Learn</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="glass-subtle rounded-full p-3 mb-2">
            <Gamepad2 className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xs text-muted-foreground">Play</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="glass-subtle rounded-full p-3 mb-2">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xs text-muted-foreground">Grow</span>
        </div>
      </div>
    </div>
  )
}
