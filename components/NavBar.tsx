import Footer from './Footer'
import Link from './Link'
import MobileNav from './MobileNav'
import PathNavigation from './PathNavigation'
import ThemeSwitch from './ThemeSwitch'
import { HomeIcon } from '@heroicons/react/24/solid'
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
    <nav className="text-md inset-1 my-6 flex items-center justify-between rounded-xl border-2 border-slate-500 bg-slate-300 py-2 px-4 dark:border-slate-700 dark:bg-slate-800">
      <Link href="/" aria-label="home">
        <HomeIcon className="h-8 w-8 p-1 rounded hover:bg-slate-400 dark:hover:bg-slate-600" />
      </Link>
      <div className="flex items-center leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="rounded font-medium text-gray-900 hover:bg-slate-400 dark:text-gray-100 dark:hover:bg-slate-600 p-2"
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
