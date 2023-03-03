import { useParams } from 'react-router-dom';

import Loader from '@/components/Loader/Loader';
import CenterContainer from '@/components/CenterContainer/CenterContainer';

import dollarFormat from '@/utils/dollarFormat';

import useProduct from '@/hooks/useProduct';

import './ProductDetail.scss'

const Detail = ({ product }) => {
  return product
    ? <div className='product-detail'>
        <img src={product.images[0]} alt={product.title} />
        <div className='product-detail__text'>
          <h3>{product.title}</h3>
          <h4>{product.description}</h4>
          <p className='product-detail__text-price'>
            <box-icon
              color='#61C7D2'
              name='purchase-tag'
              size='sx'
            />
            {dollarFormat(product.price)}
          </p>
          <p className='product-detail__text-category'>
            <box-icon
              color='#61C7D2'
              name='category'
              size='sx'
            />
            {product.category}
            </p>
          <p className='product-detail__text-stock'>
            <box-icon
              color='#61C7D2'
              name='package'
              size='sx'
            />
            {product.stock}
          </p>
        </div>
      </div>
    : <CenterContainer><p>No existe el producto</p></CenterContainer>
}

const ProductDetail = () => {
  const { productId } = useParams()
  const { product, loading } = useProduct(productId)

  return (
    <>
    {
      loading
        ? <CenterContainer><Loader /></CenterContainer>
        : <Detail product={product} />
    }
    </>
  )
}

export default ProductDetail
