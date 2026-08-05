import { ArrowLeft, FolderSearch } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-brand-bg px-6 pb-20 pt-28 sm:px-10 lg:px-12">
      <div className="w-full max-w-2xl rounded-xl border border-[rgba(14,165,233,0.25)] bg-brand-surface p-8 text-center shadow-2xl sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(14,165,233,0.1)] text-brand-accent">
          <FolderSearch aria-hidden="true" className="h-7 w-7" />
        </span>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
          Erreur 404
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-none text-brand-text">
          Cette page reste introuvable.
        </h1>
        <p className="mx-auto mt-6 max-w-[60ch] text-base leading-relaxed text-brand-muted sm:text-lg">
          L’adresse est peut-être incorrecte ou la ressource a été déplacée.
          Revenez à la galerie pour poursuivre la consultation des projets.
        </p>

        <Link
          href="/#galerie"
          className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-accent px-5 py-3 font-bold text-brand-bg transition duration-200 hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-text focus-visible:ring-offset-4 focus-visible:ring-offset-brand-bg motion-reduce:transition-none"
        >
          <ArrowLeft aria-hidden="true" className="h-5 w-5" />
          Retour aux projets
        </Link>
      </div>
    </section>
  )
}
