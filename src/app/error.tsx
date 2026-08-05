"use client"

import { AlertCircle, ArrowLeft, RotateCcw } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Une erreur est survenue :", error.message)
  }, [error])

  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-brand-bg px-6 pb-20 pt-28 sm:px-10 lg:px-12">
      <div className="w-full max-w-2xl rounded-xl border border-red-500/35 bg-brand-surface p-8 text-center shadow-2xl sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-red-400">
          <AlertCircle aria-hidden="true" className="h-7 w-7" />
        </span>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-red-400">
          Erreur inattendue
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-none text-brand-text">
          La page n’a pas pu être chargée.
        </h1>
        <p className="mx-auto mt-6 max-w-[60ch] text-base leading-relaxed text-brand-muted sm:text-lg">
          Un problème temporaire est survenu. Vous pouvez réessayer ou revenir à
          la page d’accueil.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-accent px-5 py-3 font-bold text-brand-bg transition duration-200 hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-text focus-visible:ring-offset-4 focus-visible:ring-offset-brand-bg motion-reduce:transition-none"
          >
            <RotateCcw aria-hidden="true" className="h-5 w-5" />
            Réessayer
          </button>
          <Link
            href="/#bienvenue"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-brand-accent px-5 py-3 font-bold text-brand-accent transition-colors duration-200 hover:bg-[rgba(14,165,233,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-text focus-visible:ring-offset-4 focus-visible:ring-offset-brand-bg motion-reduce:transition-none"
          >
            <ArrowLeft aria-hidden="true" className="h-5 w-5" />
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </section>
  )
}
