import Image from "next/image"
import Link from "next/link"

interface IconLinkProps {
  icon: string
  href: string
  children: string
  width: number
  height: number
}

export default function IconLink({
  icon,
  href,
  children,
  width,
  height,
}: IconLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent bg-brand-surface transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(14,165,233,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} — ouvrir dans un nouvel onglet`}
    >
      <Image
        src={icon}
        alt=""
        width={width}
        height={height}
        className="h-6 w-6 object-contain opacity-80 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none"
      />
    </Link>
  )
}
