import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bible Talks',
  description: 'Recorded sermons and Bible talks from Nick Lockwood — coming soon via Spotify.',
}

export default function BibleTalksPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-serif text-ink text-3xl md:text-4xl font-medium mb-2">
        Bible Talks
      </h1>
      <div className="w-8 h-px bg-sapphire mb-10" />

      <p className="text-mortar text-lg leading-relaxed mb-10">
        Recorded sermons and Bible talks will be available here soon. I&apos;m setting up a
        podcast so past preaching is easy to find and listen to wherever you are.
      </p>

      {/* Spotify placeholder — replace with actual embed when ready */}
      <div className="border border-stone-border rounded-lg p-10 bg-warmwhite text-center mb-8">
        <div className="w-12 h-12 bg-glasslight rounded-full flex items-center justify-center mx-auto mb-4">
          {/* Spotify-style icon placeholder */}
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-sapphire fill-current">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </div>
        <p className="font-serif text-ink text-xl mb-2">Coming soon</p>
        <p className="text-mortar text-sm leading-relaxed max-w-sm mx-auto mb-6">
          A Spotify podcast with past preaching is on the way. In the meantime, get in touch if
          you&apos;d like to request a particular talk or sermon series.
        </p>
        <a
          href="mailto:nicholas.lockwood@careychurch.asn.au?subject=Recording request"
          className="inline-block text-sapphire text-sm hover:underline underline-offset-2"
        >
          Request a recording &rarr;
        </a>
      </div>

      {/* Invite CTA */}
      <div className="border-t border-stone-border pt-8">
        <p className="text-mortar text-sm mb-4">
          Want to hear Nick preach in person? Invite him to your church.
        </p>
        <Link
          href="/connect#invite"
          className="bg-sapphire text-glasslight text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity inline-block"
        >
          Invite me to preach
        </Link>
      </div>
    </div>
  )
}
