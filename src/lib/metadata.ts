import type { Metadata } from "next"

const openGraphImage = {
  url: "/assets/brand/open-graph-portfolio.png",
  width: 1728,
  height: 910,
  alt: "Portfolio CIF de Brandon VIRY — Un parcours CIF, projet après projet",
}

interface ProjectMetadataOptions {
  projectName: string
  projectSubject: string
  path: `/projet/${string}`
}

export function createProjectMetadata({
  projectName,
  projectSubject,
  path,
}: ProjectMetadataOptions): Metadata {
  const title = `${projectName} — ${projectSubject}`
  const description = `Consultez le support de présentation et le rapport associés au ${projectName.toLowerCase()} : ${projectSubject}.`

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: path,
      siteName: "Portfolio CIF | Brandon VIRY",
      title: `${title} | Portfolio CIF`,
      description,
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Portfolio CIF`,
      description,
      images: [openGraphImage.url],
    },
  }
}

export { openGraphImage }
