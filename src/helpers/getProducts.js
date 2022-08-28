import products from "./products"

const  getProducts = () => new Promise((resolve) => {
    setTimeout(() => resolve(products), 2000)
})

export default getProducts;