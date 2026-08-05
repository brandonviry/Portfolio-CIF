const reportContents = [
  {
    number: "01",
    name: "Le contexte",
    description: "Le sujet du projet, son objectif et la situation de départ.",
  },
  {
    number: "02",
    name: "Le point de départ",
    description: "Les consignes, ressources et éléments mis à disposition.",
  },
  {
    number: "03",
    name: "La réalisation",
    description: "La démarche suivie et ce que j’ai produit pour le projet.",
  },
  {
    number: "04",
    name: "Le bilan",
    description: "Le résultat obtenu et les enseignements que j’en retiens.",
  },
]

export default function Presentation() {
  return (
    <section
      id="presentation"
      className="scroll-mt-16 bg-brand-bg px-6 py-24 sm:px-10 lg:px-12 lg:py-32"
    >
      <article className="mx-auto grid w-full max-w-[1400px] items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="flex justify-center lg:col-span-5">
          <div
            className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-[rgba(14,165,233,0.25)] bg-brand-surface shadow-2xl"
            role="img"
            aria-label="Monogramme BV de Brandon VIRY"
          >
            <div
              aria-hidden="true"
              className="absolute -left-16 top-12 h-48 w-48 rounded-full bg-brand-violet opacity-20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -right-16 bottom-12 h-48 w-48 rounded-full bg-brand-magenta opacity-[0.15] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-6 rounded-lg border border-[rgba(245,245,245,0.08)]"
            />
            <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
              <span className="font-display text-[clamp(5rem,14vw,9rem)] font-bold leading-none tracking-[-0.08em] text-brand-text">
                B<span className="text-brand-accent">V</span>
              </span>
              <span className="mt-6 h-px w-16 bg-brand-accent" aria-hidden="true" />
              <span className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted">
                Parcours CIF
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
            À propos
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-[-0.02em] text-brand-text">
            Chaque projet raconte ce qui a été fait.
          </h2>
          <div className="mt-8 max-w-[70ch] space-y-5 text-lg leading-relaxed text-brand-text">
            <p>
              Je suis Brandon VIRY. Ce portfolio rassemble les projets réalisés
              dans le cadre de ma formation CIF et permet de suivre les
              compétences transversales travaillées pendant le parcours.
            </p>
            <p className="text-brand-muted">
              Selon le projet, le lien ouvre directement son rapport ou une page
              réunissant le support de présentation et le compte rendu associé.
            </p>
          </div>

          <dl
            className="mt-10 grid gap-x-8 sm:grid-cols-2"
            aria-label="Contenu des rapports de projet"
          >
            {reportContents.map((item) => (
              <div
                key={item.name}
                className="border-t border-[rgba(14,165,233,0.25)] py-5"
              >
                <dt className="flex items-baseline gap-3 font-display text-lg font-semibold text-brand-text">
                  <span className="text-sm text-brand-accent">{item.number}</span>
                  {item.name}
                </dt>
                <dd className="mt-2 pl-8 text-sm leading-relaxed text-brand-muted">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 border-l-2 border-brand-accent pl-5 text-lg font-medium leading-relaxed text-brand-text">
            La galerie ci-dessous constitue le point d’entrée vers ces projets et
            leur documentation.
          </p>
        </div>
      </article>
    </section>
  )
}
