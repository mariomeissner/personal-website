import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next'
import { about } from 'contentlayer/generated'

export const getStaticProps = async () => {
  return { props: { about } }
}

export default function Home({ about }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MDXLayoutRenderer layout={'AboutLayout'} content={about} />
}
