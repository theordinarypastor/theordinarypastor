export interface PrayerLetter {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  images?: string[]
}

export const prayerLetters: PrayerLetter[] = [
  {
    slug: 'what-were-praying-for-japan',
    title: "What We're Praying For",
    date: '31 Jul 2026',
    excerpt:
      "Back from a month with family in Japan, praying through a ministry transition, Kat's ongoing treatment, and asking for peace as we wait on the Lord.",
    images: [
      '/prayer-letter-japan-1.jpg',
      '/prayer-letter-japan-2.jpg',
      '/prayer-letter-japan-3.jpg',
    ],
    content: `Hi friends,

It's been a month since I wrote from the departure lounge on my way to Japan — here's where things are at now that we're back.

**Giving thanks**

It was a really great time of connection across our broader family, sixteen of us in all, with Mum and Dad hosting. I did take my bike, though, and caught the Bullet Train out of town for some beautiful rides. Visiting the home — and martyrdom site — of Christianity in Japan was deeply moving; grateful for their witness, and for the ongoing witness of those who literally gave their lives for Jesus. The extraordinary story of the trip: I struck up a conversation with an older guy from the USA, and it turned out his niece not only lives in Perth, but lives just up the road from us in Canning Vale — and had just started coming to Carey Baptist Church! Getting to see her at church on the Sunday we were back was such a joy. Most of my family aren't followers of Jesus, so I was grateful for the opportunity to connect deeply with some of them. Please pray that the seeds sown might bear fruit.

Kat's also been able to continue treatment for the time being, and there were no major issues whilst I was away so we're thankful for that too.

**Prayer requests**

Now that I've finished up at Carey and am only there one day a week, please pray for wisdom as I talk with people about next steps in ministry — there are a number of conversations happening, and I want to walk into the right one, not just the next one. Please also pray for the Carey team as they adjust to my being there so much less.

I've been sick since I got back, and am worried I've gotten Kat sick with chemo coming up next week — please pray for her, that she doesn't get it! And for me, for a swift recovery and energy to get properly underway on a research project I need to complete on The Compassion of Christ and the Sin of Empathy.

I'm preaching fortnightly at different churches at the moment, while staying rooted at Carey. This week I'm at The Billabong (Uniting), preaching on Psalm 146 — Becoming More Like Jesus in Our Praise. It's likely the very Psalm Jesus and the disciples sang at the Passover meal before heading out to Gethsemane in Matthew 26:30 — talk about praise in the darkness. Then Narrogin Baptist on the 30th. Pray for spiritual wisdom and insight to preach pastorally into each congregation.

On a practical note: our income's dropped with this transition, and while we're thankful to have savings to draw on and to invest in this season of waiting well, it's also a faith thing — so we'd ask you to pray for us, for peace and confidence in the Lord as we wait upon him.

> "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." — Phil 4:6–7

*In the ordinary,*

*Nicholas*`,
  },
]

export function getPrayerLetterBySlug(slug: string): PrayerLetter | undefined {
  return prayerLetters.find((p) => p.slug === slug)
}

export function getAllPrayerLetters(): PrayerLetter[] {
  return prayerLetters
}
