import products from "./products"

const getItem = (id) => new Promise((resolve) => {
    setTimeout(() => resolve(products?.find(p => p?.id === id)), 2000)
})

export default getItem;