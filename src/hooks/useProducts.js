import { useState, useEffect } from 'react'
import { getProducts } from '../services/products'

const useProducts = ({ category }) => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setLoading(true)

    getProducts({ category })
      .then((products) => {
        setProducts(products)
      })
      // TODO: manejar error en el catch
      .finally(() => {
        setLoading(false)
      })
  }, [category])

  return { products, loading }
}

export default useProducts
