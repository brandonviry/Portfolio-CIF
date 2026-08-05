import ProjectDocumentViewer from "@/components/project-document-viewer"
import { createProjectMetadata } from "@/lib/metadata"

export const metadata = createProjectMetadata({
  projectName: "Projet 7",
  projectSubject: "Application de tâches",
  path: "/projet/p7",
})

export default function Projet7Page() {
  return (
    <ProjectDocumentViewer
      projectName="Projet 7"
      projectDescription="Application de tâches"
      presentationUrl="https://docs.google.com/presentation/d/e/2PACX-1vRHOCShIEBAFYbItf2iMuQq9n3pZzXPO66Sxv1yvRSqwS04SLAQIb3q40nXPCQIj_H_vEG4gxWk3LKO/embed?start=false&loop=false&delayms=3000"
      reportUrl="https://docs.google.com/document/d/e/2PACX-1vSKuryI-guqqO73ErIxqg1rhEJNizewSU5vzEBg_FMcvl4n0YpaCu2RPFD7pNsaD2ZZDhm9Ml2AUqKD/pub?embedded=true"
    />
  )
}
