import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next'
import { home } from 'contentlayer/generated'

export const getStaticProps = async () => {
  return { props: { home } }
}

export default function Home({ home }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MDXLayoutRenderer layout={'HomeLayout'} content={home} />
}
