import { ReactNode } from 'react'
import Seo from './Seo'
import Footer from './Footer/Footer'

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
      <main className="px-4">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
