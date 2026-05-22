import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Nick Lockwood is a Baptist pastor, preacher, and writer based in Perth, Western Australia — committed to ordinary faithfulness, Christ-centred preaching, and the long work of ministry.',
  openGraph: {
    title: 'About Nick Lockwood — The Ordinary Pastor',
    description:
      'Pastor, preacher, and ordinary follower of Jesus. Reformed in theology, shaped by the great tradition, and convinced that faithfulness — not fame — is what God asks of most of us.',
  },
}

export default function AboutPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-serif text-ink text-3xl md:text-4xl font-medium mb-2">About</h1>
      <div className="w-8 h-px bg-sapphire mb-10" />

      <div className="space-y-5">
        <p className="text-lg text-mortar leading-relaxed">
          I&apos;m Nick Lockwood — a Baptist pastor, preacher, and writer based in Perth,
          Western Australia.
        </p>

        <p className="text-ink/85 leading-[1.85] text-[1.0625rem]">
          I&apos;ve spent more than two decades in ministry — from leading a church plant in
          outer-suburban Perth, to seven years as Priest in Charge of an Anglican parish in
          Willetton, to my current work in Baptist pastoral ministry. Across those different
          contexts, the calling has stayed the same: help ordinary people hear the gospel clearly,
          and help the local church be faithful in the place where it&apos;s been planted.
        </p>

        <p className="text-ink/85 leading-[1.85] text-[1.0625rem]">
          I hold a BA in Theology from Murdoch University and am currently completing a Graduate
          Certificate in Divinity at Morling College, under the supervision of Dr David Starling.
          I completed Arrow Leadership&apos;s two-year Emerging Leaders Programme and the Tree of
          Life Programme in Christian Spirituality and Spiritual Direction — formation experiences
          that deepened my conviction that ministry is as much about who we&apos;re becoming as
          what we&apos;re doing.
        </p>

        <p className="text-ink/85 leading-[1.85] text-[1.0625rem]">
          I&apos;m reformed in my theology, shaped by the patristic tradition and the great cloud
          of witnesses, and convinced that Christ-centred preaching and prayer are the engine room
          of everything. I love expository preaching that takes the text seriously and the
          congregation seriously — and I love the ordinary rhythms of ministry that don&apos;t
          make the news: the conversations after church, the prayers before a hard week, the small
          faithfulnesses that only God sees.
        </p>

        <p className="text-ink/85 leading-[1.85] text-[1.0625rem]">
          The name <em>The Ordinary Pastor</em> comes from a conviction I keep returning to: that
          faithfulness, not fame, is what God asks of most of us. I write for pastors and church
          people who feel the weight of that ordinariness — and want to hold it well.
        </p>

        <p className="text-ink/85 leading-[1.85] text-[1.0625rem]">
          I&apos;m married to Katherine, and we have two daughters, Elizabeth and Aliyah.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/connect#invite"
          className="bg-sapphire text-glasslight text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity text-center"
        >
          Invite me to preach
        </Link>
        <a
          href="mailto:lockwood.nicholas@gmail.com"
          className="border border-stone-border text-ink text-sm px-6 py-3 rounded hover:border-sapphire/40 transition-colors text-center"
        >
          Get in touch
        </a>
      </div>
    </article>
  )
}
