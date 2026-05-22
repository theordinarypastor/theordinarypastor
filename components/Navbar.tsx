'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/blog', label: 'Blog' },
  { href: '/bible-talks', label: 'Bible Talks' },
  { href: '/connect', label: "Let's Connect" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-limestone border-b border-stone-border sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-ink text-[15px] font-medium tracking-tight hover:opacity-75 transition-opacity"
        >
          The Ordinary Pastor
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname.startsWith(href)
                  ? 'text-ink font-medium'
                  : 'text-mortar hover:text-ink'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/connect#invite"
            className="bg-sapphire text-glasslight text-sm px-4 py-2 rounded hover:opacity-90 transition-opacity"
          >
            Invite me to preach
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-mortar p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-stone-border bg-limestone px-6 py-5 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-mortar text-sm"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/connect#invite"
            className="bg-sapphire text-glasslight text-sm px-4 py-2.5 rounded text-center mt-1"
            onClick={() => setOpen(false)}
          >
            Invite me to preach
          </Link>
        </div>
      )}
    </nav>
  )
}
