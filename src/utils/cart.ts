import type { ICartItem } from "../types/product";

export const obtenerCarrito = (): ICartItem[] => {
    const carrito = localStorage.getItem("cart");
    if (carrito) {
        return JSON.parse(carrito);
    }
    return [];
};

export const guardarCarrito = (carrito: ICartItem[]): void => {
    const carritoTexto = JSON.stringify(carrito);
    localStorage.setItem("cart", carritoTexto);
};

export const agregarAlCarrito = (producto: ICartItem): void => {
    const carrito = obtenerCarrito();
    const productoExistente = carrito.find(
        (item) => item.id === producto.id
    );

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push(producto);
    }

    guardarCarrito(carrito);
};

export const actualizarCantidad = (id: number, cantidad: number): void => {
    const carrito = obtenerCarrito();
    const producto = carrito.find((item) => item.id === id);

    if (producto) {
        producto.cantidad = cantidad;
    }

    guardarCarrito(carrito);
};

export const calcularTotal = (): number => {
    const carrito = obtenerCarrito();
    let total = 0;
    carrito.forEach((item) => {
        total += item.precio * item.cantidad;
    });

    return total;
};


export const eliminarDelCarrito = (id: number): void => {
    const carrito = obtenerCarrito();

    const producto = carrito.find((item) => item.id === id);

    if (producto) {
        if (producto.cantidad > 1) {
            producto.cantidad--;
            guardarCarrito(carrito);
        } else {
            const carritoActualizado = carrito.filter(
                (item) => item.id !== id
            );

            guardarCarrito(carritoActualizado);
        }
    }
};