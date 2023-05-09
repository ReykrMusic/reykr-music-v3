import { motion } from 'framer-motion'
import Image from 'next/image'
import content from '../../../public/content'

const About = () => {
  const { profilePhoto, bio } = content
  return (
    <motion.section
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
        <h2 className="sr-only">About</h2>
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
    </motion.section>
  )
}

export default About
