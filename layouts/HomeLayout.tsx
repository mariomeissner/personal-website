import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import type { About, about } from 'contentlayer/generated'

interface Props {
  children: ReactNode
  content: Omit<About, '_id' | '_raw' | 'body'>
}

export default function HomeLayout({ children, content }: Props) {

  return (
    <div className='prose'>
      {children}
    </div>
  )
}
