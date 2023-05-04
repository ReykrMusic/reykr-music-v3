import { ReactNode } from 'react'
import Seo from './Seo'

interface ILayoutProps {
  pageTitle?: string
  pageDescription?: string
  pageImage?: string
  children: ReactNode
}

const Layout = (props: ILayoutProps) => {
  const { pageTitle, pageDescription, pageImage, children } = props

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageImage={pageImage}
      />
      <header></header>
      <main>{children}</main>
      <footer>
        <p>
          Built by{' '}
          <a
            href="https://lucassilbernagel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Silbernagel
          </a>
        </p>
      </footer>
    </>
  )
}

export default Layout
