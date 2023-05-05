import Layout from '@/components/Layout'
import { scrollToElement } from '../../utils'

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="Glass mx-auto max-w-xl mt-44">
          <div className="px-12 pb-12 pt-6 bg-white opacity-80">
            <h1 className="text-center text-7xl">REYKR</h1>
            <div className="mx-auto max-w-sm flex justify-center gap-20 text-2xl mt-6">
              <button
                className="hover:scale-110 focus:scale-110 transition-all ease-in-out duration-300"
                onClick={() => scrollToElement('about')}
              >
                About
              </button>
              <button
                className="hover:scale-110 focus:scale-110 transition-all ease-in-out duration-300"
                onClick={() => scrollToElement('music')}
              >
                Music
              </button>
            </div>
          </div>
        </div>

        <div id="about" className="text-white">
          <p>About me</p>
        </div>
        <div id="music" className="text-white">
          <p>Music</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
