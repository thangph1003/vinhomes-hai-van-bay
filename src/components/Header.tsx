'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { navItems } from '@/constants/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        setActiveSection(hash)
      } else {
        setActiveSection('')
      }
    }

    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    if (href === '/') {
      setActiveSection('') 
    } else if (href.includes('#')) {
      setActiveSection(href)
    }
  }


  return (
    <header className="bg-white shadow-lg top-0 z-50">
      <div className="max-w-[1149px] mx-auto">
        <div className="flex justify-between items-center pt-[11px] pb-3">
          {/* Logo */}
          <Link href="/" className="w-[97px] h-[43px]">
            <Image src="/images/logo.png" alt="Vinhomes Hải Vân Bay" width={100} height={100} className="w-full h-full object-cover" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-5">
            {navItems.map((item) => {
              const isActive = item.href === '/'
                ? pathname === '/' && !activeSection
                : pathname === item.href || activeSection === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-base leading-[28px] text-[#162B75] font-montserrat ${
                    isActive ? 'font-bold' : 'font-normal hover:text-[#446dff]'
                  } transition-all duration-300`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex md:gap-2 items-center">
            <Link href="tel:0935917037">
              <Image src="/images/icon-phone.svg" alt="Icon phone" width={35} height={35} className="w-[35px] h-[35px] object-cover" />
            </Link>
            <div className='flex flex-col'>
              <Link  href="tel:0935917037" className='text-sm leading-5 font-normal font-montserrat text-[#162B75]'>Hotline:<span className='font-bold'> 0935 917 037</span></Link>
              <p className='text-xs leading-5 font-normal font-montserrat text-[#DCA447]'>7h30-20h00 (T2-T7)</p>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t">
              {navItems.map((item) => {
                const isActive = item.href === '/'
                  ? pathname === '/' && !activeSection
                  : pathname === item.href || activeSection === item.href

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-base ${
                      isActive
                        ? 'text-[#162B75] font-bold'
                        : 'text-gray-700 hover:text-blue-600 font-medium'
                    }`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="px-3 py-2">
                <Link
                  href="/lien-he"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tư vấn ngay
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
