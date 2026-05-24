'use client'

import { useState, useEffect, useCallback } from 'react'

interface Testimonial {
  quote: string
  name: string
  church: string
  location: string
}

// Replace these placeholders with real quotes from your pastor friends
const testimonials: Testimonial[] = [
  {
    quote:
      'Nick brings genuine warmth and theological depth to every pulpit he visits. Our congregation was genuinely fed — the kind of preaching that stays with you.',
    name: '[Pastor Name]',
    church: '[Church Name]',
    location: 'Sydney',
  },
  {
    quote:
      "One of the most honest, unflashy preachers I know. Nick doesn't try to impress — he just opens the Word faithfully, and God does the rest.",
    name: '[Pastor Name]',
    church: '[Church Name]',
    location: 'Melbourne',
  },
  {
    quote:
      "We've had Nick preach at our church twice now and would have him back in a heartbeat. He has a rare gift for making the gospel feel both ancient and completely alive.",
    name: '[Pastor Name]',
    church: '[Church Name]',
    location: 'Brisbane',
  },
  {
    quote:
      'Nick preaches with conviction and gentleness in equal measure. He clearly loves the people he\'s preaching to — and it shows.',
    name: '[Pastor Name]',
    church: '[Church Name]',
    location: 'Adelaide',
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  const goTo = useCallback((index: number) => {
    setVisible(false)
    setTimeout(() => {
      setCurrent(index)
      setVisible(true)
    }, 350)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % testimonials.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [current, goTo])

  const t = testimonials[current]

  return (
    <section className="bg-nave py-16 md:py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-8 h-px bg-sapphire mx-auto mb-12" />

        <button
          onClick={() => goTo((current + 1) % testimonials.length)}
          className="w-full text-left cursor-pointer group transition-opacity duration-300 focus:outline-none"
          style={{ opacity: visible ? 1 : 0, minHeight: '140px' }}
          aria-label="Next testimonial"
        >
          <blockquote className="font-serif text-glasslight text-lg md:text-xl leading-relaxed italic mb-6 group-hover:text-white transition-colors duration-200">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p className="text-[#7A8EA8] text-sm tracking-wide group-hover:text-[#a0b4c8] transition-colors duration-200">
            &mdash; {t.name}, {t.church}, {t.location}
          </p>
        </button>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-10" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                i === current ? 'bg-sapphire' : 'bg-sapphire/25 hover:bg-sapphire/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
