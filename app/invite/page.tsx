'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function InvitePage() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const res = await fetch('https://formspree.io/f/mojbwdwr', {
      method: 'POST',
      body: new FormData(e.currentTarget),
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      setSubmitted(true)
    } else {
      setError(true)
    }
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-limestone flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="font-serif text-ink text-3xl md:text-4xl font-medium mb-4">
            Thank you!
          </h1>
          <p className="text-mortar leading-relaxed mb-8">
            Your invitation has been received. I&apos;ll be in touch as soon as I can.
          </p>
          <Link href="/blog" className="text-sapphire text-sm hover:underline underline-offset-2">
            Read the blog &rarr;
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-limestone">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/connect"
          className="text-sapphire text-sm hover:underline underline-offset-2 inline-block mb-10"
        >
          &larr; Back
        </Link>

        <h1 className="font-serif text-ink text-3xl md:text-4xl font-medium mb-2">
          Invite me to preach
        </h1>
        <div className="w-8 h-px bg-sapphire mb-6" />
        <p className="text-mortar leading-relaxed mb-10">
          Fill in the details below and I&apos;ll get back to you as soon as I can.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-stone-border rounded px-4 py-2.5 text-sm text-ink bg-warmwhite focus:outline-none focus:border-sapphire/60 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Church or organisation
            </label>
            <input
              type="text"
              name="church_or_organisation"
              required
              className="w-full border border-stone-border rounded px-4 py-2.5 text-sm text-ink bg-warmwhite focus:outline-none focus:border-sapphire/60 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Location
            </label>
            <input
              type="text"
              name="location"
              required
              className="w-full border border-stone-border rounded px-4 py-2.5 text-sm text-ink bg-warmwhite focus:outline-none focus:border-sapphire/60 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Proposed date(s)
            </label>
            <input
              type="text"
              name="proposed_dates"
              placeholder="e.g. 15 June 2025, or flexible"
              className="w-full border border-stone-border rounded px-4 py-2.5 text-sm text-ink bg-warmwhite placeholder:text-mortar/50 focus:outline-none focus:border-sapphire/60 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Type of event
            </label>
            <select
              name="event_type"
              required
              defaultValue=""
              className="w-full border border-stone-border rounded px-4 py-2.5 text-sm text-ink bg-warmwhite focus:outline-none focus:border-sapphire/60 transition-colors"
            >
              <option value="" disabled>Select…</option>
              <option value="Sunday service">Sunday service</option>
              <option value="Conference">Conference</option>
              <option value="Camp">Camp</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Tell me about your congregation
            </label>
            <textarea
              name="congregation_details"
              rows={5}
              className="w-full border border-stone-border rounded px-4 py-2.5 text-sm text-ink bg-warmwhite focus:outline-none focus:border-sapphire/60 transition-colors resize-y"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Contact email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-stone-border rounded px-4 py-2.5 text-sm text-ink bg-warmwhite focus:outline-none focus:border-sapphire/60 transition-colors"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">
              Something went wrong — please try again or email lockwood.nicholas@gmail.com directly.
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="bg-sapphire text-glasslight text-sm font-medium px-6 py-3 rounded hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {submitting ? 'Sending…' : 'Send invitation'}
          </button>
        </form>
      </div>
    </div>
  )
}
