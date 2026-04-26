'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade'
  delay?: number
}

export default function RevealOnScroll({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add('reveal-visible')
          }, delay)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  const animationClass = `reveal reveal-${animation}`

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}
