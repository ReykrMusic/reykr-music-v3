import { motion } from 'framer-motion'
import content from '../../../public/content'
import { Spotify } from 'react-spotify-embed'
import styles from './Music.module.css'

const Music = () => {
  const { spotifySongs } = content
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8 }}
      id="music"
      className={styles.Music}
    >
      <h2 className="sr-only">Music</h2>
      <ul className={styles.SpotifyGrid}>
        {spotifySongs.map((song) => (
          <li key={song} className="flex justify-center">
            <Spotify link={song} />
          </li>
        ))}
      </ul>
    </motion.section>
  )
}

export default Music
