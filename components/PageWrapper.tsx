import Footer from './Footer'
import Link from './Link'
import MobileNav from './MobileNav'
import NavBar from './NavBar'
import ThemeSwitch from './ThemeSwitch'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HomeIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import siteMetadata from '@/data/siteMetadata'
import { getPageTitle } from '@/lib/utils/pageTitle'

interface Props {
  children: ReactNode
}

const PageWrapper = ({ children }: Props) => {
  const router = useRouter()

  return (
    <>
      <div className="mx-auto px-4 max-w-4xl">
        <NavBar />
        <div className="flex h-screen flex-col justify-between">
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default PageWrapper
