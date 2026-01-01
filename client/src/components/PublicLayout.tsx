import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Trophy, Menu, X } from "lucide-react";
import { useState } from "react";
import { getLoginUrl } from "@/const";

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  const [location] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center hover:opacity-80 transition-opacity">
                <img src="/poud-logo.png" alt="POUD" className="h-10 w-auto" />
              </a>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {isAuthenticated && user ? (
                <>
                  <Link href="/dashboard">
                    <Button variant="ghost" size="sm">
                      Dashboard
                    </Button>
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    {user.name || user.username || "User"}
                  </span>
                  <Button variant="outline" size="sm" onClick={() => logout()}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <a href={getLoginUrl()}>
                    <Button variant="ghost" size="sm">
                      Login
                    </Button>
                  </a>
                  <a href={getLoginUrl()}>
                    <Button size="sm">
                      Register
                    </Button>
                  </a>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location === link.href
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <div className="px-4 pt-3 border-t space-y-2">
                {isAuthenticated && user ? (
                  <>
                    <Link href="/dashboard">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <a href={getLoginUrl()} className="block">
                      <Button variant="ghost" size="sm" className="w-full">
                        Login
                      </Button>
                    </a>
                    <a href={getLoginUrl()} className="block">
                      <Button size="sm" className="w-full">
                        Register
                      </Button>
                    </a>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center">
                <img src="/poud-logo.png" alt="POUD" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground">
                Play India's premier <strong>100% free</strong>, <strong>skill-only</strong> fantasy cricket game. No fees, no luck, no ads—just pure strategy and competition.
              </p>
            </div>

            {/* Pages */}
            <div>
              <h6 className="font-semibold mb-3">Pages</h6>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <a className="text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h6 className="font-semibold mb-3">Legal</h6>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms">
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Terms of Use
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/responsible-gaming">
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Responsible Gaming
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h6 className="font-semibold mb-3">Contact</h6>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>A-403, Prathmesh Tower</p>
                <p>Lower Parel West, Mumbai</p>
                <p>Maharashtra 400013, India</p>
                <p className="pt-2">
                  <a href="mailto:support@poud.com" className="hover:text-primary transition-colors">
                    support@poud.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} POUD INFRASTRUCTURES PRIVATE LIMITED — Skill. Strategy. Glory.</p>
            <p className="mt-2">
              <strong>Disclaimer:</strong> POUD Fantasy Sports is a completely free-to-play, skill-based fantasy platform. No registration fees, subscriptions, or monetary rewards.
            </p>
            <p className="mt-1">
              Available to users aged <strong>18+</strong> within eligible regions. Not available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, Sikkim, and Tamil Nadu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
