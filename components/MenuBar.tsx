import Footer from './Footer'
import Link from './Link'
import MobileNav from './MobileNav'
import PathNavigation from './PathNavigation'
import SectionContainer from './SectionContainer'
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
