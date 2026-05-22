import Link from 'next/link'

export const metadata = {
  title: 'Bible Talks | The Ordinary Pastor',
  description: 'Sermons and Bible talks by Nick Lockwood — expository preaching for ordinary people.',
}

const talks = [
  {
    youtubeId: 'E6kufZ9c8M8',
    title: 'Thank God it\'s Friday: Good Friday',
    scripture: 'Matthew 27:31b–56',
    description: 'A Good Friday sermon on the cross — what happened there, and why it changes everything.',
    tag: 'Good Friday',
    url: 'https://www.youtube.com/watch?v=E6kufZ9c8M8',
  },
  {
    youtubeId: 'GugO80hjxsI',
    title: 'Weakness is the Way Jesus Does Evangelism',
    scripture: 'John 4',
    description: 'On the woman at the well, honest conversations, and why our weakness is actually our greatest evangelistic asset.',
    tag: 'Evangelism',
    url: 'https://www.youtube.com/watch?v=GugO80hjxsI',
  },
  {
    youtubeId: 'S_dsPeZ9hAU',
    title: 'Faithful God of the Poor',
    scripture: 'Amos 4–5',
    description: 'A prophetic sermon on the God who sides with the poor — and what that means for his people.',
    tag: 'Old Testament',
    url: 'https://www.youtube.com/watch?v=S_dsPeZ9hAU',
  },
  {
    youtubeId: 'Q4qndVVsBV0',
    title: 'Rahab and the Spies',
    scripture: 'Joshua 2',
    description: 'An Old Testament narrative sermon on faith, risk, and the surprising grace of God toward outsiders.',
    tag: 'Old Testament',
    url: 'https://www.youtube.com/watch?v=Q4qndVVsBV0',
  },
  {
    youtubeId: 'HxV1yASUYCM',
    title: 'The God Who Loves His Betrayers',
    scripture: 'John 13',
    description: 'A 10-minute Lenten reflection on the God who loved Judas all the way to the cross — and what that love asks of us.',
    tag: 'Lent',
    url: 'https://www.youtube.com/watch?v=HxV1yASUYCM',
  },
]

export default function BibleTalksPage() {
  return (
    <main className="min-h-screen bg-warmwhite">
      {/* Header */}
      <section className="bg-limestone border-b border-stone-border py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-mortar mb-3">
            Bible Talks
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink mb-5">
            Preaching from the ordinary pulpit
          </h1>
          <p className="text-lg text-mortar leading-relaxed max-w-xl">
            Expository sermons for ordinary people — working through Scripture with care, honesty, and a deep belief that the text has something to say to us today.
          </p>
        </div>
      </section>

      {/* Talks Grid */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {talks.map((talk) => (
            <a
              key={talk.title}
              href={talk.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-stone-border rounded-lg overflow-hidden hover:border-sapphire/40 hover:shadow-md transition-all duration-200"
            >
              {/* Thumbnail */}
              {talk.youtubeId ? (
                <div className="relative aspect-video bg-nave overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${talk.youtubeId}/hqdefault.jpg`}
                    alt={talk.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-sapphire/90 flex items-center justify-center shadow-lg group-hover:bg-sapphire transition-colors duration-200">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video bg-nave flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-14 h-14 rounded-full bg-sapphire/80 flex items-center justify-center mx-auto mb-3 group-hover:bg-sapphire transition-colors duration-200">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-glasslight/70 text-sm">Watch at Carey Church</p>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium tracking-wide uppercase bg-glasslight text-sapphire px-2 py-1 rounded">
                    {talk.tag}
                  </span>
                  {talk.scripture && (
                    <span className="text-xs text-mortar font-medium">{talk.scripture}</span>
                  )}
                </div>
                <h2 className="font-serif text-xl text-ink mb-2 group-hover:text-sapphire transition-colors duration-200">
                  {talk.title}
                </h2>
                <p className="text-sm text-mortar leading-relaxed">
                  {talk.description}
                </p>
                <p className="mt-4 text-sm font-medium text-sapphire group-hover:underline">
                  Watch sermon →
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Invite CTA */}
      <section className="bg-limestone border-t border-stone-border py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl text-ink mb-3">Want to hear more?</h2>
          <p className="text-mortar mb-6">
            I'm available to preach at your church, conference, or event. Get in touch and let's talk about it.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-sapphire text-white font-medium px-6 py-3 rounded hover:bg-nave transition-colors duration-200"
          >
            Invite me to preach
          </Link>
        </div>
      </section>
    </main>
  )
}
