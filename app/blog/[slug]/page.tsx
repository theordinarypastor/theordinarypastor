import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug, getAllPosts } from '@/lib/posts'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const paragraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <article className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <Link
        href="/blog"
        className="text-sapphire text-sm hover:underline underline-offset-2 block mb-10"
      >
        &larr; Back to blog
      </Link>

      <time className="text-xs text-mortar uppercase tracking-wider block mb-4 font-sans">
        {post.date}
      </time>

      <h1 className="font-serif text-ink text-3xl md:text-4xl font-medium leading-tight mb-4">
        {post.title}
      </h1>

      {post.tag && (
        <span className="inline-block mb-6 text-xs px-2.5 py-1 bg-glasslight text-sapphire rounded-full">
          {post.tag}
        </span>
      )}

      <div className="w-8 h-px bg-sapphire mb-10" />

      <div className="prose-custom">
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="text-ink/85 leading-[1.85] text-[1.0625rem] mb-[1.4em]">{children}</p>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-ink">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic">{children}</em>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 border-sapphire/40 pl-5 my-6 text-mortar italic">
                {children}
              </blockquote>
            ),
            a: ({ href, children }) => (
              <a href={href} className="text-sapphire hover:underline underline-offset-2">
                {children}
              </a>
            ),
          }}
        >
          {post!.content}
        </ReactMarkdown>
      </div>

      <div className="mt-16 pt-8 border-t border-stone-border flex justify-between items-center">
        <Link
          href="/blog"
          className="text-sapphire text-sm hover:underline underline-offset-2"
        >
          &larr; Back to blog
        </Link>
        <Link
          href="/connect#invite"
          className="text-mortar text-sm hover:text-ink transition-colors"
        >
          Invite me to preach &rarr;
        </Link>
      </div>
    </article>
  )
}
