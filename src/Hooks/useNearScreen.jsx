import { useEffect, useState, useRef } from 'react'

export default function useNearScreen ({ distance = '100px', externalRef, once = true } = {}) {
  // Screar esta estado constara de que si cambia el estado
  const [isNearScreen, setIsNearScreen] = useState(false)

  // The useRef Hook allows you to persist values between renders.
  // It can be used to store a mutable value that does not cause a re-render when updated.
  // It can be used to access a DOM element directly.
  const fromRef = useRef()

  useEffect(() => {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: `${distance}`
      })
      if (element) observer.observe(element)
    })
    return () => observer && observer.disconnect()
  })
  return { isNearScreen, fromRef }
}
