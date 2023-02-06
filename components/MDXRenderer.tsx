/* eslint-disable react/display-name */
import MarkdownImage from './Image'
import CustomLink from './Link'
import { BlogNewsletterForm } from './NewsletterForm'
import Pre from './Pre'
import TOCInline from './TOCInline'
import type { About, Blog, Entry } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import React from 'react'

import { coreContent } from '@/lib/utils/contentlayer'

export const MDXComponents = {
  Image: MarkdownImage,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
}

export const MDXRenderer = ({ code }: { code: string }) => {
  const MDX = useMDXComponent(code)
  return <MDX components={MDXComponents} />
}
