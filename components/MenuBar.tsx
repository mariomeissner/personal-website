import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import { HomeIcon } from '@heroicons/react/24/outline'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { getPageTitle } from '@/lib/utils/pageTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import PathNavigation from './PathNavigation'

interface Props {
  pathname: string
}

function MenuBar() {
  return (
    <header className="flex items-center justify-between py-10 text-lg">
      <PathNavigation />
      <div className="flex items-center leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default MenuBar
