"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "../ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "https://projects.justinsaju.me", label: "Projects" },
  { href: "https://blog.justinsaju.me", label: "Blog" },
  { href: "https://photography.justinsaju.me", label: "Photography" },
];

const dropdownMenu = {
  label: "Apps",
  items: [
    { href: "https://echoflow.justinsaju.me", label: "EchoFlow" },
    { href: "https://photobooth.justinsaju.me", label: "Photobooth" },
  ]
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            marginTop: isScrolled ? "1rem" : "0",
            width: isScrolled ? "95%" : "100%",
            maxWidth: isScrolled ? "800px" : "none",
            borderRadius: isScrolled ? "9999px" : "0",
            backgroundColor: isScrolled ? "var(--glass-bg)" : "transparent",
            backdropFilter: isScrolled ? "blur(16px)" : "none",
            border: isScrolled ? "1px solid var(--glass-border)" : "none",
            boxShadow: isScrolled ? "0 0 40px -10px rgba(124, 58, 237, 0.15)" : "none",
            paddingTop: isScrolled ? "0" : "1rem",
          }}
          className="pointer-events-auto transition-all duration-500 ease-out"
        >
          <nav
            style={{
              padding: isScrolled ? "0.75rem 1.5rem" : "0.5rem 1.5rem",
              maxWidth: isScrolled ? "none" : "80rem",
              margin: isScrolled ? "0" : "0 auto",
            }}
            className="flex items-center justify-between transition-all duration-500"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 20,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: 22, height: 22, marginRight: 8, display: 'inline-block', verticalAlign: 'middle' }}
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span style={{ verticalAlign: 'middle', fontWeight: 600 }}>ECHO System</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ color: "var(--text-secondary)" }}
                  className="text-sm font-medium hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Apps Dropdown */}
              <div className="relative group">
                <button
                  style={{ color: "var(--text-secondary)" }}
                  className="text-sm font-medium hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
                >
                  {dropdownMenu.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-black/40 border border-white/10 rounded-xl shadow-xl backdrop-blur-xl py-2 w-40 flex flex-col overflow-hidden">
                    {dropdownMenu.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="px-4 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="https://portfolio.justinsaju.me"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                  color: "#C084FC",
                  border: "1px solid rgba(124, 58, 237, 0.2)",
                  boxShadow: "0 0 20px -5px rgba(124, 58, 237, 0.3)",
                }}
              >
                Portfolio
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X style={{ color: "var(--foreground)" }} className="w-6 h-6" />
                ) : (
                  <Menu style={{ color: "var(--foreground)" }} className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </motion.header>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "var(--text-primary)" }}
                className="text-2xl font-semibold hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex flex-col items-center gap-4 mt-4 border-t border-white/10 pt-8">
              <span className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">{dropdownMenu.label}</span>
              {dropdownMenu.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: "var(--text-primary)" }}
                  className="text-xl font-semibold hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
