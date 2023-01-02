import { About, Blog, about, allBlogs } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import { ReactNode } from 'react'

import Image from '@/components/Image'
import PostsPreview from '@/components/PostList'
import { PageSEO } from '@/components/SEO'
import SocialIcon from '@/components/social-icons'
import { CoreContent, allCoreContent, sortedBlogPost } from '@/lib/utils/contentlayer'

const PREVIEW_POSTS = 3

interface Props {
  preview_posts: CoreContent<Blog>[]
}

export default function HomeLayout({ preview_posts }: Props) {
  return (
    <div className="flex flex-col items-center gap-y-6">
      <h1 className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text p-1 text-4xl font-extrabold text-transparent">
        Mario&apos;s Blog & Digital Garden
      </h1>
      <div className="flex flex-row flex-wrap gap-x-32">
        <div className="flex w-96 flex-col items-center gap-y-4">
          <h2 className="text-center text-2xl font-bold">Johannes Mario Meissner</h2>
          <Image
            className="rounded-full"
            src={'/static/profile_photo.jpeg'}
            alt="avatar"
            width="300px"
            height="300px"
          />
          <p className="text-justify font-light">
            Welcome! I&apos;m a machine learning researcher and software engineer based in Tokyo.
            Currently, I work for Indeed Japan. You have found my digital garden, a place where I
            write blog posts and make my notes public. Feel free to look around! My contact
            information is in the about page.
          </p>
        </div>
        <div className="w-96">
          <PostsPreview posts={preview_posts} />
        </div>
      </div>
    </div>
  )
}
