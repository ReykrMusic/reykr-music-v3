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
import { Spotify } from 'react-spotify-embed'
import content from '../../public/content'
import { motion } from 'framer-motion'

const Home = () => {
  const { profilePhoto, bio, spotifySongs } = content
  return (
    <Layout>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-150px' }}
          transition={{ duration: 1.8 }}
          className="Glass mx-auto my-[100vh]"
        >
          <div
            id="about"
            className="text-black bg-white opacity-80 flex flex-col md:flex-row items-center gap-2 md:w-[700px] scroll-mt-12"
          >
            <div className="min-w-[260px] md:min-w-[300px]">
              <Image
                src={`/${profilePhoto}`}
                alt="Reykr"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="p-4">
              <p className="text-lg">{bio}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-150px' }}
          transition={{ duration: 1.8 }}
          id="music"
          className="text-white mb-44 scroll-mt-12"
        >
          <ul className="SpotifyGrid">
            {spotifySongs.map((song) => (
              <li key={song} className="flex justify-center">
                <Spotify link={song} />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Home
