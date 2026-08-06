import Link from 'next/link'
import Image from 'next/image'
import type { PrayerLetter } from '@/lib/prayerLetters'

export default function PrayerLetterCard({ letter }: { letter: PrayerLetter }) {
  return (
    <Link href={`/prayer-letters/${letter.slug}`} className="group block h-full">
      <article className="border border-stone-border rounded bg-limestone overflow-hidden h-full flex flex-col hover:border-sapphire/40 transition-colors duration-200">
        {letter.images && letter.images.length > 0 && (
          <div className="relative aspect-video">
            <Image src={letter.images[0]} alt="" fill className="object-cover" />
          </div>
        )}
        <div className="p-5 flex flex-col flex-1">
          <time className="text-xs text-mortar uppercase tracking-wider block mb-2">
            {letter.date}
          </time>
          <h3 className="font-serif text-ink text-base font-medium leading-snug mb-2 group-hover:text-sapphire transition-colors duration-200">
            {letter.title}
          </h3>
          <p className="text-mortar text-sm leading-relaxed flex-1">{letter.excerpt}</p>
        </div>
      </article>
    </Link>
  )
}
