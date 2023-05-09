import { motion } from 'framer-motion'
import Image from 'next/image'
import content from '../../../public/content'
import { scrollToElement } from '../../../utils'
import {
  FaBandcamp,
  FaFacebook,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
} from 'react-icons/fa'

const Hero = () => {
  const { topLogo, textLogo } = content
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
    >
      <div className="w-32 mx-auto mt-20">
        <Image
          priority
          src={`/${topLogo}`}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="Glass mx-auto max-w-xl">
        <div className="p-6 sm:px-12 sm:pb-12 sm:pt-6 bg-white opacity-80">
          <h1 className="sr-only">Reykr</h1>
          <div className="">
            <Image
              priority
              src={`/${textLogo}`}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <nav className="mx-auto max-w-sm flex justify-center gap-20 text-2xl mt-6">
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
          </nav>
        </div>
      </div>
      <ul className="text-white mx-auto max-w-max flex gap-6 sm:gap-8 mt-6 text-4xl relative">
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
  )
}

export default Hero
