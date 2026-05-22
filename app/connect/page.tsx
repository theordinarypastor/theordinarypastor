import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Let's Connect",
  description:
    'Get in touch with Nick Lockwood — for preaching invitations, speaking enquiries, or general conversation.',
}

export default function ConnectPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-serif text-ink text-3xl md:text-4xl font-medium mb-2">
        Let&apos;s Connect
      </h1>
      <div className="w-8 h-px bg-sapphire mb-10" />

      <p className="text-mortar text-lg leading-relaxed mb-10">
        Whether you&apos;d like me to preach at your church, speak at an event, or just have a
        conversation — I&apos;d love to hear from you.
      </p>

      <div className="space-y-5">
        {/* Preaching invitation */}
        <div
          id="invite"
          className="border border-stone-border rounded-lg p-6 md:p-8 bg-warmwhite scroll-mt-24"
        >
          <h2 className="font-serif text-ink text-xl font-medium mb-3">
            Invite me to preach
          </h2>
          <p className="text-mortar text-sm leading-relaxed mb-6">
            I&apos;m available to preach at churches, conferences, camps, and other ministry
            events. I preach expository, Christ-centred sermons from across the whole Bible,
            suited to the congregation you&apos;re serving. I&apos;m based in Perth, WA, but
            available to travel.
          </p>
          <a
            href="mailto:lockwood.nicholas@gmail.com?subject=Preaching%20Invitation"
            className="bg-sapphire text-glasslight text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity inline-block"
          >
            Send a preaching invitation
          </a>
        </div>

        {/* General enquiries */}
        <div className="border border-stone-border rounded-lg p-6 md:p-8 bg-warmwhite">
          <h2 className="font-serif text-ink text-xl font-medium mb-3">
            General enquiries
          </h2>
          <p className="text-mortar text-sm leading-relaxed mb-5">
            For questions about the blog, ministry conversations, or anything else — feel free to
            reach out directly.
          </p>
          <a
            href="mailto:lockwood.nicholas@gmail.com"
            className="text-sapphire text-sm hover:underline underline-offset-2"
          >
            lockwood.nicholas@gmail.com &rarr;
          </a>
        </div>

        {/* AFES placeholder — uncomment when needed */}
        {/*
        <div className="border border-stone-border rounded-lg p-6 md:p-8 bg-warmwhite">
          <h2 className="font-serif text-ink text-xl font-medium mb-3">
            Support my ministry
          </h2>
          <p className="text-mortar text-sm leading-relaxed mb-5">
            I serve with AFES — Australian Fellowship of Evangelical Students. If you&apos;d like
            to partner with me financially, you can do so here.
          </p>
          <a
            href="#"
            className="bg-sapphire text-glasslight text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity inline-block"
          >
            Become a missions partner
          </a>
        </div>
        */}
      </div>
    </div>
  )
}
