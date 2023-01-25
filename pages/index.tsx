import { About, Blog, about, allBlogs } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'

import Image from '@/components/Image'
import { MDXRenderer } from '@/components/MDXComponents'
import PostsPreview from '@/components/PostList'
import { PageSEO } from '@/components/SEO'
import SocialIcon from '@/components/social-icons'
import { CoreContent, allCoreContent, sortedBlogPost } from '@/lib/utils/contentlayer'

const PREVIEW_POSTS = 3

export const getStaticProps = async () => {
  const posts = sortedBlogPost(allBlogs)
  const preview_posts = posts.slice(0, PREVIEW_POSTS)

  return {
    props: {
      preview_posts: allCoreContent(preview_posts),
    },
  }
}

export default function Home({ preview_posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text p-4 text-4xl font-extrabold text-transparent">
        Mario&apos;s Blog & Digital Garden
      </h1>
      <p className="text-justify font-light max-w-xl">
        Welcome! I&apos;m a full stack software enginner and machine learning researcher based in
        Tokyo. Currently I work for Indeed Japan. You have found my digital garden, a place where I
        write blog posts and make my notes public. You can read more about me in the{' '}
        <span>
          <Link className="font-bold text-purple-400" href="/about">
            About
          </Link>
        </span>{' '}
        page.
      </p>
      <div className="mt-12 flex flex-row justify-between">
        <PostsPreview posts={preview_posts} />
        <PostsPreview posts={preview_posts} />
      </div>
    </div>
  )
}
