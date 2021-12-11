import React from 'react'
import { PhotoCard } from '../PhotoCard'

const ListOfPhotoCard = () => {
  return (
    <ul>
      {
        [1, 2, 4, 5, 6].map(id =>
          <li key={id}>
            <PhotoCard id={id} />
          </li>
        )
      }
    </ul>
  )
}

export { ListOfPhotoCard }
