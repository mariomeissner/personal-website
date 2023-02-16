import { about } from 'contentlayer/generated'
import next, { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import profile_photo from 'public/static/profile_photo2.jpg'

import { MDXRenderer } from '@/components/MDXRenderer'
import { PageSEO } from '@/components/SEO'
import SocialIcon from '@/components/social-icons'

export const getStaticProps = async () => {
  return { props: { about } }
}

export default function About({ about }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Home - ${about.name}`} description={`Home page of ${about.name}`} />
      <div className="flex flex-col items-center justify-center space-y-6 space-x-6 lg:flex-row lg:items-start">
        {/* Left Column */}
        <div className="flex min-w-fit flex-col items-center py-6 px-2 text-center">
          <Image src={profile_photo} className="h-48 w-48 rounded-full" alt="avatar" />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{about.name}</h3>
          <div className="text-gray-500 dark:text-gray-400">{about.occupation}</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${about.email}`} />
            <SocialIcon kind="github" href={about.github} />
            <SocialIcon kind="linkedin" href={about.linkedin} />
            <SocialIcon kind="twitter" href={about.twitter} />
          </div>
        </div>
        {/* Right Column */}
        <div className="prose prose-slate pb-8 dark:prose-invert">
          <MDXRenderer code={about.body.code} />
        </div>
      </div>
    </>
  )
}
