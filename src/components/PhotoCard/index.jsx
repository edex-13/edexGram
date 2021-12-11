import React, { useState, useEffect, useRef } from 'react'

import { useLocalStorage } from '../../hooks/useLocalStorage'

import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

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

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon size='25px' />{likes} likes!
            </Button>
          </>
      }

    </Article>
  )
}

export { PhotoCard }
