import Product from "../models/product";
import { accesorios, consolas, videojuegos } from "./categories";


import PS5 from "../assets/ps5.jfif";
import XBOX from "../assets/xbox.png";
import GHOST from "../assets/ghostoftsushima.jpg";
import PSVR from "../assets/psvr.jpg";
import FIFA from "../assets/fifa.jpg";

const products = [
     new Product(1, 'Playstation 5', `Con la PlayStation 5 experimentá una carga increíblemente rápida con un SSD de ultra alta velocidad, y descubrí una experiencia de juego más intensa e inmersiva con el innovador control PS5 que cuenta con respuesta háptica y efectos de gatillo dinámicos. El control inalámbrico DualSense también incluye un micrófono integrado y el nuevo botón crear, todo en un diseño cómodo e icónico. Incluye Juego Horizon Forbidden West.`, 150000, 20, PS5, 0, consolas),
     new Product(2, 'Xbox One', `Disfruta de juegos envolventes en 4K con Xbox One X. Da vida a tus videojuegos y disfruta 4K Blu-ray y del streaming de video 4K en la consola Xbox One X.`, 140000, 5, XBOX, 0, consolas),
     new Product(3, 'Ghost of Tsushima', `Con este juego de Ghost of Tsushima vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.
     `, 13000, 10, GHOST, 0, videojuegos),
     new Product(4, 'FIFA 23', `FIFA es el videojuego de fútbol más vendido de la actualidad y con más de 25 años de desarrollo. Vas a poder jugar con tus equipos y futbolistas preferidos en diversos modos. ¡Preparate para convertirte en campeón de todas las copas y torneos!`, 15000, 15, FIFA, 0, videojuegos),
     new Product(5, 'Playstation VR', `Personaliza el uso compartido de tu juego. Dado que cuenta con lentes duales para capturar a 1080p y un soporte integrado, la cámara HD funciona a la perfección con las herramientas de eliminación de fondos de la consola PS5 para ponerte en el centro de la atención.`, 150000, 2, PSVR, 0, accesorios),
]

export default products;