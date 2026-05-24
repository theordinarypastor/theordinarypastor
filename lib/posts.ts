export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tag?: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'how-does-god-feel-about-you',
    title: 'How does God feel about you?',
    date: '24 May 2026',
    excerpt:
      'Do you reckon God feels proud of you? A question I hadn\'t considered possible — until a young man prayed it over me.',
    tag: 'Pastoral',
    content: `**Do you reckon God feels proud of you?**

There's a quote often misattributed to C.S. Lewis that goes: "There's one thing more important than what we think of God, and that is what God thinks of us." And whether Lewis said it or not, I certainly think it's true. But I wonder if we could also say that *there's something more important than how we feel about God, and that's how God feels about us.*

What got me wondering about this? It was a disturbing experience I had while teaching our [RISE Theology and Ministry](https://www.careychurch.asn.au/rise/) students a while back.

In our pastoral care unit, we help our people through the process of empathetic listening. They have a feelings wheel in hand, and as they hear a story shared in pairs, they notice how they're feeling — then ask the person sharing if it was how they felt, in order to test their hunch. They then look for a moment in the life of Jesus when he might have felt something similar.\\*

We had an odd number of people that day, so I partnered with one of our young adults — and before I could get things started he said, "You share!"

So I reflected on walking into the office of the team I lead at church earlier that day. As I got closer I could see all my interns, staff, and some volunteer leaders were laughing and having a great time. I'd been on leave following my wife's recent cancer diagnosis, so hadn't been around for a couple of weeks. But before I could finish the story, the young man opposite me said with real sympathy: "Oh… bro, you felt really sad because you were missing out. I'm sorry."

I paused, a little confused. I wasn't feeling that way at all. So I asked him what had come up for him, and he said, "It just reminded me of being at school. I never really had any friends, so I always felt left out and alone at lunch times and stuff while people were all enjoying themselves together."

My heart went out for him, and I said, "No… when I saw them all there after being off for a few weeks, I just felt so proud of them all. Of the culture of fun we'd fostered, of the community God had formed…"

Quick as a flash he interrupted: "Oh! Wow! That's awesome! *So do you feel like God is proud of you?*"

It was my turn to pause, a little confused.

Did I feel like God was proud of me? Of my character, my marriage, my family, the way I pursued friendship and accountability and prayer? Did I feel like God was proud of the work I'd done with my team and the culture we'd built together with Jesus at the centre?

I had to be honest — it had never once crossed my mind that my Father in Heaven would be proud of me. For anything.\\*\\* So I sat with it, and we went looking for a moment in the Gospels when Jesus felt proud of his disciples. Long story short, we found one, and then he prayed for me. It was a simple prayer for something I'd not considered possible:

*"Father, thank you that you and Jesus are so proud of Nick. Thanks for all he's done and taught us about yourself, he's really blessed us and definitely changed my life. Please help him know how proud you are of him, by your Spirit. In Jesus' name, Amen."*

The Lord was gracious enough to answer it.

So here's the question I'm wondering about for you: *Do you think God feels proud of you?*

In *any* part of your life? Even if it's not *every* part of it?

I wonder if that's worth sitting with for a moment?

---

*In the ordinary,*

*Nicholas*

---

\\* As the saying goes: "That which is most personal is most universal, and what's most universal is most personal."

\\*\\* There's a lot to say about my own earthly father, but that's for another time!`,
  },
  {
    slug: 'on-preaching-to-ordinary-people',
    title: 'Watch this space.',
    date: '28 Apr 2026',
    excerpt: 'This post is on its way — check back in a couple of days.',
    tag: 'Preaching',
    content: `This post is on its way — check back in a couple of days.`,
  },
  {
    slug: 'why-i-stopped-trying-to-be-inspiring',
    title: 'Watch this space.',
    date: '14 Apr 2026',
    excerpt: 'This post is on its way — check back in a couple of days.',
    tag: 'Pastoral',
    content: `This post is on its way — check back in a couple of days.`,
  },
  {
    slug: 'the-gift-of-unfinished-work',
    title: 'Watch this space.',
    date: '31 Mar 2026',
    excerpt: 'This post is on its way — check back in a couple of days.',
    tag: 'Ministry',
    content: `This post is on its way — check back in a couple of days.`,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllPosts(): Post[] {
  return posts
}
