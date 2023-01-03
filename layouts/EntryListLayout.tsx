import type { Blog, Entry } from 'contentlayer/generated'
import { ComponentProps, useState } from 'react'

import Link from '@/components/Link'
import Pagination from '@/components/Pagination'
import Tag from '@/components/Tag'
import { CoreContent } from '@/lib/utils/contentlayer'
import formatDate from '@/lib/utils/formatDate'

interface Props {
  initialDisplayEntries: CoreContent<Entry>[]
}

export default function EntryListLayout({ initialDisplayEntries }: Props) {
  const [searchValue, setSearchValue] = useState('')
  const entries = initialDisplayEntries

  return (
    <ul>
      {entries.map((entry) => {
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
                      Note Title
                    </Link>
                  </h3>
                </div>
              </div>
            </article>
          </li>
        )
      })}
    </ul>
  )
}
