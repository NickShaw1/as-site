import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    // Wait a tick for the page to render before trying to find the element
    const id = hash.slice(1)
    const attempt = (retries: number) => {
      const el = document.getElementById(id)
      if (el) {
        const navHeight = (document.querySelector('header') as HTMLElement)?.offsetHeight ?? 80
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16
        window.scrollTo({ top, behavior: 'smooth' })
      } else if (retries > 0) {
        setTimeout(() => attempt(retries - 1), 50)
      }
    }
    attempt(10)
  }, [pathname, hash])

  return null
}
