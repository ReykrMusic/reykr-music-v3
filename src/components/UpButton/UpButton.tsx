import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

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
      className={`text-white text-4xl fixed bottom-12 right-12 duration-300 hidden xl:flex ${
        currentScrollPos > 200 ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <button
        className="hover:contrast-50 focus:contrast-50 transition"
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
