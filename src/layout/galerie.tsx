import { ArrowUpRight, Clock3, FileText } from "lucide-react"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import projects from "@/data/projects.json"

interface GalerieData {
  id: string
  name: string
  img: string
  url: string
  desc: string
}

export default function Galerie() {
  const data: GalerieData[] = projects

  return (
    <section
      id="galerie"
      className="scroll-mt-16 bg-brand-bg px-6 py-24 sm:px-10 lg:px-12 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
            Réalisations
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-[-0.02em] text-brand-text">
            Les projets de la formation
          </h2>
          <p className="mt-6 max-w-[70ch] text-lg leading-relaxed text-brand-muted">
            Sélectionnez un projet pour consulter sa documentation, son support
            de présentation ou le compte rendu associé.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {data.map((project) => {
            const isAvailable = project.url !== "#"
            const isExternal = /^https?:\/\//.test(project.url)

            const card = (
              <Card className="h-full overflow-hidden border-[rgba(14,165,233,0.25)] bg-brand-surface shadow-lg transition-shadow duration-300 group-hover:shadow-[0_18px_50px_rgba(14,165,233,0.14)] motion-reduce:transition-none">
                <CardContent className="relative aspect-video overflow-hidden p-0">
                  <Image
                    src={project.img}
                    alt={`Aperçu du ${project.name}`}
                    fill
                    sizes="(min-width: 1280px) 420px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[rgba(23,23,23,0.7)] via-transparent to-transparent"
                  />
                </CardContent>

                <CardHeader className="flex min-h-44 flex-col p-6">
                  <CardTitle className="font-display text-2xl font-semibold leading-tight text-brand-text">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-2 text-sm leading-relaxed text-brand-muted">
                    {project.desc}
                  </CardDescription>

                  <span
                    className={`mt-auto flex items-center gap-2 pt-6 text-sm font-semibold ${
                      isAvailable ? "text-brand-accent" : "text-brand-muted"
                    }`}
                  >
                    {isAvailable ? (
                      <>
                        <FileText aria-hidden="true" className="h-4 w-4" />
                        Consulter la documentation
                        {isExternal && (
                          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                        )}
                      </>
                    ) : (
                      <>
                        <Clock3 aria-hidden="true" className="h-4 w-4" />
                        Documentation à venir
                      </>
                    )}
                  </span>
                </CardHeader>
              </Card>
            )

            return isAvailable ? (
              <a
                id={project.id}
                key={project.id}
                href={project.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 focus-visible:ring-offset-brand-bg motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
              >
                {card}
                {isExternal && (
                  <span className="sr-only">S’ouvre dans un nouvel onglet</span>
                )}
              </a>
            ) : (
              <div
                id={project.id}
                key={project.id}
                className="group rounded-lg opacity-70"
                aria-disabled="true"
              >
                {card}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
