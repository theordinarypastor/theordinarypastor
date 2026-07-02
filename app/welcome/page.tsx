import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "You're In",
  robots: { index: false, follow: false },
}

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-limestone flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-ink text-3xl md:text-4xl font-medium mb-6">
          You&apos;re in.
        </h1>
        <p className="text-mortar leading-relaxed mb-10">
          I&apos;m genuinely glad you&apos;re here. Expect a letter from me once a month that&apos;s
          honest, ordinary and worth reading. And if there&apos;s ever something I can be praying
          for you, just hit reply on any letter and let me know.
        </p>
        <Link href="/" className="text-sapphire text-sm hover:underline underline-offset-2">
          &larr; Back to the site
        </Link>
      </div>
    </div>
  )
}
