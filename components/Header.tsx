'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('download')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsVisible(window.scrollY < heroBottom - 100)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'home', href: '/' },
    { name: 'features', href: '/features' },
    { name: 'how it works', href: '/how-it-works' },
  ]

  return (
    <>
      <motion.header
        className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-4xl mx-auto bg-cream-50 border border-black/10 rounded-[24px] shadow-sm backdrop-blur-sm pointer-events-auto">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo - Left */}
            <Link
              href="/"
              className="font-display tracking-tight hover:opacity-70 transition-opacity duration-300"
            >
              <span className="font-light text-black text-lg">reels</span>
              <span className="font-bold text-black text-lg">.studio</span>
            </Link>

            {/* Center Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-display font-medium text-black/60 hover:text-black transition-all duration-200 lowercase rounded-xl hover:bg-black/5"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <a
                href="#download"
                className="hidden sm:flex items-center gap-1.5 bg-black text-primary font-display font-bold text-sm px-5 py-2 rounded-full hover:bg-black/90 transition-all duration-200 lowercase"
              >
                download
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden flex flex-col items-center justify-center w-8 h-8 rounded-lg hover:bg-black/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <motion.span
                  className="w-4 h-px bg-black"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 2.5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-4 h-px bg-black my-1"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-4 h-px bg-black"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -2.5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-20 left-4 right-4 bg-cream-50 rounded-2xl shadow-lg border border-black/10"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="p-4">
                <div className="space-y-1 mb-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2.5 font-display font-medium text-base text-black/70 hover:text-black hover:bg-black/5 rounded-xl transition-all duration-200 lowercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <a
                  href="#download"
                  className="flex items-center justify-center gap-2 bg-black text-primary font-display font-bold text-sm px-5 py-2.5 rounded-full hover:bg-black/90 transition-colors w-full lowercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  download now
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
