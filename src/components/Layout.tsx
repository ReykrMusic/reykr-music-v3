import { ReactNode } from 'react'
import Seo from './Seo'

interface ILayoutProps {
  pageTitle?: string
  pageDescription?: string
  pageImage?: string
  children: ReactNode
  hideFooter?: boolean
}

const Layout = (props: ILayoutProps) => {
  const {
    pageTitle,
    pageDescription,
    pageImage,
    children,
    hideFooter = false,
  } = props

  return (
    <div className="relative">
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageImage={pageImage}
      />
      <header></header>
      <main className="px-4">{children}</main>
      {!hideFooter && (
        <footer className="pb-4 relative">
          <p className="text-center text-white">
            Built by{' '}
            <a
              href="https://lucassilbernagel.com/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:underline-offset-2 focus:underline-offset-2 ease-in-out transition-all duration-300"
            >
              Lucas Silbernagel
            </a>
          </p>
        </footer>
      )}
    </div>
  )
}

export default Layout
