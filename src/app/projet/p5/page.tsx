import ProjectDocumentViewer from "@/components/project-document-viewer"
import { createProjectMetadata } from "@/lib/metadata"

export const metadata = createProjectMetadata({
  projectName: "Projet 5",
  projectSubject: "Outils de sauvegarde",
  path: "/projet/p5",
})

export default function Projet5Page() {
  return (
    <ProjectDocumentViewer
      projectName="Projet 5"
      projectDescription="Outils de sauvegarde"
      presentationUrl="https://docs.google.com/presentation/d/e/2PACX-1vSqaOhBYOu1YMO3WmxIrfdOJ2u8agE7jkCDI1KYF25jED1jTXQVEBtGcW4zfIXjw7-vsO1FtVOC-0Mx/embed?start=false&loop=false&delayms=3000"
      reportUrl="https://docs.google.com/document/d/e/2PACX-1vSjf2fJ8wfh2-YCi0xTcGAVvtzwocPNT0Tb6YmpjGEDnBleT6_Id2mntTsE_hK6cOsXqC8zt6TSn1Mt/pub?embedded=true"
    />
  )
}
