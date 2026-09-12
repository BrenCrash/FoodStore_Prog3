import { obtenerCarrito, calcularTotal, eliminarDelCarrito } from "../../../utils/cart";

const main = document.querySelector<HTMLElement>("#carrito")!;
const total = document.querySelector<HTMLElement>("#total")!;

const carrito = obtenerCarrito()

const dibujarCarrito = (): void => {
    main.innerHTML = "";

    if (carrito.length === 0) {
        main.innerHTML = "<p>El carrito está vacío</p>";
    }

    carrito.forEach((item) => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h3>${item.nombre}</h3>
            <p>Precio: $${item.precio}</p>
            <p>Cantidad: ${item.cantidad}</p>
            <button>Eliminar</button>
        `;
       const boton = div.querySelector<HTMLButtonElement>("button")!;

        boton.addEventListener("click", () => {
            eliminarDelCarrito(item.id);
            location.reload();
        });
 

        main.appendChild(div);
    });
};

const dibujarTotal = (): void => {
    total.textContent = `Total: $${calcularTotal()}`;
};

dibujarCarrito();
dibujarTotal();