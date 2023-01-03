import { allEntries } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import EntryListLayout from '@/layouts/EntryListLayout'
import ListLayout from '@/layouts/ListLayout'
import { allCoreContent, sortedBlogPost } from '@/lib/utils/contentlayer'

export const ENTRIES_PER_PAGE = 5

export const getStaticProps = async () => {
  // TODO: Random sampling?
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
      <EntryListLayout initialDisplayEntries={initialDisplayEntries} />
    </>
  )
}
