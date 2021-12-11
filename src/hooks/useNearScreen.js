import { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
  const element = useRef(null)

  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        console.log('si')
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])

  return [show, element]
}
