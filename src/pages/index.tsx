import Layout from '@/components/Layout'
import { scrollToElement } from '../../utils'
import Image from 'next/image'
import {
  FaBandcamp,
  FaFacebook,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
} from 'react-icons/fa'

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="Glass mx-auto max-w-xl mt-44">
          <div className="p-6 sm:px-12 sm:pb-12 sm:pt-6 bg-white opacity-80">
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
        <ul className="text-white mx-auto max-w-max flex gap-8 mt-6 text-4xl">
          <li>
            <a
              href="https://www.instagram.com/reykr.official/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="hover:contrast-50 focus:contrast-50 transition"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/reykr.music"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              className="hover:contrast-50 focus:contrast-50 transition"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/4i5oaaegWPdDi8p3Dm23rJ"
              aria-label="Spotify"
              target="_blank"
              rel="noreferrer"
              className="hover:contrast-50 focus:contrast-50 transition"
            >
              <FaSpotify />
            </a>
          </li>
          <li>
            <a
              href="https://soundcloud.com/reykr"
              aria-label="SoundCloud"
              target="_blank"
              rel="noreferrer"
              className="hover:contrast-50 focus:contrast-50 transition"
            >
              <FaSoundcloud />
            </a>
          </li>
          <li>
            <a
              href="https://reykr.bandcamp.com/"
              aria-label="Bandcamp"
              target="_blank"
              rel="noreferrer"
              className="hover:contrast-50 focus:contrast-50 transition"
            >
              <FaBandcamp />
            </a>
          </li>
        </ul>
        <div className="Glass mx-auto mt-96">
          <div
            id="about"
            className="text-black bg-white opacity-80 flex flex-col md:flex-row items-center gap-2 md:w-[700px]"
          >
            <div className="min-w-[260px] md:min-w-[300px]">
              <Image
                src="/profilePhoto.jpg"
                alt="Reykr"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="p-4">
              <p className="text-lg">
                Reykr is an electronic music producer and DJ from British
                Columbia, Canada. His songs combine influences from electronic,
                hip-hop, and psychedelic music into introspective pieces with
                shimmering melodies, punchy drums, and deep-driving bass.
              </p>
            </div>
          </div>
        </div>
        <div id="music" className="text-white my-96">
          <p>Music</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
