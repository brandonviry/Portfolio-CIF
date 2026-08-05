import Navbar from "@/components/ui/navbar"

const navigationLinks = [
  { label: "Accueil", url: "/#bienvenue" },
  { label: "Présentation", url: "/#presentation" },
  { label: "Projets", url: "/#galerie" },
  { label: "Contact", url: "/#zoneContact" },
]

const Header = () => {
  return (
    <header>
      <Navbar links={navigationLinks} />
    </header>
  )
}

export default Header
