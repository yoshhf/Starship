"use client";
import React, { use, useState } from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import { ThameSwitchBtn } from "./ThameSwitchBtn";
import { Ghost, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import LogoMobile from "./logo";

function Navbar() {
  return (
    <>
      <DekstopNavbar />
      <MobileNavbar />
    </>
  );
}

const items = [
  { name: "Dashboard", href: "/" },
  { name: "Transactions", href: "/transactions" },
  { name: "Manage", href: "/manage" },
  { name: "Tasks", href: "/tasks" },
];

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block bg-background shadow-sm md:hidden">
      <nav className="container flex items-center justify-between px-4 py-3">
        {/* Left Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[280px] sm:w-[340px]" side="left">
            <div className="flex items-center justify-center py-6">
              <Logo />
            </div>
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <NavbarItem
                  key={item.name}
                  link={item.href}
                  name={item.name}
                  clickCallback={() => setIsOpen((prev) => !prev)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Right Side */}
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <LogoMobile />
        </div>
        <div className="flex items-center gap-2">
          <ThameSwitchBtn />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </div>
  );
}

function NavbarItem({
  link,
  name,
  clickCallback,
}: {
  link: string;
  name: string;
  clickCallback?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-start text-lg text-muted-foreground hover:text-foreground", // ✅ kasih rounded
          isActive && "bg-accent text-foreground" // ✅ kasih jarak kanan-kiri
        )}
        onClick={() => {
          if (clickCallback) clickCallback();
        }}
      >
        {name}
      </Link>

      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden  h-[2px] w-[80%] -translate-x-1/2  bg-foreground rounded-xl md:block" />
      )}
    </div>
  );
}

function DekstopNavbar() {
  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <Logo />
          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItem key={item.name} link={item.href} name={item.name} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThameSwitchBtn />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
