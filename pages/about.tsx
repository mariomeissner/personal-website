import { about } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

import { MDXLayoutRenderer } from '@/components/MDXComponents'

export const getStaticProps = async () => {
  return { props: { about } }
}

export default function About({ about }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MDXLayoutRenderer layout={'AboutLayout'} content={about} />
}
