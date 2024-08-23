import Navbar from "@/components/ui/navbar";
import Image from "next/image";

const header = () => {
  return (
    <header >
    
    <Navbar
        links={[
          { label: "Accueil", url: "/" },
          { label: "Présentation", url: "#presentation" },
          { label: "Projets", url: "#galerie" },
          { label: "Contact", url: "#zoneContact" },
        ]}
      />
    </header>
  );
}
export default header;