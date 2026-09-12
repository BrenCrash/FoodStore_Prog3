
import { PRODUCTS, getCategories } from "../../../data/data";
import { agregarAlCarrito } from "../../../utils/cart";


const nav = document.querySelector<HTMLElement>("#categorias")!;
const main = document.querySelector<HTMLElement>("#productos")!;
const buscador = document.querySelector<HTMLInputElement>("#buscador")!;

const categorias = getCategories();
let categoria_activa = "Todas";
const dibujarCategorias = (): void => {
    nav.innerHTML = "";

    const botonTodas = document.createElement("button");
    botonTodas.textContent = "Todas";

    botonTodas.addEventListener("click", () => {
        categoria_activa = "Todas";
        dibujarCategorias();
        dibujarProductos();
    });

    nav.appendChild(botonTodas);
    categorias.forEach((categoria) => {
        const boton = document.createElement("button");
        boton.textContent = categoria.nombre;
        boton.addEventListener("click", () => {

            categoria_activa = categoria.nombre;
            dibujarCategorias();
            dibujarProductos();
        });

        nav.appendChild(boton);
    });
};

const dibujarProductos = (): void => {
    main.innerHTML = "";

    const productos_filtrados = PRODUCTS.filter((producto) => {

        const coincide_categoria =
            categoria_activa === "Todas" ||
            producto.categorias.some(
                (categoria) => categoria.nombre === categoria_activa
            );

        const coincide_nombre = producto.nombre
            .toLocaleLowerCase()
            .includes(buscador.value.toLocaleLowerCase());

        return coincide_categoria && coincide_nombre;
    });

    if (productos_filtrados.length === 0) {
        main.innerHTML = "<p>no se encontraron productos</p>";
    }

    productos_filtrados.forEach((producto) => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `

            <img src="/img/${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito</button>
            
        `;
        
   const boton = div.querySelector<HTMLButtonElement>("button")!;

         boton.addEventListener("click", () => {
         agregarAlCarrito({
            ...producto, cantidad: 1
    });

    alert("Producto agregado al carrito");
});

        main.appendChild(div);
    });
};

buscador.addEventListener("input", () => {
    dibujarProductos();
});

dibujarCategorias();
dibujarProductos();
