import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import PrayerLetterCTA from '@/components/PrayerLetterCTA'
import { getPrayerLetterBySlug, getAllPrayerLetters } from '@/lib/prayerLetters'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllPrayerLetters().map((letter) => ({ slug: letter.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const letter = getPrayerLetterBySlug(params.slug)
  if (!letter) return { title: 'Letter not found' }
  return {
    title: letter.title,
    description: letter.excerpt,
  }
}

const markdownComponents = {
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="text-ink/85 leading-[1.85] text-[1.0625rem] mb-[1.4em]">{children}</p>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-ink">{children}</strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-2 border-sapphire/40 pl-5 my-6 text-mortar italic">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sapphire hover:underline underline-offset-2"
    >
      {children}
    </a>
  ),
}

export default function PrayerLetterPage({ params }: Props) {
  const letter = getPrayerLetterBySlug(params.slug)
  if (!letter) notFound()

  return (
    <article className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <Link
        href="/prayer-letters"
        className="text-sapphire text-sm hover:underline underline-offset-2 block mb-10"
      >
        &larr; Back to prayer letters
      </Link>

      <time className="text-xs text-mortar uppercase tracking-wider block mb-4 font-sans">
        {letter!.date}
      </time>

      <h1 className="font-serif text-ink text-3xl md:text-4xl font-medium leading-tight mb-4">
        {letter!.title}
      </h1>

      <div className="w-8 h-px bg-sapphire mb-10" />

      {letter!.images && letter!.images.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-10">
          {letter!.images.map((src, i) => (
            <div
              key={src}
              className={`relative aspect-video rounded-lg overflow-hidden ${
                i === 0 && letter!.images!.length % 2 === 1 ? 'col-span-2' : ''
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="prose-custom mb-12">
        <ReactMarkdown components={markdownComponents}>{letter!.content}</ReactMarkdown>
      </div>

      <PrayerLetterCTA />

      <div className="mt-8 pt-8 border-t border-stone-border flex justify-between items-center">
        <Link
          href="/prayer-letters"
          className="text-sapphire text-sm hover:underline underline-offset-2"
        >
          &larr; Back to prayer letters
        </Link>
        <Link
          href="/connect#invite"
          className="text-mortar text-sm hover:text-ink transition-colors"
        >
          Invite me to preach &rarr;
        </Link>
      </div>
    </article>
  )
}
