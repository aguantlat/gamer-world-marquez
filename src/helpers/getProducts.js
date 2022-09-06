import products from "./products"

const  getProducts = (categoryId) => new Promise((resolve) => {
    setTimeout(() => resolve(categoryId ? products?.filter(p => p.category?.id === categoryId) : products), 2000)
})

export default getProducts;