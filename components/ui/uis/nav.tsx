"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "services",
    href: "/services",
  },
  {
    name: "resume",
    href: "/resume",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="space-x-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={` hover:text-accent-hover ${
              link.href === pathname &&
              "text-accent hover:text-accent-hover border-b-2 border-accent hover:border-accent-hover transition-all"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
