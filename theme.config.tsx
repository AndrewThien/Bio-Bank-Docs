import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Bio Bank Docs</span>,
  project: {
    link: 'https://github.com/AndrewThien',
  },
  chat: {
    link: 'https://www.linkedin.com/in/tri-thien-nguyen/',
  },
  docsRepositoryBase: 'https://github.com/AndrewThien/Bio-Bank-Docs/tree/main/',
  footer: {
    text: 'Made by Tri Thien Nguyen',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Bio Bank Docs'
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Bio Bank Docs" />
      <meta property="og:description" content="The documentation for Bio Bank project" />
      <link rel="icon" href="/images/favicon.ico" />
    </>
  )
}

export default config
