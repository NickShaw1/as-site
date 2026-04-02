import { useEffect, useRef } from 'react'

export function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const rafId = requestAnimationFrame(() => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = `opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms, transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`
    })
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        requestAnimationFrame(() => {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        })
        io.disconnect()
      }
    }, { threshold: 0.08 })
    io.observe(el)
    return () => { cancelAnimationFrame(rafId); io.disconnect() }
  }, [delay])
  return ref
}
