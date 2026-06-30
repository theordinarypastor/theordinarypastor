'use client'

import Image from 'next/image'

export default function PrayerSignup() {
  return (
    <section id="prayer" className="bg-limestone border-b border-stone-border py-14 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 items-start">
        <span className="w-16 h-16 rounded-full shrink-0 overflow-hidden ring-2 ring-sapphire">
          <Image
            src="/prayer_2_sapphire.png"
            alt=""
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </span>
        <div>
          <p className="text-xs uppercase tracking-widest text-mortar font-sans mb-3">
            Prayer partnership
          </p>
          <h2 className="font-serif text-ink text-xl font-medium mb-4">
            Would you like to partner with me in prayer?
          </h2>
          <p className="text-ink/85 leading-[1.85] text-[1.0625rem] mb-7 max-w-md">
            Each month I send a short letter — what I&apos;m thinking about, what to pray for. And
            if there&apos;s ever something I can be praying for you too, just reply to any letter
            and let me know.
          </p>

          {/* Placeholder form — swap for the Kit embed once the form ID is ready */}
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              aria-label="Email address"
              className="flex-1 bg-warmwhite border border-stone-border rounded px-4 h-11 text-sm text-ink placeholder:text-mortar focus:outline-none focus:border-sapphire transition-colors"
            />
            <button
              type="submit"
              className="bg-sapphire text-glasslight text-sm font-medium px-6 h-11 rounded hover:opacity-90 transition-opacity shrink-0"
            >
              I&apos;ll Pray
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
