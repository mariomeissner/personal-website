import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { ComponentProps, useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { CoreContent } from '@/lib/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

interface Props {
  posts: CoreContent<Blog>[]
}

export default function PostList({ posts }: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold">Recent Posts</h2>
      <ul>
        {!posts.length && 'No posts found.'}
        {posts.map((post) => {
          const { slug, date, title, summary, tags } = post
          return (
            <li key={slug} className="py-4">
              <article className="space-y-1">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </dl>
                <h3 className="text-xl font-bold leading-6 tracking-tight">
                  <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                    {title}
                  </Link>
                </h3>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <div className="prose leading-normal text-gray-500 dark:text-gray-400">
                  {summary}
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </>
  )
}
