import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SmokeElement from 'lucas-silbernagel-smoke-effect-react'
import Enter from '@/components/Enter/Enter'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Music from '@/components/Music/Music'
import UpButton from '@/components/UpButton/UpButton'

const Home = () => {
  const [enteredSite, setEnteredSite] = useState<boolean>(false)
  const [previouslyEnteredSite, setPreviouslyEnteredSite] =
    useState<boolean>(false)

  const enterSite = () => {
    setEnteredSite(true)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('enteredSite', 'true')
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPreviouslyEnteredSite(Boolean(sessionStorage.getItem('enteredSite')))
    }
  }, [])

  if (enteredSite || previouslyEnteredSite) {
    return (
      <>
        <motion.div
          className="fixed top-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <SmokeElement
            opacity="0"
            src="/smoke-background.png"
            smokeSrc="/smoke-element.png"
            smokeOpacity="0.1"
          />
        </motion.div>
        <Layout>
          <Hero />
          <About />
          <Music />
          <UpButton />
        </Layout>
      </>
    )
  } else {
    return <Enter enterSite={enterSite} />
  }
}

export default Home
