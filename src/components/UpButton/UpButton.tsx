import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import styles from './UpButton.module.css'

const UpButton = () => {
  const [currentScrollPos, setCurrentScrollPos] = useState<number>(0)

  const handleScroll = () => {
    setCurrentScrollPos(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div
      className={`${styles.UpButton} ${
        currentScrollPos > 200 ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <button
        className="Button"
        aria-label="scroll to the top of the page"
        onClick={() =>
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
      >
        <FaArrowUp />
      </button>
    </div>
  )
}

export default UpButton
