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
import MenuBar from './MenuBar'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const router = useRouter()

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <MenuBar/>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
