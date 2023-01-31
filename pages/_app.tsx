// import '@fontsource/inter/variable-full.css'
import 'katex/dist/katex.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import PageWrapper from '@/components/PageWrapper'
import Analytics from '@/components/analytics'
import '@/css/prism.css'
import '@/css/tailwind.css'
import siteMetadata from '@/data/siteMetadata'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ThemeProvider>
  )
}
