import { ArrowLeft, ExternalLink, FileText, Presentation } from "lucide-react"
import Link from "next/link"

interface ProjectDocumentViewerProps {
  projectName: string
  projectDescription: string
  presentationUrl: string
  reportUrl: string
}

interface DocumentPanelProps {
  title: string
  description: string
  url: string
  type: "presentation" | "report"
}

function DocumentPanel({ title, description, url, type }: DocumentPanelProps) {
  const Icon = type === "presentation" ? Presentation : FileText

  return (
    <section className="overflow-hidden rounded-xl border border-[rgba(14,165,233,0.25)] bg-brand-surface shadow-2xl">
      <div className="flex flex-col gap-4 border-b border-[rgba(14,165,233,0.2)] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 rounded-lg bg-[rgba(14,165,233,0.1)] p-2 text-brand-accent">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-display text-xl font-semibold text-brand-text">
              {title}
            </h2>
            <p className="mt-1 text-sm text-brand-muted">{description}</p>
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-brand-accent px-4 py-2 text-sm font-semibold text-brand-accent transition-colors duration-200 hover:bg-[rgba(14,165,233,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-text focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface motion-reduce:transition-none sm:self-auto"
        >
          Ouvrir séparément
          <ExternalLink aria-hidden="true" className="h-4 w-4" />
          <span className="sr-only">dans un nouvel onglet</span>
        </a>
      </div>

      <iframe
        src={url}
        title={`${title} — ${description}`}
        className="block h-[65vh] min-h-[520px] w-full border-0 bg-brand-bg"
        loading="lazy"
        allowFullScreen={type === "presentation"}
      />
    </section>
  )
}

export default function ProjectDocumentViewer({
  projectName,
  projectDescription,
  presentationUrl,
  reportUrl,
}: ProjectDocumentViewerProps) {
  return (
    <div className="min-h-screen bg-brand-bg px-6 pb-24 pt-28 sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <Link
          href="/#galerie"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-brand-muted transition-colors duration-200 hover:bg-brand-nav-hover hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent motion-reduce:transition-none"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Retour aux projets
        </Link>

        <header className="mt-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
            Documentation du projet
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-[-0.02em] text-brand-text">
            {projectName}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-muted">
            {projectDescription}
          </p>
          <p className="mt-4 max-w-[70ch] text-base leading-relaxed text-brand-text">
            Cette page réunit le support présenté pendant le projet et le rapport
            qui documente son contexte, sa réalisation et son bilan.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <DocumentPanel
            title="Support de présentation"
            description={`Présentation associée au ${projectName.toLowerCase()}`}
            url={presentationUrl}
            type="presentation"
          />
          <DocumentPanel
            title="Rapport du projet"
            description={`Compte rendu associé au ${projectName.toLowerCase()}`}
            url={reportUrl}
            type="report"
          />
        </div>
      </div>
    </div>
  )
}
