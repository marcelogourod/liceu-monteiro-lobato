'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, User } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-white shadow-premium-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-scale transition-transform">
            <Image
              src="/logo.png"
              alt="Liceu Monteiro Lobato"
              width={180}
              height={60}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-secondary transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/escola" className="hover:text-secondary transition-all duration-300 font-medium relative group">
              A Escola
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/ensino" className="hover:text-secondary transition-all duration-300 font-medium relative group">
              Ensino
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/noticias" className="hover:text-secondary transition-all duration-300 font-medium relative group">
              Notícias
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/calendario" className="hover:text-secondary transition-all duration-300 font-medium relative group">
              Calendário
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/matriculas" className="hover:text-secondary transition-all duration-300 font-medium relative group">
              Matrículas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/portal/login" 
              className="btn-premium flex items-center space-x-2 bg-white text-primary px-5 py-2.5 rounded-lg font-semibold shadow-premium hover-lift"
            >
              <User size={18} />
              <span>Portal</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link href="/" className="block hover:text-secondary transition-colors font-medium">
              Home
            </Link>
            <Link href="/escola" className="block hover:text-secondary transition-colors font-medium">
              A Escola
            </Link>
            <Link href="/ensino" className="block hover:text-secondary transition-colors font-medium">
              Ensino
            </Link>
            <Link href="/noticias" className="block hover:text-secondary transition-colors font-medium">
              Notícias
            </Link>
            <Link href="/calendario" className="block hover:text-secondary transition-colors font-medium">
              Calendário
            </Link>
            <Link href="/matriculas" className="block hover:text-secondary transition-colors font-medium">
              Matrículas
            </Link>
            <Link 
              href="/portal/login" 
              className="flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-lg w-fit font-semibold"
            >
              <User size={18} />
              <span>Portal</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
