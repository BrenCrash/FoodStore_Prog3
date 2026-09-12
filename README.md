# Food Store

## Video explicativo

Video de presentación y explicación del proyecto:

https://www.youtube.com/watch?v=8ZfA7bvAJ4w





Evaluación 1 – Programación III  
Tecnicatura Universitaria en Programación

Este parcial corresponde a la evolución del Trabajo Práctico Integrador de TypeScript realizado anteriormente.

Para resolver esta evaluación se tomó como base ese proyecto previo, conservando su estructura general, autenticación, registro de usuarios y protección de rutas.

El objetivo principal de esta etapa fue incorporar un catálogo más dinámico, búsqueda y filtrado de productos, además de un carrito de compras con persistencia utilizando localStorage.

---
## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- TypeScript
- Vite
- localStorage
- pnpm

No se utilizaron frameworks.

## Funcionalidades implementadas

- Registro de usuarios.
- Inicio de sesión.
- Diferenciación entre usuario administrador y cliente.
- Catálogo de productos cargado dinámicamente.
- Búsqueda de productos por nombre.
- Filtrado de productos por categoría.
- Opción para volver a visualizar todos los productos.
- Agregar productos al carrito.
- Persistencia del carrito mediante localStorage.
- Actualización automática de cantidad cuando se agrega nuevamente el mismo producto.
- Vista independiente del carrito.
- Visualización de nombre, precio y cantidad de cada producto.
- Cálculo automático del total del carrito.
- Mensaje cuando el carrito se encuentra vacío.
- Eliminación de productos del carrito de a una unidad.
- Navegación entre catálogo y carrito.
- Indicador visual al agregar un producto al carrito.

---

## Trabajo previo utilizado como base

Este parcial se realizó sobre el Trabajo Práctico Integrador de TypeScript desarrollado anteriormente.

Se conservaron:

- Registro de usuarios.
- Login.
- Roles de usuario.
- Usuario administrador.
- Uso de localStorage para usuarios y sesión.
- Protección de rutas.
- Estructura base del proyecto.
- Configuración inicial de Vite.

La lógica de protección de rutas no fue modificada, salvo la actualización de las rutas de navegación necesarias para que el usuario cliente acceda a la nueva vista:

