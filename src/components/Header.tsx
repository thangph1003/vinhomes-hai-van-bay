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
      <div className="max-w-[1149px] mx-auto flex flex-col gap-[30px]">
        <div className="flex justify-between items-center md:pt-[11px] md:pb-3 py-2.5 px-[33px]">
          {/* Logo */}
          <Link href="/" className="md:w-[97px] md:h-[43px] w-[78px] h-[35px]">
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
          <div className="md:hidden h-5">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#162B75] hover:text-blue-600 md:p-2 p-0"
            >
              {isMenuOpen ? (
                <Image
                  src="/images/close.svg"
                  alt="Close menu"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              ) : (
                <Image
                  src="/images/menu.svg"
                  alt="Menu"
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px] object-contain"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="h-screen px-5 flex flex-col gap-[15px]">
              {navItems.map((item) => {
                const isActive = item.href === '/'
                  ? pathname === '/' && !activeSection
                  : pathname === item.href || activeSection === item.href

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block pb-[15px] border-b-[1.5px] border-[#EBEBEB] text-base leading-[28px] text-[#162B75] ${
                      isActive
                        ? 'font-bold'
                        : 'font-normal'
                    }`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
