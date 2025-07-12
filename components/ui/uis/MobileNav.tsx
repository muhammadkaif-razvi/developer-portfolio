"use client";

import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRightIcon } from "lucide-react";
import Link from "next/link";



import { Button } from "../button";

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
const MobileNav = () => {
  const pathneme = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <AlignRightIcon className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <div className=" mb-8 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Kaif Razvi <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8 text-2xl">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className={`hover:text-accent-hover ${
                  link.href === pathneme &&
                  "text-accent hover:text-accent-hover border-b-2 border-accent hover:border-accent-hover transition-all"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
