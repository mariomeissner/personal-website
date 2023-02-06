import Link from 'next/link'
import { remark } from 'remark'
import yaml from 'js-yaml'
import { Parent } from 'unist'
import { visit } from 'unist-util-visit'
import { VFile } from 'vfile'

/**
 * A Remark plugin to transform wiki links (`[[some text]]`) 
 * into internal Next.js `Link` components.
 */
export function remarkWikiLinks() {
  return (tree: Parent, file: VFile) => {
    
  }
}