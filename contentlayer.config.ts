import remarkCodeTitles from './lib/remark-code-title'
import remarkExtractFrontmatter from './lib/remark-extract-frontmatter'
import remarkImgToJsx from './lib/remark-img-to-jsx'
import { extractTocHeadings } from './lib/remark-toc-headings'
import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'
import GithubSlugger from 'github-slugger'
import path from 'path'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCitation from 'rehype-citation'
import rehypeKatex from 'rehype-katex'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypePrismPlus from 'rehype-prism-plus'
// Rehype packages
import rehypeSlug from 'rehype-slug'
import remarkFootnotes from 'remark-footnotes'
// Remark packages
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

const root = process.cwd()
const slugger = new GithubSlugger()

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  toc: { type: 'string', resolve: (doc) => extractTocHeadings(doc.body.raw) },
  filename: { type: 'string', resolve: (doc) => doc._raw.flattenedPath.split('/').reverse()[0] },
  slug: {
    type: 'string',
    resolve: (doc) => slugger.slug(doc._raw.flattenedPath.split('/').reverse()[0]),
  },
}

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'obsidian-vault/Blog/**/*.md',
  contentType: 'mdx',

  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    lastmod: { type: 'date' },
    draft: { type: 'boolean', default: false },
    summary: { type: 'string' },
    images: { type: 'list', of: { type: 'string' } },
    layout: { type: 'string' },
    bibliography: { type: 'string' },
    canonicalUrl: { type: 'string' },
  },
  computedFields,
}))

export const Entry = defineDocumentType(() => ({
  name: 'Entry',
  filePathPattern: 'obsidian-vault/Garden/**/*.md',
  contentType: 'mdx',
  fields: {
    lastmod: { type: 'date' },
    layout: { type: 'string' },
  },
  computedFields,
}))

export const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: 'about.mdx',
  contentType: 'mdx',
  isSingleton: true,
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'string' },
    occupation: { type: 'string' },
    email: { type: 'string' },
    twitter: { type: 'string' },
    linkedin: { type: 'string' },
    github: { type: 'string' },
    layout: { type: 'string' },
  },
  // computedFields,
}))

// export const Home = defineDocumentType(() => ({
//   name: 'Home',
//   filePathPattern: 'home.mdx',
//   contentType: 'mdx',
//   isSingleton: true,
//   fields: {},
//   // computedFields,
// }))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Entry, About],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      remarkGfm,
      remarkCodeTitles,
      [remarkFootnotes, { inlineNotes: true }],
      remarkMath,
      remarkImgToJsx,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
})
