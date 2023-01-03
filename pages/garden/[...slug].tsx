import { allEntries } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import { coreContent, sortedBlogPost } from '@/lib/utils/contentlayer'

const DEFAULT_LAYOUT = 'EntryLayout'

export async function getStaticPaths() {
  return {
    paths: allEntries.map((p) => ({ params: { slug: p.slug.split('/') } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = (params.slug as string[]).join('/')
  const entry = allEntries.find((e) => e.slug === slug)

  return {
    props: {
      entry,
    },
  }
}

export default function Entry({ entry }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MDXLayoutRenderer layout={entry.layout || DEFAULT_LAYOUT} toc={entry.toc} content={entry} />
  )
}
