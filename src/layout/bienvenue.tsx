"use client"

import { ArrowRight, ChevronDown, Mail } from "lucide-react"

import { scrollToElementById } from "@/lib/scroll"

export default function Bienvenue() {
  return (
    <section
      id="bienvenue"
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-brand-bg px-6 pb-20 pt-28 sm:px-10 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="brand-retro-grid absolute inset-0 -z-20 bg-cover bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(25,25,25,0.52)_0%,rgba(25,25,25,0.72)_55%,rgba(25,25,25,0.96)_100%)]"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="brand-hero-reveal text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent sm:text-base">
          Formation CIF · Compétences transversales
        </p>

        <h1 className="brand-hero-reveal brand-hero-delay-1 mt-6 font-display text-[clamp(3rem,8vw,5rem)] font-bold leading-[0.95] tracking-[-0.025em] text-brand-hero">
          <span className="block">Portfolio CIF</span>
          <span className="mt-3 block text-[0.42em] font-semibold tracking-[0.08em] text-brand-accent">
            Brandon VIRY
          </span>
        </h1>

        <p className="brand-hero-reveal brand-hero-delay-2 mt-8 font-display text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-tight text-brand-text">
          Un parcours CIF, projet après projet
        </p>

        <p className="brand-hero-reveal brand-hero-delay-3 mt-6 max-w-[70ch] text-base leading-relaxed text-brand-text sm:text-lg lg:text-xl">
          Je documente les projets réalisés pendant ma formation CIF et les
          compétences transversales développées tout au long de ce parcours.
        </p>

        <div className="brand-hero-reveal brand-hero-delay-4 mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-accent px-5 py-3 font-bold text-brand-bg transition duration-200 hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-text focus-visible:ring-offset-4 focus-visible:ring-offset-brand-bg"
            onClick={() => scrollToElementById("galerie")}
          >
            Explorer les projets
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-brand-accent bg-transparent px-5 py-3 font-bold text-brand-accent transition duration-200 hover:bg-[rgba(14,165,233,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-text focus-visible:ring-offset-4 focus-visible:ring-offset-brand-bg"
            onClick={() => scrollToElementById("zoneContact")}
          >
            <Mail aria-hidden="true" className="h-5 w-5" />
            Me contacter
          </button>
        </div>
      </div>

      <button
        type="button"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-brand-hero transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        onClick={() => scrollToElementById("presentation")}
        aria-label="Voir la présentation"
      >
        <span>Présentation</span>
        <ChevronDown aria-hidden="true" className="h-6 w-6" strokeWidth={2} />
      </button>
    </section>
  )
}
