"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Discover",
      href: "/discover",
      icon: Compass,
    },
    {
      name: "Back to Main",
      href: "https://reyhanadr.com",
      icon: ArrowUpRight,
      external: true,
    },
  ];

  
  return (
    <header
      className={cn(
        "top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "fixed bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "fixed bg-background/50 backdrop-blur-sm "
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 rounded-full from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="relative w-6 h-6">
                <Image
                  src="/trademark/iconR.svg"
                  alt="Music App Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <span className="font-medium text-xl">
              Nandavdl Music
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                asChild
                variant="ghost"
                className={cn(
                  "relative group h-11 px-4 rounded-full font-medium transition-all duration-200",
                  pathname === item.href
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                )}
              >
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2"
                >
                  <item.icon
                    className={cn(
                      "h-4 w-4 transition-transform",
                      item.external && "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    )}
                  />
                  <span className="font-medium">{item.name}</span>
                  {item.external && (
                    <span className="absolute -right-1 -top-1 flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-pink-600"></span>
                    </span>
                  )}
                </Link>
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu?.classList.toggle("hidden");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="md:hidden hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg p-4 space-y-2"
        >
          {navItems.map((item) => (
            <Button
              key={item.name}
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start h-12 px-4 rounded-lg text-base",
                pathname === item.href
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )}
            >
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3"
              >
                <item.icon className="h-5 w-5" />
                {item.name}
                {item.external && (
                  <ArrowUpRight className="ml-auto h-4 w-4 opacity-70" />
                )}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}