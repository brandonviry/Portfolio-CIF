import ProjectDocumentViewer from "@/components/project-document-viewer"
import { createProjectMetadata } from "@/lib/metadata"

export const metadata = createProjectMetadata({
  projectName: "Projet 4",
  projectSubject: "Recherche Simplon",
  path: "/projet/p4",
})

export default function Projet4Page() {
  return (
    <ProjectDocumentViewer
      projectName="Projet 4"
      projectDescription="Recherche Simplon"
      presentationUrl="https://docs.google.com/presentation/d/e/2PACX-1vQi0ooEMVoLuAK-MfL9ZU2zsVLWCQ3-0lsQZ00WcbzcDeSYOeQARGDQR-ropTO14_ihoNb70RUqoShx/embed?start=false&loop=false&delayms=3000"
      reportUrl="https://docs.google.com/document/d/e/2PACX-1vRFAmoqCQy7ld2Qa9JzCivqr-9fbyEGISA4bM1I9TqeJzFrPAPIEWiThTFQlMDmd9ZVb8FScwwVtgVs/pub?embedded=true"
    />
  )
}
