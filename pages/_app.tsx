import '@assets/main.css'
import '@assets/chrome-bug.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'

const Noop: FC = ({ children }) => <>{children}</>

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp