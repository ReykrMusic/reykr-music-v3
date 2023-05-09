import Layout from '../Layout'
import { Roboto_Mono } from 'next/font/google'
const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

interface IEnterProps {
  enterSite: () => void
}

const Enter = (props: IEnterProps) => {
  const { enterSite } = props
  return (
    <Layout hideFooter={true}>
      <div className="max-w-min mx-auto mt-44">
        <button
          aria-label="Enter the website reykrmusic.com"
          onClick={enterSite}
          className={`text-white text-5xl ${roboto_mono.className} EnterButton`}
        >
          enter
        </button>
      </div>
    </Layout>
  )
}

export default Enter
