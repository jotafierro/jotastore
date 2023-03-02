import './ProductListContainer.scss'
import ProductCard from '../ProductCard/ProductCard';

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
