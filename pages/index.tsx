import { allBlogs, home } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import AboutLayout from '@/layouts/AboutLayout'
import HomeLayout from '@/layouts/HomeLayout'
import { allCoreContent, sortedBlogPost } from '@/lib/utils/contentlayer'

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
  return <HomeLayout preview_posts={preview_posts} />
}
