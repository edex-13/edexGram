import React from 'react'
import { categories } from '../../db'
import { Category } from '../Category'

import { List, Item } from './styles'

const ListOfCategories = () => {
  return (
    <List>
      {
        categories.map(category =>
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        )
      }
    </List>
  )
}

export { ListOfCategories }
