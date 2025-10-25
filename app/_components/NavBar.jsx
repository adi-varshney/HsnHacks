import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/more-info", label: "FAQ" },
  { href: "/team", label: "Our Team" },
  { href: "/workshops", label: "Workshops" },
  { href: "/sponsorships", label: "Sponsors" },
];

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Image
          src="/favicon.ico"
          alt="HSN Hacks favicon"
          width={36}
          height={36}
          className="w-9 h-9 mr-2"
        />
        <div className="text-xl font-bold">HSN Hacks</div>
      </div>
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link className="hover:text-gray-400" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
