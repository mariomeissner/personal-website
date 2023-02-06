import { allBlogs } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

import { MDXRenderer } from '@/components/MDXRenderer'
import PageTitle from '@/components/PageTitle'
import { coreContent, sortedBlogPost } from '@/lib/utils/contentlayer'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug
  const sortedPosts = sortedBlogPost(allBlogs)
  const postIndex = sortedPosts.findIndex((p) => p.slug === slug)
  const prevContent = sortedPosts[postIndex + 1] || null
  const prev = prevContent ? prevContent : null
  const nextContent = sortedPosts[postIndex - 1] || null
  const next = nextContent ? nextContent : null
  const post = sortedPosts[postIndex] || null

  return {
    props: {
      post,
      prev,
      next,
    },
  }
}

export default function Blog({ post, prev, next }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {post && post.body.code && 'draft' in post && post.draft !== true ? (
        <div className="divide-y">
          <h1 className="py-6 text-center text-4xl font-bold leading-10 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-none md:text-5xl">
            {post.filename}
          </h1>
          <div className="prose prose-slate pt-8 pb-8 dark:prose-invert max-w-none">
            <MDXRenderer code={post.body.code} />
          </div>
        </div>
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            This blog entry is not available right now!{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
