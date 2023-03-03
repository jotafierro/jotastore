import ProductCard from '@/components/ProductCard/ProductCard';

import './ProductListContainer.scss'

const ProductListContainer = ({ products }) => {
  return (
    <div className="product-list-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductListContainer
