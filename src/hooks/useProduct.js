import { useState, useEffect } from 'react';

import { getProduct } from '../services/products'

const useProduct = (productId) => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    setLoading(true)

    getProduct(productId)
      .then((result) => {
        setProduct(result)
      })
      // TODO: manejar error en el catch
      .finally(() => {
        setLoading(false)
      })
  }, [productId])

  return { product, loading }
}

export default useProduct
