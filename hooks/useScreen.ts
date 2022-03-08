import { useEffect, useState } from 'react'
import { theme } from '../tailwind.config'

type Size = keyof typeof theme.screens

const useScreen = (size: Size) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const queryScreen = Number(theme.screens[size].replace('px', ''))
      if (window.innerWidth >= queryScreen) {
        setMatches(true)
      } else {
        setMatches(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return matches
}

export default useScreen
