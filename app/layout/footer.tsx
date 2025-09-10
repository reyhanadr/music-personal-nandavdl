"use client";

import Link from "next/link";
import { FaInstagram, FaGithub, FaAddressCard, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";    

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> */}
        <div className="gap-8">
          {/* Brand Section */}
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-bold ">Nandavdl Music Personal</h3>
            <p className="text-muted-foreground">
              Discover, play, and enjoy my favorite tracks here.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/discover" className="text-muted-foreground hover:text-foreground transition-colors">Discover</Link></li>
            </ul>
          </div> */}

          {/* Account */}
          {/* <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Account</h4>
            <ul className="space-y-2">
              <li><Link href="/profile" className="text-muted-foreground hover:text-foreground transition-colors">Profile</Link></li>
              <li><Link href="/settings" className="text-muted-foreground hover:text-foreground transition-colors">Settings</Link></li>
              <li><Link href="/subscription" className="text-muted-foreground hover:text-foreground transition-colors">Subscription</Link></li>
              <li><Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</Link></li>
            </ul>
          </div> */}


        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-l">
            © {currentYear} reyhanadr. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link target="_blank" href="https://www.instagram.com/reyhanadr/">
              <Button variant="ghost" size="icon">
                <FaInstagram className="h-5 w-5" />
              </Button>
            </Link>
            <Link target="_blank" href="https://github.com/reyhanadr">
              <Button variant="ghost" size="icon">
                <FaGithub className="h-5 w-5" />
              </Button>
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/reyhan-adriana-deris/">
              <Button variant="ghost" size="icon">
                <FaLinkedinIn className="h-5 w-5" />
              </Button>
            </Link>
            <Link target="_blank" href="https://reyhanadr.com">
              <Button variant="ghost" size="icon">
                <FaAddressCard className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}