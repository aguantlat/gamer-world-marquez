class Product {
    id;
    name;
    description;
    price;
    stock;
    imgUrl;
    category;

    constructor(id, name, description, price, stock, imgUrl, category){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.imgUrl = imgUrl;
        this.category = category;
    }
}

export default Product;