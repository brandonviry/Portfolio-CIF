import Link from "next/link";


interface NavbarProps { 
  links: { label: string; url: string }[]; // Typage plus explicite
}

export default function Navbar({ links }: NavbarProps) { // Nom du composant en majuscule
  return (
    <nav className="text-white bg-[#191919] shadow-md fixed top-0 left-0 right-0 z-50 flex flex-row justify-center items-center">
      <ul className="flex flex-row justify-center items-center">
        {links.map((link, index) => (
          <li className="px-4 py-4 hover:bg-gray-800 hover:text-white" key={index}>
            <Link href={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
