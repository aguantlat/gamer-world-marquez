import Product from "../models/product";
import { accesorios, consolas, videojuegos } from "./categories";


import PS5 from "../assets/ps5.jfif";
import XBOX from "../assets/xbox.png";
import GHOST from "../assets/ghostoftsushima.jpg";
import PSVR from "../assets/psvr.jpg";
import FIFA from "../assets/fifa.jpg";

const products = [
     new Product(1, 'Playstation 5', 150000, 20, PS5, 0, consolas),
     new Product(2, 'Xbox One', 140000, 5, XBOX, 0, consolas),
     new Product(3, 'Ghost of Tsushima ', 13000, 10, GHOST, 0, videojuegos),
     new Product(4, 'FIFA 23', 15000, 15, FIFA, 0, videojuegos),
     new Product(5, 'Playstation VR', 150000, 2, PSVR, 0, accesorios),
]

export default products;