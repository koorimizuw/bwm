import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
  divider?: boolean
}

const Layout = ({
  children,
  title = 'This is the default title',
  divider = false
}: Props) => (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header divider={divider} />
      {children}
      <Footer />
    </div>
  )

export default Layout
