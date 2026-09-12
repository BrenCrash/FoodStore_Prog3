import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                authRegistro: resolve( __dirname, "src/pages/auth/registro/registro.html"),
                authLogin: resolve( __dirname, "src/pages/auth/login/login.html"),
                clientHome: resolve( __dirname, "src/pages/client/home/home.html"),
                clientCart: resolve( __dirname, "src/pages/client/cart/cart.html"),
                admin: resolve(__dirname, "src/pages/admin/admin.html"),
            },
        },
    },
    base: "./",
});



