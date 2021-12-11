import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(async () => {
    try {
      setLoading(true)
      const res = await window.fetch(
        'https://edexgram-api-edex.vercel.app/categories'
      )
      const response = await res.json()
      setLoading(false)
      setCategories(response)
    } catch {
      setError(true)
    }
  }, [])
  return { categories, loading, error }
}

const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading, error } = useCategoriesData()
  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 190
      setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [])
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading &&
        (
          [1, 2, 3, 4, 5].map((i) =>
            <Item key={i}>
              <Category loading />
            </Item>)
        )}

      {error && <p>Error ...</p>}

      {!loading && !error && categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}

    </List>
  )
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export { ListOfCategories }
