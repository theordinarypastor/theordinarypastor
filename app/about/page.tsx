import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Nick Lockwood is a Baptist pastor based in Harrisdale, Western Australia. Writing on ministry, ordinary faithfulness, and the Christian life.',
}

export default function AboutPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-serif text-ink text-3xl md:text-4xl font-medium mb-2">About</h1>
      <div className="w-8 h-px bg-sapphire mb-10" />

      <div className="space-y-5">
        <p className="text-lg text-mortar leading-relaxed">
          I&apos;m Nick Lockwood — a Baptist pastor based in Harrisdale, Western Australia.
        </p>

        <p className="text-ink/85 leading-[1.85] text-[1.0625rem]">
          I currently serve as a pastor at Carey Baptist Church in Harrisdale, where I oversee
          youth and young adult ministry, contribute to leadership development, and walk alongside
          people in the ordinary rhythms of Christian life. Before this, I served in Anglican
          parish ministry, with a focus on the formation of lay leaders and the health of
          congregational life.
        </p>

        <p className="text-ink/85 leading-[1.85] text-[1.0625rem]">
          I&apos;m accredited with Baptist Churches Western Australia, hold a Certificate IV in
          Ministry and Theology, and am passionate about helping people — especially those in
          ministry — to know Christ more deeply and serve him more faithfully.
        </p>

        <p className="text-ink/85 leading-[1.85] text-[1.0625rem]">
          The name <em>The Ordinary Pastor</em> comes from a conviction I keep returning to: that
          faithfulness, not fame, is what God asks of most of us. The Scriptures are full of
          ordinary people doing ordinary things in the strength that God provides — and somehow,
          the kingdom advances. I write for pastors and church people who feel the weight of that
          ordinariness and want to hold it well.
        </p>

        <p className="text-ink/85 leading-[1.85] text-[1.0625rem]">
          I&apos;m reformed in my theology, shaped by the patristic authors and the great
          tradition of the church, and convinced that Christ-centred preaching and prayer are the
          engine room of everything. I love good liturgy, honest conversation, and the kind of
          ministry that doesn&apos;t make the news.
        </p>

        <p className="text-ink/85 leading-[1.85] text-[1.0625rem]">
          If you&apos;d like me to preach at your church or speak at an event, I&apos;d love to
          hear from you.
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
          href="mailto:nicholas.lockwood@careychurch.asn.au"
          className="border border-stone-border text-ink text-sm px-6 py-3 rounded hover:border-sapphire/40 transition-colors text-center"
        >
          Get in touch
        </a>
      </div>
    </article>
  )
}
