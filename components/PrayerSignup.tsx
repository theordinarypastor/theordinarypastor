'use client'

import Image from 'next/image'
import KitSignupForm from './KitSignupForm'

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

          <KitSignupForm />
        </div>
      </div>
    </section>
  )
}
