'use client'

import { useState } from 'react'

const KIT_FORM_ACTION = 'https://app.kit.com/forms/9635975/subscriptions'

export default function KitSignupForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    try {
      const res = await fetch(KIT_FORM_ACTION, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <p className="text-sapphire text-sm max-w-md">
        Almost there — check your inbox to confirm your email.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input
        type="email"
        name="email_address"
        required
        placeholder="you@example.com"
        aria-label="Email address"
        className="flex-1 bg-warmwhite border border-stone-border rounded px-4 h-11 text-sm text-ink placeholder:text-mortar focus:outline-none focus:border-sapphire transition-colors"
      />
      <button
        type="submit"
        disabled={submitting}
        className="bg-sapphire text-glasslight text-sm font-medium px-6 h-11 rounded hover:opacity-90 transition-opacity shrink-0 disabled:opacity-60"
      >
        {submitting ? 'Sending…' : "I'll Pray"}
      </button>
      {error && (
        <p className="text-sm text-red-600 sm:basis-full">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  )
}
