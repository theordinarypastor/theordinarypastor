import type { Metadata } from 'next'
import PrayerLetterCard from '@/components/PrayerLetterCard'
import PrayerLetterCTA from '@/components/PrayerLetterCTA'
import { getAllPrayerLetters } from '@/lib/prayerLetters'

export const metadata: Metadata = {
  title: 'Prayer Letters',
  description:
    'Monthly prayer letters from Nick Lockwood — what he\'s thinking about, and what to pray for.',
}

export default function PrayerLettersPage() {
  const letters = getAllPrayerLetters()

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-serif text-ink text-3xl md:text-4xl font-medium mb-2">
        Prayer Letters
      </h1>
      <div className="w-8 h-px bg-sapphire mb-6" />
      <p className="text-mortar text-lg leading-relaxed mb-10 max-w-2xl">
        Each month I send a short letter — what I&apos;m thinking about, what to pray for. Past
        letters are archived here.
      </p>

      {letters.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {letters.map((letter) => (
            <PrayerLetterCard key={letter.slug} letter={letter} />
          ))}
        </div>
      ) : (
        <p className="text-mortar text-sm mb-12">No letters archived yet — check back soon.</p>
      )}

      <PrayerLetterCTA />
    </div>
  )
}
