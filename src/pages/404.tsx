import Layout from '@/components/Layout'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { Roboto_Mono } from 'next/font/google'
const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

const ErrorPage = () => {
  return (
    <Layout pageTitle="404">
      <div className="text-white max-w-max text-center mx-auto mt-44 relative">
        <h1 className={`text-7xl ${roboto_mono.className}`}>404</h1>
        <p className="my-8 text-2xl">Sorry, that page doesn&apos;t exist!</p>
        <div>
          <Link href="/" className="BackButton">
            <FaArrowLeft className="BackButton__arrow" /> Go back
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default ErrorPage
