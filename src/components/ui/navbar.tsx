"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface NavbarProps {
  links: { label: string; url: string }[]
}

export default function Navbar({ links }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(14,165,233,0.2)] bg-brand-bg text-brand-text shadow-lg"
      aria-label="Navigation principale"
    >
      <div className="mx-auto flex min-h-16 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link
          href="/#bienvenue"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
          aria-label="Portfolio CIF de Brandon VIRY — Accueil"
          onClick={closeMenu}
        >
          <span className="font-display text-xl font-bold text-brand-text sm:hidden">
            B<span className="text-brand-accent">V</span>
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg font-bold text-brand-text">
              Portfolio <span className="text-brand-accent">CIF</span>
            </span>
            <span className="mt-1 text-xs font-semibold tracking-[0.14em] text-brand-muted">
              Brandon VIRY
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="rounded-lg p-2 text-brand-text transition-colors hover:bg-brand-nav-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg sm:hidden"
          aria-controls="navigation-mobile"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>

        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className="block rounded-lg px-4 py-3 font-semibold transition-colors hover:bg-brand-nav-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul
        id="navigation-mobile"
        className={`${isMenuOpen ? "flex" : "hidden"} flex-col border-t border-[rgba(14,165,233,0.2)] px-4 pb-4 pt-2 sm:hidden`}
      >
        {links.map((link) => (
          <li key={link.url}>
            <Link
              href={link.url}
              className="block rounded-lg px-4 py-3 font-semibold transition-colors hover:bg-brand-nav-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
