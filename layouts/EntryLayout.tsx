import type { Blog, Entry } from 'contentlayer/generated'
import { ReactNode } from 'react'

import Image from '@/components/Image'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import PageWrapper from '@/components/PageWrapper'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Tag from '@/components/Tag'
import Comments from '@/components/comments'
import siteMetadata from '@/data/siteMetadata'
import { CoreContent } from '@/lib/utils/contentlayer'

const editUrl = (slug) => `${siteMetadata.siteRepo}/blob/master/data/blog/${slug}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface Props {
  content: CoreContent<Entry>
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, next, prev, children }: Props) {
  const { slug } = content

  return (
    <PageWrapper>
      {/* TODO: SEO */}
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    {/* TODO: Time */}
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{'Entry Title'}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 text-justify dark:prose-dark">
                {children}
              </div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(slug)}>{'View on GitHub'}</Link>
              </div>
              {/* <Comments frontMatter={content} /> */}
            </div>
          </div>
        </div>
      </article>
    </PageWrapper>
  )
}
