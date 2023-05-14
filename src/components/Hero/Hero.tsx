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
import styles from './Hero.module.css'

const Hero = () => {
  const { topLogo, textLogo } = content
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
    >
      <div className="w-32 mx-auto mt-20" data-testid="hero-section">
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
      <div className={`Glass ${styles.Hero__Box}`}>
        <div className={styles.Hero__BoxInner}>
          <h1 className="sr-only">Reykr</h1>
          <Image
            priority
            src={`/${textLogo}`}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <nav className={styles.Hero__Nav}>
            <button
              className={styles.Hero__NavButton}
              onClick={() => scrollToElement('about')}
            >
              About
            </button>
            <button
              className={styles.Hero__NavButton}
              onClick={() => scrollToElement('music')}
            >
              Music
            </button>
          </nav>
        </div>
      </div>
      <ul className={styles.Hero__Social}>
        <li>
          <a
            href="https://www.instagram.com/reykr.official/"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            className="Button"
            data-testid="instagram-link"
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
            className="Button"
            data-testid="facebook-link"
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
            className="Button"
            data-testid="spotify-link"
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
            className="Button"
            data-testid="soundcloud-link"
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
            className="Button"
            data-testid="bandcamp-link"
          >
            <FaBandcamp />
          </a>
        </li>
      </ul>
    </motion.section>
  )
}

export default Hero
