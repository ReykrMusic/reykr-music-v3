import { motion } from 'framer-motion'
import Image from 'next/image'
import content from '../../../public/content'
import styles from './About.module.css'

const About = () => {
  const { profilePhoto, bio } = content
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-150px' }}
      transition={{ duration: 1.8 }}
      className={`Glass ${styles.AboutContainer}`}
    >
      <div id="about" className={styles.About} data-testid="about-section">
        <h2 className="sr-only">About</h2>
        <div className={styles.About__Photo}>
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
    </motion.section>
  )
}

export default About