```text
src/pages/client/home/home.html
Tecnologías utilizadas
HTML5
CSS3
JavaScript
TypeScript
Vite
localStorage
pnpm

No se utilizaron frameworks.

Estructura principal del parcial
src/
├── pages/
│   ├── auth/
│   ├── admin/
│   └── client/
│       ├── home/
│       │   ├── home.html
│       │   └── home.ts
│       └── cart/
│           ├── cart.html
│           └── cart.ts
├── types/
│   ├── product.ts
│   └── categoria.ts
├── data/
│   └── data.ts
└── utils/
    └── cart.ts

También se mantienen otros archivos del Trabajo Práctico Integrador, como:

src/main.ts
src/utils/auth.ts
src/utils/navigate.ts
src/types/IUser.ts
src/types/Rol.ts
Datos del catálogo

Los productos y categorías se encuentran centralizados en:

src/data/data.ts

Dentro de este archivo se encuentran:

PRODUCTS
getCategories()

Los productos se encuentran tipados con IProduct y las categorías con ICategoria.

Interfaces utilizadas

Las interfaces principales del parcial se encuentran en:

src/types/product.ts
src/types/categoria.ts

Se utilizan:

IProduct
ICartItem
ICategoria

ICartItem extiende de IProduct y agrega la propiedad:

cantidad

para manejar los productos dentro del carrito.

Búsqueda de productos

La vista principal incluye un campo de búsqueda que permite buscar productos por nombre.

La búsqueda:

funciona mientras el usuario escribe;
admite coincidencias parciales;
no distingue entre mayúsculas y minúsculas;
trabaja sobre los productos cargados dinámicamente;
muestra un mensaje cuando no se encuentran resultados.

La lógica se encuentra en:

src/pages/client/home/home.ts
Filtrado por categorías

Las categorías se cargan dinámicamente utilizando:

getCategories()

El usuario puede seleccionar una categoría específica o utilizar la opción:

Todas

para volver a visualizar el catálogo completo.

El filtrado se realiza sobre los datos ya cargados en memoria.

Carrito de compras

La lógica reutilizable del carrito se encuentra en:

src/utils/cart.ts

Las principales funciones implementadas son:

obtenerCarrito()
guardarCarrito()
agregarAlCarrito()
actualizarCantidad()
calcularTotal()
eliminarDelCarrito()

El carrito utiliza la clave:

cart

dentro de localStorage.

Cuando un producto se agrega por primera vez, se guarda con cantidad 1.

Si el mismo producto ya se encuentra en el carrito, no se crea otro ítem, sino que aumenta su cantidad.

También se agregó la posibilidad de eliminar productos de a una unidad.

Vista del carrito

La vista del carrito se encuentra en:

src/pages/client/cart/cart.html

con su lógica en:

src/pages/client/cart/cart.ts

En esta vista se muestra:

Nombre del producto.
Precio.
Cantidad.
Botón para eliminar una unidad.
Total general del carrito.

Si no hay productos almacenados, se muestra el mensaje:

El carrito está vacío
Cálculo del total

El total se calcula utilizando:

precio × cantidad

para cada producto del carrito.

Luego se suman todos los subtotales para obtener el total general.

La función responsable es:

calcularTotal()

ubicada en:

src/utils/cart.ts
LocalStorage

El proyecto utiliza las siguientes claves:

users
userData
cart
users

Almacena los usuarios registrados.

userData

Almacena el usuario actualmente autenticado.

cart

Almacena los productos agregados al carrito junto con sus cantidades.

Usuarios de prueba
Administrador

Email:

admin@foodstore.com

Contraseña:

admin123

El usuario administrador es creado automáticamente por la aplicación si todavía no existe.

Cliente de prueba

Email:

prueba@foodstore.com

Contraseña:

prueba123

El usuario cliente debe existir previamente en localStorage.

Si no se encuentra disponible al ejecutar el proyecto en otro navegador o puerto, puede registrarse nuevamente desde la pantalla de registro utilizando esas mismas credenciales.

Imágenes

Para mejorar la presentación del catálogo se incorporaron imágenes correspondientes a las distintas categorías y productos.

Las imágenes utilizadas por el catálogo se encuentran dentro de:

public/img/

Se agregaron imágenes para:

Pizzas.
Hamburguesas.
Empanadas.
Ensaladas.
Coca-Cola.
Jugo de naranja.
Agua mineral.
Torta.
Helado.
Brownie con helado.

Esto permite que el catálogo tenga una presentación visual más clara y coherente con cada producto.

CSS y presentación

El parcial se enfoca principalmente en la lógica frontend, pero se agregó una mejora visual sencilla para presentar el proyecto de una manera más prolija.

Como referencia se observó el estilo visual del trabajo final publicado en el campus virtual.

Se incorporaron algunos detalles similares, sin implementar todavía el diseño completo del proyecto final:

Fondo gris claro.
Tarjetas blancas.
Sombras suaves.
Bordes redondeados.
Botones en color coral/naranja.
Mejor separación entre los productos.
Mejor presentación del carrito.
Total destacado visualmente.

Estos cambios fueron realizados únicamente para mejorar la presentación general del parcial y no modifican la lógica requerida.

Protección de rutas

La protección de rutas pertenece al Trabajo Práctico Integrador previo.

En este parcial esa lógica no fue modificada.

Se mantuvo el funcionamiento existente para:

usuario no autenticado;
usuario administrador;
usuario cliente.

Únicamente se actualizaron las rutas necesarias para que el cliente acceda al nuevo catálogo ubicado en:

src/pages/client/home/home.html
Configuración de Vite

Las páginas HTML del proyecto se encuentran registradas en:

vite.config.ts

Se incluyen:

index.html
src/pages/auth/registro/registro.html
src/pages/auth/login/login.html
src/pages/client/home/home.html
src/pages/client/cart/cart.html
src/pages/admin/admin.html

También se utiliza:

base: "./"

para permitir que el proyecto compile y navegue correctamente.

Instalación y ejecución

Para ejecutar el proyecto es necesario tener Node.js y pnpm disponibles.

1. Instalar dependencias

Abrir una terminal dentro de la carpeta del proyecto y ejecutar:

pnpm install
2. Levantar el servidor de desarrollo
pnpm dev

Por defecto, Vite utiliza:

http://localhost:5173
Build del proyecto

Para generar la versión de producción:

pnpm build

El proceso ejecuta:

tsc
vite build

para validar TypeScript y posteriormente generar el contenido de producción dentro de:

dist/
Probar el build

Para comprobar la versión compilada:

pnpm preview

Vite mostrará en la terminal la URL local disponible.

El proyecto fue probado tanto con:

pnpm dev
pnpm build
pnpm preview

verificando correctamente:

navegación;
login;
catálogo;
búsqueda;
filtros;
imágenes;
carrito;
persistencia;
cantidades;
total;
eliminación de productos.
Autor

Brenda Florencia Romero

Tecnicatura Universitaria en Programación
Programación III