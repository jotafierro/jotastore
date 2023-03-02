import jsonAll from './mocks/products.json'
import jsonDetail from './mocks/product_1.json'

export const getProducts = async ({ category }) => {
  try {
    // hack: mapear los datos es una buena practica para que manejar los datos
    // como nosotros esperamos y en caso de que cambie la api tener un solo lugar
    // donde realizar el cambio
    return jsonAll?.products?.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail,
    }))
  } catch (error) {
    console.log("🚀 ~ file: products.js:17 ~ getProducts ~ error:", error)
    throw new Error('Error get products')
  }
}

export const getProduct = async (id) => {
  try {
    // hack: mapear los datos es una buena practica para que manejar los datos
    // como nosotros esperamos y en caso de que cambie la api tener un solo lugar
    // donde realizar el cambio
    return {
      id: jsonDetail.id,
      title: jsonDetail.title,
      description: jsonDetail.description,
      price: jsonDetail.price,
      stock: jsonDetail.stock,
      category: jsonDetail.category,
      images: jsonDetail.images,
    }
  } catch (error) {
    console.log("🚀 ~ file: products.js:17 ~ getProducts ~ error:", error)
    throw new Error(`Error get product with id: ${id}`)
  }
}
