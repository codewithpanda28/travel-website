'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import Button from './Button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="relative z-30 w-full bg-white">
      <div className="flexBetween max-container padding-container py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        <button onClick={toggleMenu} className="lg:hidden">
          <Image 
            src={isMenuOpen ? "/close.svg" : "/menu.svg"}
            alt={isMenuOpen ? "close.svg" : "menu.svg"}
            width={32}
            height={32}
            className="cursor-pointer bg-slate-400"
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col justify-center items-center">
          <ul className="flex flex-col items-center py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="w-full">
                <Link
                  href={link.href}
                  className="regular-16 text-gray-50 block w-full py-2 px-4 text-center hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="w-full px-4 pt-2">
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
                className="w-full"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}