'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('on')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    // Smooth anchor scrolling
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = (a as HTMLAnchorElement).getAttribute('href')
        if (!href) return
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })
    return () => obs.disconnect()
  }, [])

  return null
}
