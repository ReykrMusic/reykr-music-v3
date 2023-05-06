import { ReactNode } from 'react'
import Seo from './Seo'
import SmokeElement from 'smoke-effect-react'
import { motion } from 'framer-motion'

interface ILayoutProps {
  pageTitle?: string
  pageDescription?: string
  pageImage?: string
  children: ReactNode
}

const Layout = (props: ILayoutProps) => {
  const { pageTitle, pageDescription, pageImage, children } = props

  return (
    <div className="relative">
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageImage={pageImage}
      />
      <motion.div
        className="fixed top-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <SmokeElement
          opacity="0"
          src="/smoke-background.png"
          smokeSrc="/smoke-element.png"
          smokeOpacity="0.7"
        />
      </motion.div>
      <header></header>
      <main className="px-4">{children}</main>
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
    </div>
  )
}

export default Layout
