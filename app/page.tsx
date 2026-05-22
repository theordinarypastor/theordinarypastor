import Link from 'next/link'
import PostCard from '@/components/PostCard'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { getAllPosts } from '@/lib/posts'

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-limestone border-b border-stone-border">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="text-mortar text-xs uppercase tracking-widest mb-6 font-sans">
            Nick Lockwood &middot; Perth, WA
          </p>
          <h1 className="font-serif text-ink text-4xl md:text-5xl font-medium leading-tight mb-5 max-w-xl">
            Ordinary people. Extraordinary God.
          </h1>
          <p className="text-mortar text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Pastor, preacher, and ordinary follower of Jesus. Writing on ministry,
            the Christian life, and what it means to be faithful in the small things.
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
              className="border border-stone-border text-ink text-sm px-6 py-3 rounded hover:border-sapphire/40 transition-colors text-center"
            >
              Bible Talks
            </Link>
            <Link
              href="/blog"
              className="border border-stone-border text-ink text-sm px-6 py-3 rounded hover:border-sapphire/40 transition-colors text-center"
            >
              Blog
            </Link>
            <Link
              href="/connect#invite"
              className="border border-stone-border text-ink text-sm px-6 py-3 rounded hover:border-sapphire/40 transition-colors text-center"
            >
              Invite me to preach
            </Link>
          </div>
        </div>
      </section>

      {/* Recent posts */}
      <section className="bg-warmwhite py-14 px-6 border-b border-stone-border">
        <div className="max-w-4xl mx-auto">
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
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />
    </>
  )
}
