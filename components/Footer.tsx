import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-border bg-limestone mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-serif text-ink text-sm font-medium mb-1">
            The Ordinary Pastor
          </p>
          <p className="text-mortar text-xs">
            Nick Lockwood · Perth, WA · Baptist pastor
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-mortar">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-ink transition-colors">Blog</Link>
          <Link href="/bible-talks" className="hover:text-ink transition-colors">Bible Talks</Link>
          <Link href="/prayer-letters" className="hover:text-ink transition-colors">Prayer Letters</Link>
          <Link href="/connect" className="hover:text-ink transition-colors">Let's Connect</Link>
          <Link href="/about" className="hover:text-ink transition-colors">About</Link>
          <Link href="/#prayer" className="hover:text-ink transition-colors">Partner with me in prayer &rarr;</Link>
        </nav>

        <p className="text-mortar text-xs">© {year} Nick Lockwood</p>
      </div>
    </footer>
  )
}
