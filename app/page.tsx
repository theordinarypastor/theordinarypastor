import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PostCard from '@/components/PostCard'
import PrayerSignup from '@/components/PrayerSignup'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: { absolute: 'The Ordinary Pastor — Nick Lockwood' },
  description:
    'Nick Lockwood — Baptist pastor, preacher, and writer based in Perth, WA. Writing on ministry, ordinary faithfulness, and what it means to follow Jesus in the small things.',
  openGraph: {
    title: 'The Ordinary Pastor — Nick Lockwood',
    description:
      'Ordinary people. Extraordinary God. Writing on ministry, the Christian life, and faithful preaching from Perth, WA.',
  },
}

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero — full-bleed background image */}
      <section className="relative border-b border-stone-border overflow-hidden">
        <Image
          src="/clay-jars-hero2.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle dark scrim so text sits cleanly on the image */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-6 font-sans">
            Nick Lockwood &middot; Perth, WA
          </p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-medium leading-tight mb-5 max-w-xl">
            Ordinary people. Extraordinary God.
          </h1>
          <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Pastor, preacher, mentor and ordinary follower of Jesus.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <Link
              href="/connect"
              className="bg-sapphire text-glasslight text-sm font-medium px-6 py-3 rounded hover:opacity-90 transition-opacity text-center"
            >
              Let&rsquo;s Connect
            </Link>
            <Link
              href="/bible-talks"
              className="border border-white/40 text-white text-sm px-6 py-3 rounded hover:border-white/70 transition-colors text-center"
            >
              Bible Talks
            </Link>
            <Link
              href="/blog"
              className="border border-white/40 text-white text-sm px-6 py-3 rounded hover:border-white/70 transition-colors text-center"
            >
              Blog
            </Link>
            <Link
              href="/connect#invite"
              className="border border-white/40 text-white text-sm px-6 py-3 rounded hover:border-white/70 transition-colors text-center"
            >
              Invite me to preach
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-warmwhite border-b border-stone-border py-14 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 items-start">
          <span className="w-16 h-16 rounded-full shrink-0 overflow-hidden ring-2 ring-sapphire">
            <Image
              src="/headshot.jpg"
              alt="Nick Lockwood"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </span>
          <div>
            <p className="text-xs uppercase tracking-widest text-mortar font-sans mb-3">
              About the author
            </p>
            <p className="text-ink/85 leading-[1.85] text-[1.0625rem] mb-4 max-w-xl">
              I&apos;m Nick — a once Anglican, now Baptist pastor in Perth, shaped by the
              evangelical tradition and convinced that ordinary, knocked-around jars of clay are
              the kind of people God enjoys, and enjoys working through. I&apos;m all for pastors and
              people who want to be&hellip; ordinary. Walking with the God of the extraordinary.
            </p>
            <Link
              href="/connect"
              className="text-sapphire text-sm hover:underline underline-offset-2"
            >
              Let&rsquo;s Connect &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Prayer partnership signup */}
      <PrayerSignup />

      {/* Recent posts */}
      <section className="bg-warmwhite py-14 px-6 border-b border-stone-border">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 items-start">
          <span className="w-16 h-16 rounded-full shrink-0 overflow-hidden ring-2 ring-sapphire">
            <Image
              src="/writing_2_sapphire.png"
              alt=""
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </span>
          <div className="flex-1">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-serif text-ink text-xl font-medium">Recent writing</h2>
              <Link
                href="/blog"
                className="text-sapphire text-sm hover:underline underline-offset-2"
              >
                All posts &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />
    </>
  )
}
