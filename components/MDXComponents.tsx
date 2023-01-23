/* eslint-disable react/display-name */
import Image from './Image'
import CustomLink from './Link'
import { BlogNewsletterForm } from './NewsletterForm'
import Pre from './Pre'
import TOCInline from './TOCInline'
import type { About, Blog, Entry, Home } from 'contentlayer/generated'
import { ComponentMap } from 'mdx-bundler/client'
import { useMDXComponent } from 'next-contentlayer/hooks'
import React from 'react'

import { coreContent } from '@/lib/utils/contentlayer'

export const MDXComponents: ComponentMap = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
}

export const MDXRenderer = ({ code }: { code: string }) => {
  const MDX = useMDXComponent(code)
  return <MDX components={MDXComponents} />
}
