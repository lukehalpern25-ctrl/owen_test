'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Gamepad2, User, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/feed', label: 'Feed', icon: BookOpen },
  { href: '/games', label: 'Games', icon: Gamepad2 },
  { href: '/profile', label: 'Profile', icon: User },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md">
      <div className="glass glow-border rounded-2xl px-2 py-3">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative flex flex-col items-center gap-1 rounded-xl px-4 py-2 text-xs font-medium transition-all duration-300',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-primary/10 glow-subtle" />
                )}
                <item.icon className={cn(
                  'relative h-5 w-5 transition-transform duration-300',
                  isActive && 'stroke-[2.5px] scale-110'
                )} />
                <span className="relative">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
