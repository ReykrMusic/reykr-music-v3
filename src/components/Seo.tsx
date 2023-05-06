import Head from 'next/head'
import content from '../../public/content'

interface ISeoProps {
  pageTitle?: string
  pageDescription?: string
  pageImage?: string
}

const Seo = (props: ISeoProps) => {
  const { seo } = content
  const {
    pageTitle = seo.pageTitle,
    pageDescription = seo.pageDescription,
    pageImage = `/${seo.pageImage}`,
  } = props

  const getPageTitle = () => (pageTitle ? `REYKR | ${pageTitle}` : 'REYKR')

  return (
    <Head>
      <title key="title">{getPageTitle()}</title>
      {/* Primary Meta Tags */}
      <meta name="title" content={getPageTitle()} />
      <meta name="description" content={pageDescription} />
      <meta name="image" content={pageImage} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://reykrmusic.com" />
      <meta property="og:title" content={getPageTitle()} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="REYKR" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://reykrmusic.com" />
      <meta property="twitter:title" content={getPageTitle()} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />
    </Head>
  )
}

export default Seo
