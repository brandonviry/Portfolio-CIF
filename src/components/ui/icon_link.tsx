import Link from "next/link";
import Image from "next/image";

interface IconLinkProps {
  icon: string;
  href: string;
  children: string;
  width: number;
  height: number;
}

const IconLink = ({ icon, href, children, width, height }: IconLinkProps) => {
  return (
    <Link href={href} className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
      <Image src={icon} alt={children} width={width} height={height} className="h-6 w-6" />
    </Link>
  );
};

export default IconLink;
