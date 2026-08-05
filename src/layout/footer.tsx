"use client"

import { ChevronUp } from "lucide-react"

import IconLink from "@/components/ui/icon_link"
import { scrollToTop } from "@/lib/scroll"

const socialLinks = [
  {
    label: "GitHub",
    icon: "/assets/img/github.png",
    href: "https://github.com/brandonviry",
  },
  {
    label: "YouTube",
    icon: "/assets/img/youtube.png",
    href: "https://www.youtube.com/@chikara9742",
  },
  {
    label: "Instagram",
    icon: "/assets/img/instagram.png",
    href: "https://www.instagram.com/virybrandon/",
  },
  {
    label: "LinkedIn",
    icon: "/assets/img/linkedin.svg",
    href: "https://www.linkedin.com/in/brandon-viry-81187b237/",
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(14,165,233,0.2)] bg-brand-bg px-6 py-10 text-brand-text sm:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-8 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
        <div>
          <p className="font-display text-xl font-bold">
            Portfolio <span className="text-brand-accent">CIF</span>
          </p>
          <p className="mt-2 text-sm text-brand-muted">
            Un parcours CIF, projet après projet
          </p>
          <p className="mt-5 text-sm text-brand-muted">
            © {currentYear} Brandon VIRY. Tous droits réservés.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 lg:items-end">
          <nav aria-label="Réseaux sociaux">
            <ul className="flex flex-wrap justify-center gap-3 lg:justify-end">
              {socialLinks.map((socialLink) => (
                <li key={socialLink.label}>
                  <IconLink
                    icon={socialLink.icon}
                    href={socialLink.href}
                    width={24}
                    height={24}
                  >
                    {socialLink.label}
                  </IconLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 self-center rounded-lg px-3 py-2 text-sm font-semibold text-brand-text transition-colors duration-200 hover:bg-brand-nav-hover hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg lg:self-auto motion-reduce:transition-none"
            onClick={scrollToTop}
          >
            Retour en haut
            <ChevronUp aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </footer>
  )
}
