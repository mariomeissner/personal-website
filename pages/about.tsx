import { about } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import Image from '@/components/Image'

import { MDXRenderer } from '@/components/MDXComponents'
import { PageSEO } from '@/components/SEO'
import SocialIcon from '@/components/social-icons'

export const getStaticProps = async () => {
  return { props: { about } }
}

export default function About({ about }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <>
  <PageSEO title={`Home - ${about.name}`} description={`Home page of ${about.name}`} />
  <div className="divide-y">
    <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
      <div className="flex flex-col items-center pt-8 text-center">
        <Image
          src={about.avatar}
          alt="avatar"
          width="192px"
          height="192px"
          className="h-48 w-48 rounded-full"
        />
        <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{about.name}</h3>
        <div className="text-gray-500 dark:text-gray-400">{about.occupation}</div>
        <div className="flex space-x-3 pt-6">
          <SocialIcon kind="mail" href={`mailto:${about.email}`} />
          <SocialIcon kind="github" href={about.github} />
          <SocialIcon kind="linkedin" href={about.linkedin} />
          <SocialIcon kind="twitter" href={about.twitter} />
        </div>
      </div>
      <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          <MDXRenderer code={about.body.code} /></div>
    </div>
  </div>
</>
}
