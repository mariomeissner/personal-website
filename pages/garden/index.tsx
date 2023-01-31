import { allEntries } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import EntryListLayout from '@/layouts/EntryListLayout'
import ListLayout from '@/layouts/ListLayout'
import { allCoreContent, sortedBlogPost } from '@/lib/utils/contentlayer'

export const ENTRIES_PER_PAGE = 5

export const getStaticProps = async () => {
  const initialDisplayEntries = allEntries.slice(0, ENTRIES_PER_PAGE)

  return {
    props: {
      initialDisplayEntries: allCoreContent(initialDisplayEntries),
    },
  }
}

export default function Blog({
  initialDisplayEntries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ul>
        {initialDisplayEntries.map((entry) => {
          const { slug, lastmod } = entry
          return (
            <li key={slug} className="py-4">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Last modified on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={lastmod}>{lastmod}</time>
                  </dd>
                </dl>
                <div className="space-y-3 xl:col-span-3">
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/garden/${slug}`} className="text-gray-900 dark:text-gray-100">
                        {entry.filename}
                      </Link>
                    </h3>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </>
  )
}
