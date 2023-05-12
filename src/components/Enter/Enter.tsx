import Layout from '../Layout'
import { Roboto_Mono } from 'next/font/google'
const roboto_mono = Roboto_Mono({ subsets: ['latin'] })
import styles from './Enter.module.css'

interface IEnterProps {
  enterSite: () => void
}

const Enter = (props: IEnterProps) => {
  const { enterSite } = props
  return (
    <Layout hideFooter={true}>
      <div className={styles.Enter}>
        <button
          data-testid="enter-button"
          aria-label="Enter the website reykrmusic.com"
          onClick={enterSite}
          className={`${roboto_mono.className} ${styles.EnterButton}`}
        >
          enter
        </button>
      </div>
    </Layout>
  )
}

export default Enter
