import { useParams } from 'react-router-dom'

import Loader from '@/components/Loader/Loader';
import CenterContainer from '@/components/CenterContainer/CenterContainer';
import ProductListContainer from '@/components/ProductListContainer/ProductListContainer'

import useProducts from '@/hooks/useProducts';

import './ProductList.scss'

const List = ({ products }) => (
  products.length === 0
    ? <CenterContainer><p>No hay productos</p></CenterContainer>
    : <ProductListContainer products={products}/>
)

const ProductList = () => {
  const { category } = useParams()
  const { products, loading } = useProducts({ category })

  return (
    <>
      {
        loading
          ? <CenterContainer><Loader /></CenterContainer>
          : <List products={products} />
      }
    </>
  )
}

export default ProductList
