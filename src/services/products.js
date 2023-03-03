export const getProducts = async ({ category = 'smartphones' }) => {
  try {
    const resp = await fetch(`https://dummyjson.com/products/category/${category}`)
    const json = await resp.json()

    return json?.products?.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail,
    }))
  } catch (error) {
    throw new Error('Error get products')
  }
}

export const getProduct = async (productId) => {
  try {
    const resp = await fetch(`https://dummyjson.com/products/${productId}`)

    if (resp.ok) {
      const json = await resp.json()

      return {
        id: json.id,
        title: json.title,
        description: json.description,
        price: json.price,
        stock: json.stock,
        category: json.category,
        images: json.images,
      }
    }

    if (resp.status === 404) {
      return null
    }
  } catch (error) {
    throw new Error(`Error get product with id: ${productId}`)
  }
}
