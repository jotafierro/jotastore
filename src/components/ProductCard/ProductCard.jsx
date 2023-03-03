import { Link } from 'react-router-dom';

import dollarFormat from '@/utils/dollarFormat';

import './ProductCard.scss'

const ProductCard = ({ product }) => {
  return (
    <Link to={`/jotastore/product/${product.id}`} className='product-card'>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{dollarFormat(product.price)}</p>
    </Link>
  )
}

export default ProductCard
