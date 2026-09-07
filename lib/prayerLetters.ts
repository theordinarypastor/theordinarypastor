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
    slug: 'the-fathers-heart',
    title: "The Father's Heart",
    date: '7 Sep 2026',
    excerpt:
      "Preaching on the Father's heart at Narrogin and Parkerville, a new teaching role at Vocational Bible College, and continuing to pray through Kat's treatment and the road ahead in ministry.",
    images: ['/prayer-letter-sept-garden.jpg'],
    content: `Hi friends,

It's been a full few weeks since the last letter.

**Giving thanks**

Aliyah wrapped up her work in Canada and is now on a road trip before heading home. We're thankful for the opportunity she's had, and asking for safety as she travels.

The Perth Gospel Partnership's Annual Conference on Mystery was a real gift, opening my mind and heart to wonder in a way I wasn't expecting.

Preaching at Narrogin Baptist was deeply moving, hearing them pray for their own church and community in the early morning before worship.

Then Father's Day at [Parkerville Baptist](https://youtu.be/OBgpgjUh0oE) was harder and more moving than I thought it would be, as we spent some time with Paul and Timothy, exploring the Father's heart amidst our father-wounds.

![Preaching at Parkerville Baptist on Father's Day](/prayer-letter-sept-preaching.jpg)

And between it all, I've been enjoying time in the garden. Good for the soul; and just this morning our Splendid Fairy Wren (Djer-Djer) arrived back in our garden.

![The view from our window, lavender in bloom](/prayer-letter-sept-window.jpg)

![Our dog keeping watch on the porch](/prayer-letter-sept-dog.jpg)

I've started a half-day-a-week teaching Worldviews and World Religions for [Vocational Bible College](https://www.vbc.edu.au/), and it's been a privilege, especially as a few of the students work for Voice of the Martyrs in Korea. I'm trying hard not to fanboy over them, as praying for persecuted believers each day has been a long-time practice for me. If you don't already know Voice of the Martyrs, I'd genuinely commend their [app](https://www.persecution.com/app/) to you.

Kat's last round of treatment was pretty rough, but we're thankful it's only a six-monthly one, as we've now passed the halfway mark for this round of chemo.

![Kat mid-treatment, still smiling](/prayer-letter-sept-kat.jpg)

**Prayer requests**

Job conversations are moving forward intentionally, but slowly, and I'm trusting that God will keep meeting needs and guiding us through. We'd love to stay connected to Carey, which does narrow which other roles make sense, though it's an honour being approached (if a little exhausting!). A couple of strong possibilities are still being explored, so please pray for patience to not rush ahead of God in it.

Please pray for the Youth and RISE team at Carey, that they'd stay healthy while the demands on them stay high.

Kat and I would appreciate prayer as we keep walking through treatment; medical fatigue is really present to us now.

My research project (The Compassion of Christ and the Sin of Empathy) is falling behind and it's genuinely hard going, so please pray for self-discipline!

A few Sundays coming up I'd love your prayer and thanks for:

- 13th: home at Carey
- 20th: Vasse, Church 242 (a colleague from my Arrow Leadership days)
- 27th: back to Narrogin
- 4th October: Carey Forrestdale
- Early October: a short trip to India for Rise

**A closing thought**

I keep coming back to 2 Timothy 2:4, where a soldier's aim is to please the one who enlisted him. The gracious truth that I can please him in this season is a real joy to my soul, and keeps me persevering. So I praise him for this opportunity.

![Kat and me](/prayer-letter-sept-couple.jpg)

*In the ordinary,*

*Nicholas*`,
  },
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
