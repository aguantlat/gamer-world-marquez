class Product {
    id;
    name;
    description;
    price;
    stock;
    imgUrl;
    quantity;
    category;

    constructor(id, name, description, price, stock, imgUrl, quantity, category){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.imgUrl = imgUrl;
        this.quantity = quantity;
        this.category = category;
    }
}

export default Product;