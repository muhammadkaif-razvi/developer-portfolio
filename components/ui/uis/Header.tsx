import Link from "next/link";
import React from "react";
import { Button } from "../button";
import Nav from "./nav";
import MobileNav from "./MobileNav";
import { Download } from "lucide-react";

export const Header = () => {
  return (
    <header className="xl:py-8 py-4 xl:p-12  font-jetbrains-mono">
      <div className="container mx-auto flex justify-between items-center px-2">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Kaif Razvi<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* des */}
        <div className="hidden xl:flex items-center gap-10">
          <Nav />
          <Link href="/contact">
            <ButtonH text="Hire me" />
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export const ButtonH = ({ text, down }: { text: string; down?: boolean }) => {
  return (
    <Button
      className="rounded-full hover:bg-accent-hover text-[#1c1c22] cursor-pointer bg-accent"
      variant={"ghost"}
    >
      {text}
      {down && <Download className="text-xl" />}
    </Button>
  );
};
