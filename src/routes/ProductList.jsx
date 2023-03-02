import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductListContainer from '../components/ProductListContainer/ProductListContainer'
import { getProducts } from '../services/products'

const ProductList = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts({ category })
      .then((result) => {
        setProducts(result)
      })
  }, [category])

  return (
    <>
      <h1>{category}</h1>
      {
        products.length === 0
          ? <p>No hay productos</p>
          : <ProductListContainer products={products}/>
      }

    </>
  )
}

export default ProductList
