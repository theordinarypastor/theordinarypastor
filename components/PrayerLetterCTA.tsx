import KitSignupForm from './KitSignupForm'

export default function PrayerLetterCTA() {
  return (
    <div className="border border-stone-border rounded-lg p-6 md:p-8 bg-warmwhite">
      <h2 className="font-serif text-ink text-lg font-medium mb-3">
        Want this delivered straight to your inbox?
      </h2>
      <p className="text-mortar text-sm leading-relaxed mb-5">
        Each month I send a short prayer letter — what we&apos;re thankful for, what to pray for.
      </p>
      <KitSignupForm />
    </div>
  )
}
