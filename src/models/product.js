class Product {
    id;
    name;
    price;
    stock;
    imgUrl;
    quantity;
    category;

    constructor(id, name, price, stock, imgUrl, quantity, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.imgUrl = imgUrl;
        this.quantity = quantity;
        this.category = category;
    }
}

export default Product;