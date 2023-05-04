import Head from 'next/head'

const defaultImage = '/vercel.svg'
const defaultDescription = `Reykr is an electronic music producer and DJ from British Columbia, Canada. His songs combine influences from electronic, hip-hop, and psychedelic music into introspective pieces with shimmering melodies, punchy drums, and deep-driving bass.`

interface ISeoProps {
  pageTitle?: string
  pageDescription?: string
  pageImage?: string
}

const Seo = (props: ISeoProps) => {
  const {
    pageTitle = '',
    pageDescription = defaultDescription,
    pageImage = defaultImage,
  } = props

  const getPageTitle = () => (pageTitle ? `${pageTitle} | REYKR` : 'REYKR')

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
