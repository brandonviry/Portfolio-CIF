import { Card } from "@/components/ui/card"

export default function ContactForm() {
  return (
    <section
      id="zoneContact"
      className="scroll-mt-16 bg-brand-bg px-6 py-24 sm:px-10 lg:px-12 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
            Contact
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-[-0.02em] text-brand-text">
            Échangeons autour des projets
          </h2>
          <p className="mt-6 max-w-[70ch] text-lg leading-relaxed text-brand-muted">
            Une question sur un projet ou sa documentation ? Vous pouvez
            m’écrire directement à l’aide du formulaire ci-dessous.
          </p>
        </div>

        <Card className="mt-12 overflow-hidden rounded-xl border-[rgba(14,165,233,0.25)] bg-brand-surface shadow-2xl">
          <iframe
            title="Formulaire de contact de Brandon VIRY"
            className="block min-h-[720px] w-full border-0 bg-brand-surface"
            src="https://tally.so/r/mD5Yqp"
            loading="lazy"
          />
        </Card>
      </div>
    </section>
  )
}
