import Footer from './Footer'
import Link from './Link'
import MobileNav from './MobileNav'
import PathNavigation from './PathNavigation'
import ThemeSwitch from './ThemeSwitch'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HomeIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import React from 'react'
import { ReactNode } from 'react'

import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import siteMetadata from '@/data/siteMetadata'
import { getPageTitle } from '@/lib/utils/pageTitle'

interface Props {
  pathname: string
}

function NavBar() {
  return (
    <nav className="flex items-center justify-between py-2 px-4 my-6 lg:px-32 text-md bg-slate-800 inset-1 border-2 border-slate-700 rounded-xl">
      <Link
        href="/"
        aria-label="home"
        className="mb-0.5 rounded p-2 transition hover:bg-slate-300 dark:hover:bg-gray-600"
      >
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      {/* <PathNavigation /> */}
      <div className="flex items-center leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 hover:bg-slate-300 dark:hover:bg-gray-600"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </nav>
  )
}

export default NavBar
