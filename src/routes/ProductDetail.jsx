import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/products'

const ProductDetail = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProduct(productId)
      .then((result) => {
        setProduct(result)
      })
  }, [productId])

  return (
    <div>
      <h1>ProductDetail productId: {productId}</h1>
      {
        product && (
          <>
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </>
        )
      }
    </div>
  )
}

export default ProductDetail
