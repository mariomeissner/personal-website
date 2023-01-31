import { allEntries } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

import { MDXRenderer } from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import { coreContent, sortedBlogPost } from '@/lib/utils/contentlayer'

const DEFAULT_LAYOUT = 'EntryLayout'

export async function getStaticPaths() {
  return {
    paths: allEntries.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug
  console.log('slug', slug)
  console.log(
    'allSlugs',
    allEntries.map((e) => e.slug)
  )
  const entry = allEntries.find((e) => e.slug === slug) || null

  return {
    props: {
      entry,
    },
  }
}

export default function Entry({ entry }: InferGetStaticPropsType<typeof getStaticProps>) {
  return entry && entry.body.code ? (
    <div>
      <h1 className="text-3xl">{entry.filename}</h1>
      <MDXRenderer code={entry.body.code} />
    </div>
  ) : (
    <div className="mt-24 text-center">
      <PageTitle>This garden entry is empty!</PageTitle>
    </div>
  )
}
