import Link from 'next/link'
import type { Post } from '@/lib/posts'

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="border border-stone-border rounded bg-limestone p-5 h-full flex flex-col hover:border-sapphire/40 transition-colors duration-200">
        <time className="text-xs text-mortar uppercase tracking-wider block mb-2">
          {post.date}
        </time>
        <h3 className="font-serif text-ink text-base font-medium leading-snug mb-2 group-hover:text-sapphire transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-mortar text-sm leading-relaxed flex-1">{post.excerpt}</p>
        {post.tag && (
          <span className="inline-block mt-4 text-xs px-2.5 py-1 bg-glasslight text-sapphire rounded-full self-start">
            {post.tag}
          </span>
        )}
      </article>
    </Link>
  )
}
